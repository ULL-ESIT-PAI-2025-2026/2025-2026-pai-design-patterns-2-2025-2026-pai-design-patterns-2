/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González 
 * @since Mar 14 2026
 * @desc Main execution file for the BAD DESIGN (No Observer Pattern).
 */

'use strict';

import { TenisStore, Customer } from './tenis_store_and_customer_bad';

/**
 * Main function to execute the simulation.
 */
function main(): void {
  const myTenisStore = new TenisStore();
  const carlosAlcaraz = new Customer("Carlos Alcaraz");
  const novakDjokovic = new Customer("Novak Djokovic");
  const omarSy = new Customer("Omar Sy"); 
  console.log(`Adding ${carlosAlcaraz.getName()} and ${novakDjokovic.getName()} to the internal list...`);
  myTenisStore.addCustomer(carlosAlcaraz);
  myTenisStore.addCustomer(novakDjokovic);
  myTenisStore.releaseProduct("Babolat Pure Aero 2026");
  console.log(`\nRemoving ${novakDjokovic.getName()} manually...`);
  myTenisStore.removeCustomer(novakDjokovic);
  console.log(`Adding ${omarSy.getName()}...`);
  myTenisStore.addCustomer(omarSy);
  myTenisStore.releaseProduct("Nike Zoom Vapor Pro Shoes");
}

main();