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
 * @desc main of the Divide and Conquer Template Pattern example. 
 */

'use strict';

import { MarathonCounter, WarehouseInspector } from './different_algorithms';

function main(): void {
  // First example: Counting runners in a marathon.
  const runners = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
  const counter = new MarathonCounter();
  const totalRunners = counter.solve(runners);
  console.log('Runners counter:');
  console.log(`Total of runners: ${totalRunners}`);
  console.log('');
  // Second example: Inspecting warehouse temperatures.
  const temps = [20, 22, 35, 18];
  const inspector = new WarehouseInspector();
  const alert = inspector.solve(temps);
  console.log('Warehouse inspector:');
  if (alert === 1) {
    console.log('ALERT: Temperature too high! Immediate action required.');
  } else {
    console.log('All products are within safe temperature limits.');
  }
}

main();