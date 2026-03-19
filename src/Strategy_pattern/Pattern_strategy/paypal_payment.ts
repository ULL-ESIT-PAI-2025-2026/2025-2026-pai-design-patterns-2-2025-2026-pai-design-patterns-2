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
 * Implementation of PayPal payment
 */

import { PaymentMethod } from './payment_method.ts';

export class PaypalPayment extends PaymentMethod {
  private readonly email: string;

  /** 
   * Initializes a PayPal payment
   * @param email PayPal account email
   */
  constructor(email: string) {
    super();
    this.email = email;
  }

  /** 
   * Executes the PayPal payment
   */
  processPayment(): void {
    console.log(`Payment via PayPal completed, email: ${this.email}`);
  }
}

