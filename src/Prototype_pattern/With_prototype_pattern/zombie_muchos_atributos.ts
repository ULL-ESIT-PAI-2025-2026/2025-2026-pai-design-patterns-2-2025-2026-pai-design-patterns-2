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
 * @desc Complex zombies using Prototype pattern
 */

import * as readlineSync from 'readline-sync';

type Position = { x: number, y: number };
type Item = { name: string, quantity: number };
type Effect = { type: string, duration: number };

abstract class ZombiePrototype {
  protected name: string;
  protected health: number;
  protected attack: number;
  protected speed: number;
  protected resistance: number;
  protected abilities: string[];
  protected inventory: Item[];
  protected effects: Effect[];
  protected position: Position;

  abstract clone(): ZombiePrototype;

  receiveDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  setName(newName: string): void { this.name = newName; }

  toString(): string {
    return `${this.name} | Health: ${this.health}, Attack: ${this.attack}, Speed: ${this.speed}, ` +
           `Abilities: [${this.abilities.join(', ')}], Inventory: [${this.inventory.map(i => i.name).join(', ')}], ` +
           `Effects: [${this.effects.map(e => e.type).join(', ')}], Position: (${this.position.x},${this.position.y})`;
  }
}

class Zombie extends ZombiePrototype {

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
    super();
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

  clone(): ZombiePrototype {
    return new Zombie(
      this.name,
      this.health,
      this.attack,
      this.speed,
      this.resistance,
      [...this.abilities],
      this.inventory.map(i => ({ ...i })),
      this.effects.map(e => ({ ...e })),
      { ...this.position }
    );
  }

  setPosition(pos: Position): void { this.position = pos; }
}

function main(): void {
  const zombies: ZombiePrototype[] = [];

  const baseZombie: Zombie = new Zombie(
    'BaseZombie',
    100,
    10,
    5,
    3,
    ['bite', 'run'],
    [{ name: 'skull', quantity: 1 }],
    [],
    { x: 0, y: 0 }
  );

  let turn: number = 1;

  while (true) {
    console.log(`\n--- Turn ${turn} ---`);

    const newZombie: ZombiePrototype = baseZombie.clone();
    (newZombie as Zombie).setName(`Zombie${turn}`);
    (newZombie as Zombie).setPosition({ x: turn, y: turn });

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

