/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Sergio Rosales Calzadilla
 * @since Mar 15 2026
 * @desc Execution file demonstrating the Composite Pattern with a corporate hierarchy.
 */

import { Worker, Manager } from './company_structure';

/** @desc Main execution function */
function main(): void {
  console.log("--- CORPORATE PAYROLL SYSTEM --- \n");
  // Create Individual Contributors (Leaves)
  const frontendDeveloper = new Worker("Alice", "Frontend Developer", 40000);
  const backendDeveloper = new Worker("Bob", "Backend Developer", 45000);
  const uxDesigner = new Worker("Charlie", "UX Designer", 38000);
  const recruiter = new Worker("Diana", "Recruiter", 35000);
  const payrollSpecialist = new Worker("Eve", "Payroll Specialist", 37000);
  // Create Mid-level Managers (Composites)
  const engineeringManager = new Manager("Frank", "Engineering Lead", 60000);
  engineeringManager.addSubordinate(frontendDeveloper);
  engineeringManager.addSubordinate(backendDeveloper);
  engineeringManager.addSubordinate(uxDesigner);
  const humanResourcesDirector = new Manager("Grace", "HR Director", 55000);
  humanResourcesDirector.addSubordinate(recruiter);
  humanResourcesDirector.addSubordinate(payrollSpecialist);
  // Create the Top-level Executive (Root Composite)
  const chiefExecutiveOfficer = new Manager("Hank", "CEO", 120000);
  chiefExecutiveOfficer.addSubordinate(engineeringManager);
  chiefExecutiveOfficer.addSubordinate(humanResourcesDirector);
  // Adding a leaf directly to the root (The CEO's personal assistant)
  const executiveAssistant = new Worker("Ivy", "Executive Assistant", 30000);
  chiefExecutiveOfficer.addSubordinate(executiveAssistant);
  // The accounting software treats an individual, a team, or the whole company exactly the same way.
  console.log("Querying individual payroll costs:");
  console.log(`- Cost of ${frontendDeveloper.getRoleDescription()}: €${frontendDeveloper.getSalaryCost()}`);
  console.log("\nQuerying department payroll costs:");
  console.log(`- Cost of Engineering Dept (Lead + Team): €${engineeringManager.getSalaryCost()}`);
  console.log(`- Cost of HR Dept (Director + Team): €${humanResourcesDirector.getSalaryCost()}`);
  console.log("\nQuerying entire company payroll cost:");
  console.log(`- Total Company Payroll: €${chiefExecutiveOfficer.getSalaryCost()}`);
  console.log("\nDetailed Organization Chart:");
  chiefExecutiveOfficer.showHierarchy();
}

main();