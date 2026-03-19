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
 * @desc Payment system example without Strategy pattern, using switch in a single class and user input
 */

import * as readlineSync from 'readline-sync';

export class PaymentSystem {

  private paymentMethod: string;

  /** 
   * @desc Initializes the payment system with a chosen payment method
   * @param paymentMethod Payment method selected by the user
   */
  constructor(paymentMethod: string) {
    this.paymentMethod = paymentMethod;
  }

  /** 
   * @desc Executes the payment according to the selected method
   */
  processPayment(): void {
    switch (this.paymentMethod) {
      case 'card':
        const cardPin: string = readlineSync.question('Enter card PIN: ');
        console.log(`Payment by card completed, PIN: ${cardPin}`);
        break;

      case 'paypal':
        const paypalEmail: string = readlineSync.question('Enter PayPal email: ');
        console.log(`Payment via PayPal completed, email: ${paypalEmail}`);
        break;

      case 'cash':
        console.log('Cash payment completed');
        break;

      default:
        console.log('Invalid payment method');
        break;
    }
  }
}

/** 
 * @desc Main function to execute payment example without Strategy
 */
export function main(): void {
  const userMethod: string = readlineSync.question(
    'Choose payment method (card/paypal/cash): '
  );

  const system: PaymentSystem = new PaymentSystem(userMethod);
  system.processPayment();
}

main();

