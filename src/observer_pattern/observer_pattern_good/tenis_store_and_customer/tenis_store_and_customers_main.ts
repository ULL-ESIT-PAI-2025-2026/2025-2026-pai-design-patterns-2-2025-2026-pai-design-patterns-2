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
 * @desc Main execution file for the Observer Pattern simulation.
 */

import { TenisStore, Customer } from './tenis_store_and_customers';

/**
 * @desc Main function to execute the Observer pattern simulation.
 * It creates a store, some customers, and simulates subscriptions and product releases.
 */
function main(): void {
  const myTenisStore = new TenisStore();
  // Creating new Subscribers
  const carlosAlcaraz = new Customer('Carlos Alcaraz');
  const novakDjokovic = new Customer('Novak Djokovic');
  const omarSy = new Customer('Omar Sy'); 
  console.log(`Subscribing ${carlosAlcaraz.getName()} and ${novakDjokovic.getName()} to the store...`);
  myTenisStore.subscribe(carlosAlcaraz);
  myTenisStore.subscribe(novakDjokovic);
  // Notyfing subscribers about new products
  myTenisStore.releaseNewProduct('Babolat Pure Aero 2026');
  // Unsubscribing example
  console.log(`\n${novakDjokovic.getName()} is unsubscribing from the store...`);
  myTenisStore.unsubscribe(novakDjokovic);
  // New subscriber that was a customer
  console.log(`${omarSy.getName()} is subscribing to the store...`);
  myTenisStore.subscribe(omarSy);
  myTenisStore.releaseNewProduct('Nike Zoom Vapor Pro Shoes');
}

main();