/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Zombies complejos sin usar patrón Prototype
 */

import * as readlineSync from 'readline-sync';

type Posicion = { x: number, y: number };
type Item = { nombre: string, cantidad: number };
type Efecto = { tipo: string, duracion: number };

class Zombie {
  private nombre: string;
  private vida: number;
  private ataque: number;
  private velocidad: number;
  private resistencia: number;
  private habilidades: string[];
  private inventario: Item[];
  private efectos: Efecto[];
  private posicion: Posicion;

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

  public recibirDaño(daño: number): void {
    this.vida -= daño;
    if (this.vida < 0) this.vida = 0;
  }

  public getNombre(): string { return this.nombre; }
  public setNombre(nuevoNombre: string): void { this.nombre = nuevoNombre; }

  public toString(): string {
    return `${this.nombre} | Vida: ${this.vida}, Ataque: ${this.ataque}, Velocidad: ${this.velocidad}, ` +
           `Habilidades: [${this.habilidades.join(', ')}], Inventario: [${this.inventario.map(i => i.nombre).join(', ')}], ` +
           `Efectos: [${this.efectos.map(e => e.tipo).join(', ')}], Posicion: (${this.posicion.x},${this.posicion.y})`;
  }
}

function main(): void {
  const zombies: Zombie[] = [];
  let turno: number = 1;
  while (true) {
    console.log(`\n--- Turno ${turno} ---`);
    const nuevoZombie: Zombie = new Zombie(
      `Zombie${turno}`,
      100,
      10,
      5,
      3,
      ['morder', 'correr'],
      [{ nombre: 'cráneo', cantidad: 1 }],
      [],
      { x: turno, y: turno }
    );
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
