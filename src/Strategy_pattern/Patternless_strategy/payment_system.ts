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
 * Payment system example without Strategy pattern, using switch in a single class and user input
 */

'use strict';

export class PaymentSystem {
  private paymentMethod: string;

  /** 
   * Initializes the payment system with a chosen payment method
   * @param paymentMethod Payment method selected by the user
   */
  constructor(paymentMethod: string) {
    this.paymentMethod = paymentMethod;
  }

  /** 
   * Executes the payment according to the selected method
   */
  processPayment(): void {
    switch (this.paymentMethod) {
      case 'card':
        const cardPin: string = "1234";
        console.log(`[CARD]: Payment completed using PIN: ${cardPin}`);
        break;

      case 'paypal':
        const paypalEmail: string = "user@example.com";
        console.log(`[PAYPAL]: Payment completed for email: ${paypalEmail}`);
        break;

      case 'cash':
        console.log('[CASH]: Cash payment completed at register');
        break;

      default:
        console.log(`[ERROR]: Invalid payment method "${this.paymentMethod}"`);
        break;
    }
  }
}

/** 
 * Main function to execute payment example without Strategy
 */
export function main(): void {
  console.log("--- STARTING AUTOMATED PAYMENT SIMULATION ---");
  console.log("\nScenario 1: User chooses Card");
  const cardSystem = new PaymentSystem('card');
  cardSystem.processPayment();
  console.log("\nScenario 2: User chooses PayPal");
  const paypalSystem = new PaymentSystem('paypal');
  paypalSystem.processPayment();
  console.log("\nScenario 3: User tries Bitcoin (Not implemented yet)");
  const cryptoSystem = new PaymentSystem('bitcoin');
  cryptoSystem.processPayment();
}

main();

