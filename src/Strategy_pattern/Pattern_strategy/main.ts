/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 * 
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @desc Main entry that asks the user for data and executes the payment
 */

import * as readlineSync from 'readline-sync';

import { PaymentMethod } from './payment_method.ts';
import { CardPayment } from './target_payment.ts';
import { PaypalPayment } from './paypal_payment.ts';
import { CashPayment } from './effective_payment.ts';
import { PaymentSystem } from './payment_system.ts';

function main(): void {
  const userMethod: string = readlineSync.question(
    'Choose payment method (card/paypal/cash): '
  );
  let userPayment: PaymentMethod;
  switch (userMethod) {
    case 'card':
      const cardPin: string = readlineSync.question('Enter card PIN: ');
      userPayment = new CardPayment(cardPin);
      break;
    case 'paypal':
      const paypalEmail: string = readlineSync.question('Enter PayPal email: ');
      userPayment = new PaypalPayment(paypalEmail);
      break;
    case 'cash':
      userPayment = new CashPayment();
      break;
    default:
      console.log('Invalid payment method');
      return;
  }
  const system: PaymentSystem = new PaymentSystem(userPayment);
  system.processPayment();
}

main();

