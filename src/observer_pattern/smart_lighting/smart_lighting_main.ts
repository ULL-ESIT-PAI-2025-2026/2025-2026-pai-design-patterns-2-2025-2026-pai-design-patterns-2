/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Sergio Rosales Calzadilla 
 * @since Mar 14 2026
 * @desc Execution file demonstrating dynamic rewiring in the Observer Pattern.
 */

'use strict';

import { LightSwitch, LightBulb } from './smart_lighting';

function main(): void {
  // Create Subjects (Switches)
  const livingRoomSwitch = new LightSwitch("Living Room Switch");
  const kitchenSwitch = new LightSwitch("Kitchen Switch");
  // Create Observers (Bulbs)
  const sofaBulb = new LightBulb("Sofa Lamp");
  const tvBulb = new LightBulb("TV Backlight");
  const counterBulb = new LightBulb("Kitchen Counter");
  // Initial Wiring (Subscriptions)
  livingRoomSwitch.subscribe(sofaBulb);
  livingRoomSwitch.subscribe(tvBulb);
  kitchenSwitch.subscribe(counterBulb);
  // Test the circuits
  livingRoomSwitch.toggle(); 
  kitchenSwitch.toggle();    
  // Dynamic rewiring: Move the TV Backlight to the kitchen circuit
  console.log(`\n🔌 REWIRING: Disconnecting ${tvBulb.getLocation()} from Living Room and connecting to Kitchen...`);
  livingRoomSwitch.unsubscribe(tvBulb);
  kitchenSwitch.subscribe(tvBulb);
  livingRoomSwitch.toggle(); 
  kitchenSwitch.toggle();    
}

main();