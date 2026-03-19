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
 * @desc System that processes payments using a strategy
 */

import { PaymentMethod } from './MetodoPago.ts';

export class PaymentSystem {
  private paymentMethod: PaymentMethod;

  /** 
   * @desc Initializes the system with a payment strategy
   * @param paymentMethod Payment strategy to use
   */
  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  /** 
   * @desc Executes the payment using the selected strategy
   */
  processPayment(): void {
    this.paymentMethod.processPayment();
  }
}
