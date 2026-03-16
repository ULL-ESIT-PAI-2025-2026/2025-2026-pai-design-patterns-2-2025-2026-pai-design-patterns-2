/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Simulación de zombies sin usar patrón Prototype
 */

import * as readlineSync from 'readline-sync';

class Zombie {
  private nombre: string;
  private vida: number;
  private ataque: number;

  /**
   * @desc Crea un nuevo zombie
   * @param nombre Nombre del zombie
   * @param vida Vida inicial
   * @param ataque Valor de ataque
   */
  constructor(nombre: string, vida: number, ataque: number) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  /**
   * @desc Disminuye la vida del zombie
   * @param daño Cantidad de daño a aplicar
   * @return void
   */
  public recibirDaño(daño: number): void {
    this.vida -= daño;
    if (this.vida < 0) {
      this.vida = 0;
    }
  }

  /**
   * @desc Devuelve la vida del zombie
   * @return Vida actual
   */
  public getVida(): number {
    return this.vida;
  }

  /**
   * @desc Devuelve una representación en string del zombie
   * @return String con nombre y vida
   */
  public toString(): string {
    return `${this.nombre} (Vida: ${this.vida})`;
  }
}

function main(): void {
  const zombies: Zombie[] = [];
  let turno: number = 1;
  while (true) {
    console.log(`\n--- Turno ${turno} ---`);
    const nuevoZombie: Zombie = new Zombie(`Zombie${turno}`, 100, 10);
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
