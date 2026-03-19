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
 * @desc Implementation of cash payment
 */

import { PaymentMethod } from './MetodoPago.ts';

export class CashPayment extends PaymentMethod {

  /** 
   * @desc Executes the cash payment
   */
  processPayment(): void {
    console.log('Cash payment completed');
  }
}

