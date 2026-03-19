/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @since Mar 13 2026
 * @desc Zombie simulation using Prototype pattern
 */

import * as readlineSync from 'readline-sync';

abstract class ZombiePrototype {
  protected name: string;
  protected health: number;
  protected attack: number;

  /**
   * @desc Creates a clone of the zombie
   * @return ZombiePrototype Zombie clone
   */
  abstract clone(): ZombiePrototype;

  /**
   * @desc Reduces the zombie's health
   * @param damage Amount of damage to apply
   */
  receiveDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  /**
   * @desc Returns a string representation of the zombie
   * @return string with name and health
   */
  toString(): string {
    return `${this.name} (Health: ${this.health})`;
  }
}

class Zombie extends ZombiePrototype {

  /**
   * @desc Initializes a zombie with name, health and attack
   * @param name Zombie name
   * @param health Initial health
   * @param attack Zombie attack
   */
  constructor(name: string, health: number, attack: number) {
    super();
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  /**
   * @desc Clones the current zombie
   * @return ZombiePrototype Zombie clone
   */
  clone(): ZombiePrototype {
    return new Zombie(this.name, this.health, this.attack);
  }

  /**
   * @desc Changes the zombie's name
   * @param newName New name
   */
  setName(newName: string): void {
    this.name = newName;
  }
}

function main(): void {
  const zombies: ZombiePrototype[] = [];
  const baseZombie: Zombie = new Zombie('BaseZombie', 100, 10);
  let turn: number = 1;

  while (true) {
    console.log(`\n--- Turn ${turn} ---`);

    const newZombie: ZombiePrototype = baseZombie.clone();
    (newZombie as Zombie).setName(`Zombie${turn}`);
    zombies.push(newZombie);

    console.log(`A new zombie has appeared: ${newZombie.toString()}`);
    console.log('Current zombies:');

    zombies.forEach((zombie, index) => {
      console.log(`${index + 1}: ${zombie.toString()}`);
    });

    const action: string = readlineSync.question('Choose action (attack/exit): ');

    if (action === 'exit') {
      console.log('Exiting the game...');
      break;
    } else if (action === 'attack') {
      const indexToAttack: number = Number(
        readlineSync.question('Choose zombie number to attack: ')
      ) - 1;

      if (indexToAttack >= 0 && indexToAttack < zombies.length) {
        zombies[indexToAttack].receiveDamage(30);
        console.log(`You attacked ${zombies[indexToAttack].toString()}`);
      } else {
        console.log('Invalid zombie number');
      }
    } else {
      console.log('Invalid action');
    }

    turn++;
  }
}

main();

