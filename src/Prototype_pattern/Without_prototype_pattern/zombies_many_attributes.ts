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
 * @desc Complex zombies without using Prototype pattern
 */

import * as readlineSync from 'readline-sync';

type Position = { coordenadaX: number, coordenadaY: number };
type Item = { name: string, quantity: number };
type Effect = { type: string, duration: number };

/** @desc Class to represnt a Zombie with huge amount of attributes */
class Zombie {
  private name: string;
  private health: number;
  private attack: number;
  private speed: number;
  private resistance: number;
  private abilities: string[];
  private inventory: Item[];
  private effects: Effect[];
  private position: Position;

  constructor(
    name: string,
    health: number,
    attack: number,
    speed: number,
    resistance: number,
    abilities: string[],
    inventory: Item[],
    effects: Effect[],
    position: Position
  ) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.speed = speed;
    this.resistance = resistance;
    this.abilities = abilities;
    this.inventory = inventory;
    this.effects = effects;
    this.position = position;
  }
  
  /**
   * @desc Reduces the zombie's health
   * @param damage Amount of damage to apply
   */
  receiveDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }
  /**
   * @desc Getter of the name attribute
   * @return The Zombie name in a string
   */
  getName(): string { return this.name; }

  /**
   * @desc Set a new zombie name to the actual instance
   * @param newName the name to asign to the zombie
   */
  setName(newName: string): void { this.name = newName; }

  /**
   * @desc Method to get a string with the zombie atributes
   * @return A string with all the atributtes of the Zombie
   */
  toString(): string {
    return `${this.name} | Health: ${this.health}, Attack: ${this.attack}, Speed: ${this.speed}, ` +
           `Abilities: [${this.abilities.join(', ')}], Inventory: [${this.inventory.map(i => i.name).join(', ')}], ` +
           `Effects: [${this.effects.map(e => e.type).join(', ')}], Position: (${this.position.coordenadaX},${this.position.coordenadaY})`;
  }
}

/**
 * @desc Main function of the program
 * Note: This main doesn't has several code smells, it is all done with educational purpose!!
 */
function main(): void {
  const zombieList: Zombie[] = [];
  let currentTurn: number = 1;
  while (true) {
    console.log(`\n--- Turn ${currentTurn} ---`);
    const spawnedZombie: Zombie = new Zombie(
      `Zombie${currentTurn}`,
      100,
      10,
      5,
      3,
      ['bite', 'run'],
      [{ name: 'skull', quantity: 1 }],
      [],
      { x: currentTurn, y: currentTurn }
    );
    zombieList.push(spawnedZombie);
    console.log(`A new zombie has appeared: ${spawnedZombie.toString()}`);
    zombieList.forEach((zombie, index) =>
      console.log(`${index + 1}: ${zombie.toString()}`)
    );
    const userAction: string = readlineSync.question('Choose action (attack/exit): ');
    if (userAction === 'exit') break;
    if (userAction === 'attack') {
      const targetIndex: number =
        Number(readlineSync.question('Choose zombie number to attack: ')) - 1;
      if (targetIndex >= 0 && targetIndex < zombieList.length) {
        zombieList[targetIndex].receiveDamage(30);
        console.log(`You attacked ${zombieList[targetIndex].toString()}`);
      } else {
        console.log('Invalid number');
      }
    }
    currentTurn++;
  }
}

main();

