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
 * @desc Execution file demonstrating the Composite Pattern with a car inventory.
 */

import { SimplePart, ComplexAssembly } from './car_component';

/** @desc Main execution function */
function main(): void {
  console.log(' --- CAR MECHANIC QUOTATION SYSTEM --- \n');
  // Create simple parts (Leaves)
  const frontLeftTire = new SimplePart('Front Left Tire', 150);
  const frontRightTire = new SimplePart('Front Right Tire', 150);
  const spareTire = new SimplePart('Spare Tire', 100);
  const sparkPlug1 = new SimplePart('Spark Plug 1', 20);
  const sparkPlug2 = new SimplePart('Spark Plug 2', 20);
  const engineBlock = new SimplePart('V8 Engine Block', 4500);
  // Create intermediate complex assemblies (Composites)
  const engineSystem = new ComplexAssembly('Engine System');
  engineSystem.add(engineBlock);
  engineSystem.add(sparkPlug1);
  engineSystem.add(sparkPlug2);
  const wheelSystem = new ComplexAssembly('Wheel System');
  wheelSystem.add(frontLeftTire);
  wheelSystem.add(frontRightTire);
  // Create the root complex assembly (The whole car)
  const myCar = new ComplexAssembly('Sports Car Model X');
  myCar.add(engineSystem);
  myCar.add(wheelSystem);
  myCar.add(spareTire); 
  // The mechanic just wants to know the price. 
  console.log('Querying individual parts:');
  console.log(`- Price of ${spareTire.getName()}: $${spareTire.howMuchItCost()}`);
  console.log(`- Price of ${engineSystem.getName()}: $${engineSystem.howMuchItCost()}`);
  console.log('\nQuerying the entire car:');
  console.log(`- Total Price of ${myCar.getName()}: $${myCar.howMuchItCost()}`);
  console.log('\nDetailed Breakdown (Tree Structure):');
  myCar.showDetails();
}

main();