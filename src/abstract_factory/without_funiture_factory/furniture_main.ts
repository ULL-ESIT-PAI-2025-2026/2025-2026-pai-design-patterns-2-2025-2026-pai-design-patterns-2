/**
* Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 * 
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @since Mar 17 2026
 * @desc Main of the example of furniture without using the Abstract Factory Pattern.
 */

import { FurnitureClientWithoutFactory } from './furniture_user';

/** @desc Main execution function */
function main() {
  const userChoice = 'Victorian';
  const client = new FurnitureClientWithoutFactory();
  client.addChair(userChoice);
  client.addSofa(userChoice);
  client.addTable(userChoice);
  client.testAllFurniture();
}

main();
