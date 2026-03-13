/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Simulación de zombies usando patrón Prototype
 */

import * as readlineSync from 'readline-sync';

abstract class ZombiePrototype {
  protected nombre: string;
  protected vida: number;
  protected ataque: number;

  /**
   * @desc Crea un clon del zombie
   * @return ZombiePrototype Clon del zombie
   */
  public abstract clone(): ZombiePrototype;

  /**
   * @desc Disminuye la vida del zombie
   * @param daño Cantidad de daño a aplicar
   * @return void
   */
  public recibirDaño(daño: number): void {
    this.vida -= daño;
    if (this.vida < 0) this.vida = 0;
  }

  /**
   * @desc Devuelve una representación del zombie
   * @return string con nombre y vida
   */
  public toString(): string {
    return `${this.nombre} (Vida: ${this.vida})`;
  }
}

class Zombie extends ZombiePrototype {

  /**
   * @desc Inicializa un zombie con nombre, vida y ataque
   * @param nombre Nombre del zombie
   * @param vida Vida inicial
   * @param ataque Ataque del zombie
   */
  constructor(nombre: string, vida: number, ataque: number) {
    super();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  /**
   * @desc Clona el zombie actual
   * @return ZombiePrototype Clon del zombie
   */
  public clone(): ZombiePrototype {
    // Creamos un nuevo zombie con los mismos atributos
    return new Zombie(this.nombre, this.vida, this.ataque);
  }

  /**
   * @desc Cambia el nombre del zombie
   * @param nuevoNombre Nuevo nombre
   */
  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }
}

function main(): void {
  const zombies: ZombiePrototype[] = [];
  const zombieBase: Zombie = new Zombie('ZombieBase', 100, 10);
  let turno: number = 1;
  while (true) {
    console.log(`\n--- Turno ${turno} ---`);
    const nuevoZombie: ZombiePrototype = zombieBase.clone();
    (nuevoZombie as Zombie).setNombre(`Zombie${turno}`);
    zombies.push(nuevoZombie);
    console.log(`Ha aparecido un nuevo zombie: ${nuevoZombie.toString()}`);
    console.log('Zombies actuales:');
    zombies.forEach((zombie, indice) => {
      console.log(`${indice + 1}: ${zombie.toString()}`);
    });
    const accion: string = readlineSync.question('Elige acción (atacar/salir): ');
    if (accion === 'salir') {
      console.log('Saliendo del juego...');
      break;
    } else if (accion === 'atacar') {
      const indiceAtacar: number = Number(readlineSync.question('Elige número de zombie a atacar: ')) - 1;
      if (indiceAtacar >= 0 && indiceAtacar < zombies.length) {
        zombies[indiceAtacar].recibirDaño(30);
        console.log(`Atacaste al ${zombies[indiceAtacar].toString()}`);
      } else {
        console.log('Número de zombie inválido');
      }
    } else {
      console.log('Acción no válida');
    }
    turno++;
  }
}

main();
