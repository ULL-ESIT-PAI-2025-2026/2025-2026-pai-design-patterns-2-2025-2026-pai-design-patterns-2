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
 * @desc Execution file for the BAD DESIGN example.
 */

import { SimplePart, ComplexAssembly } from './car_component_bad';

/**
 * @desc Main execution function
 */
function main(): void {
  console.log(" --- BAD DESIGN SYSTEM (WITHOUT COMPOSITE) --- \n");
  const frontLeftTire = new SimplePart("Front Left Tire", 150);
  const frontRightTire = new SimplePart("Front Right Tire", 150);
  const engineBlock = new SimplePart("V8 Engine Block", 4500);
  const engineSystem = new ComplexAssembly("Engine System");
  // ERROR: We must know specifically that this is a SimplePart
  engineSystem.addPart(engineBlock);
  const wheelSystem = new ComplexAssembly("Wheel System");
  // ERROR: We must call a different method for SimpleParts
  wheelSystem.addPart(frontLeftTire);
  wheelSystem.addPart(frontRightTire);
  const myCar = new ComplexAssembly("Sports Car Model X");
  // ERROR: We must know specifically that these are Assemblies
  myCar.addSubAssembly(engineSystem);
  myCar.addSubAssembly(wheelSystem);
  console.log(`Total Price: $${myCar.howMuchItCost()}`);

  console.log("\nStructure:");
  myCar.showDetails();
}

main();