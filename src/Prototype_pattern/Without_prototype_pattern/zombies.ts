/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @since Mar 13 2026
 * Zombie simulation without using Prototype pattern
 */

import * as readlineSync from 'readline-sync';

class Zombie {
  private name: string;
  private health: number;
  private attack: number;

  /**
   * Creates a new zombie
   * @param name Zombie name
   * @param health Initial health
   * @param attack Attack value
   */
  constructor(name: string, health: number, attack: number) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  /**
   * Reduces the zombie's health
   * @param damage Amount of damage to apply
   */
  receiveDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  /**
   * Returns the zombie's health
   * @return Current health
   */
  getHealth(): number {
    return this.health;
  }

  /**
   * Returns a string representation of the zombie
   * @return String with name and health
   */
  toString(): string {
    return `${this.name} (Health: ${this.health})`;
  }
}

function main(): void {
  const zombies: Zombie[] = [];
  let turn: number = 1;
  while (true) {
    console.log(`\n--- Turn ${turn} ---`);
    const newZombie: Zombie = new Zombie(`Zombie${turn}`, 100, 10);
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
      const indexToAttack: number =
        Number(readlineSync.question('Choose zombie number to attack: ')) - 1;
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

