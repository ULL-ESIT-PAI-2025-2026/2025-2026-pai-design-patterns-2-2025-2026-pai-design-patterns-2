/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Implementation of card payment
 */

import { PaymentMethod } from './payment_method.ts';

export class CardPayment extends PaymentMethod {
  private readonly pin: string;

  /** 
   * @desc Initializes a card payment
   * @param pin Card PIN
   */
  constructor(pin: string) {
    super();
    this.pin = pin;
  }

  /** @desc Executes the card payment */
  processPayment(): void {
    console.log(`Payment by card completed, PIN: ${this.pin}`);
  }
}

