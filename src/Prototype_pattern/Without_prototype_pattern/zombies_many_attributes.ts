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

type Position = { x: number, y: number };
type Item = { name: string, quantity: number };
type Effect = { type: string, duration: number };

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
   * Reduces the zombie's health
   * @param damage Amount of damage to apply
   */
  receiveDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }
  /**
   * @return The Zombine name in a string
   */
  getName(): string { return this.name; }

  /**
   * Set a new zombie name to the actual instance
   * @param newName the name to asign to the zombie
   */
  setName(newName: string): void { this.name = newName; }

  toString(): string {
    return `${this.name} | Health: ${this.health}, Attack: ${this.attack}, Speed: ${this.speed}, ` +
           `Abilities: [${this.abilities.join(', ')}], Inventory: [${this.inventory.map(i => i.name).join(', ')}], ` +
           `Effects: [${this.effects.map(e => e.type).join(', ')}], Position: (${this.position.x},${this.position.y})`;
  }
}

function main(): void {
  const zombies: Zombie[] = [];
  let turn: number = 1;
  while (true) {
    console.log(`\n--- Turn ${turn} ---`);
    const newZombie: Zombie = new Zombie(
      `Zombie${turn}`,
      100,
      10,
      5,
      3,
      ['bite', 'run'],
      [{ name: 'skull', quantity: 1 }],
      [],
      { x: turn, y: turn }
    );
    zombies.push(newZombie);
    console.log(`A new zombie has appeared: ${newZombie.toString()}`);
    zombies.forEach((zombie, idx) =>
      console.log(`${idx + 1}: ${zombie.toString()}`)
    );
    const action: string = readlineSync.question('Choose action (attack/exit): ');
    if (action === 'exit') break;
    if (action === 'attack') {
      const idxToAttack: number =
        Number(readlineSync.question('Choose zombie number to attack: ')) - 1;

      if (idxToAttack >= 0 && idxToAttack < zombies.length) {
        zombies[idxToAttack].receiveDamage(30);
        console.log(`You attacked ${zombies[idxToAttack].toString()}`);
      } else console.log('Invalid number');
    }
    turn++;
  }
}

main();

