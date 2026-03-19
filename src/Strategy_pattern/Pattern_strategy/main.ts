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

import { PaymentMethod } from './MetodoPago.ts';
import { CardPayment } from './PagoTarjeta.ts';
import { PaypalPayment } from './PagoPayPal.ts';
import { CashPayment } from './PagoEfectivo.ts';
import { PaymentSystem } from './SistemaPagos.ts';

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

