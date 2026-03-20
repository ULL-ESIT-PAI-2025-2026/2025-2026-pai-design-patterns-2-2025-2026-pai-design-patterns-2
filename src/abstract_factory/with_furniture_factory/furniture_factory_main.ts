/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @since Mar 15 2026
 * @desc Main of the Abstract Factory Pattern example applied to a Furniture Factory.
 */

import { FurnitureClient } from './furniture_factory_user';

/** @desc Main execution function */
function main() {
  const userChoice = 'Victorian'; // Change to 'Modern' to test modern furniture.
  const client = new FurnitureClient(userChoice);
  // Create some furniture items.
  client.addChair();
  client.addSofa();
  client.addTable();
  // Test all created furniture.
  client.testAllFurniture();
}

main();