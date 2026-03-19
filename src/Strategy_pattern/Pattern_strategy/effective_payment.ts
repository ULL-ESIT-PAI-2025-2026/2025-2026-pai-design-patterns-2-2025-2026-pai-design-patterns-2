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
 * Implementation of cash payment
 */

import { PaymentMethod } from './payment_method.ts';

export class CashPayment extends PaymentMethod {

  /** 
   * Executes the cash payment
   */
  processPayment(): void {
    console.log('Cash payment completed');
  }
}

