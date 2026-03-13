/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Zombies complejos usando patrón Prototype
 */

import * as readlineSync from 'readline-sync';

type Posicion = { x: number, y: number };
type Item = { nombre: string, cantidad: number };
type Efecto = { tipo: string, duracion: number };

abstract class ZombiePrototype {
  protected nombre: string;
  protected vida: number;
  protected ataque: number;
  protected velocidad: number;
  protected resistencia: number;
  protected habilidades: string[];
  protected inventario: Item[];
  protected efectos: Efecto[];
  protected posicion: Posicion;

  public abstract clone(): ZombiePrototype;

  public recibirDaño(daño: number): void {
    this.vida -= daño;
    if (this.vida < 0) this.vida = 0;
  }

  public setNombre(nuevoNombre: string): void { this.nombre = nuevoNombre; }

  public toString(): string {
    return `${this.nombre} | Vida: ${this.vida}, Ataque: ${this.ataque}, Velocidad: ${this.velocidad}, ` +
           `Habilidades: [${this.habilidades.join(', ')}], Inventario: [${this.inventario.map(i => i.nombre).join(', ')}], ` +
           `Efectos: [${this.efectos.map(e => e.tipo).join(', ')}], Posicion: (${this.posicion.x},${this.posicion.y})`;
  }
}

class Zombie extends ZombiePrototype {

  constructor(
    nombre: string,
    vida: number,
    ataque: number,
    velocidad: number,
    resistencia: number,
    habilidades: string[],
    inventario: Item[],
    efectos: Efecto[],
    posicion: Posicion
  ) {
    super();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.velocidad = velocidad;
    this.resistencia = resistencia;
    this.habilidades = habilidades;
    this.inventario = inventario;
    this.efectos = efectos;
    this.posicion = posicion;
  }

  public clone(): ZombiePrototype {
    return new Zombie(
      this.nombre,
      this.vida,
      this.ataque,
      this.velocidad,
      this.resistencia,
      [...this.habilidades],
      this.inventario.map(i => ({...i})),
      this.efectos.map(e => ({...e})),
      { ...this.posicion }
    );
  }

  public setPosicion(pos: Posicion): void { this.posicion = pos; }
}

function main(): void {
  const zombies: ZombiePrototype[] = [];
  const zombieBase: Zombie = new Zombie(
    'ZombieBase',
    100,
    10,
    5,
    3,
    ['morder', 'correr'],
    [{ nombre: 'cráneo', cantidad: 1 }],
    [],
    { x: 0, y: 0 }
  );
  let turno: number = 1;
  while (true) {
    console.log(`\n--- Turno ${turno} ---`);
    const nuevoZombie: ZombiePrototype = zombieBase.clone();
    (nuevoZombie as Zombie).setNombre(`Zombie${turno}`);
    (nuevoZombie as Zombie).setPosicion({ x: turno, y: turno });
    zombies.push(nuevoZombie);
    console.log(`Ha aparecido un nuevo zombie: ${nuevoZombie.toString()}`);
    zombies.forEach((zombie, idx) => console.log(`${idx + 1}: ${zombie.toString()}`));
    const accion: string = readlineSync.question('Elige acción (atacar/salir): ');
    if (accion === 'salir') break;
    if (accion === 'atacar') {
      const idxAtacar: number = Number(readlineSync.question('Elige número de zombie a atacar: ')) - 1;
      if (idxAtacar >= 0 && idxAtacar < zombies.length) {
        zombies[idxAtacar].recibirDaño(30);
        console.log(`Atacaste al ${zombies[idxAtacar].toString()}`);
      } else console.log('Número inválido');
    }
    turno++;
  }
}

main();
