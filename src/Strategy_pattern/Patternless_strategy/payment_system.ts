/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Payment system example without Strategy pattern, using switch in a single class and input from user
 */

import * as readlineSync from 'readline-sync';

export class SistemaPagos {

  private metodoPago: string;

  /** 
   * @desc Initializes the payment system with a chosen payment method
   * @param metodoPago Payment method selected by the user
   */
  constructor(metodoPago: string) {
    this.metodoPago = metodoPago;
  }

  /** 
   * @desc Executes the payment according to the selected method
   * @return void
   */
  public procesarPago(): void {
    switch (this.metodoPago) {
      case 'tarjeta':
        const pinTarjeta: string = readlineSync.question('Introduce el PIN de la tarjeta: ');
        console.log(`Pago con tarjeta realizado, PIN: ${pinTarjeta}`);
        break;
      case 'paypal':
        const emailPaypal: string = readlineSync.question('Introduce el correo de PayPal: ');
        console.log(`Pago con PayPal realizado, correo: ${emailPaypal}`);
        break;
      case 'efectivo':
        console.log('Pago en efectivo realizado');
        break;
      default:
        console.log('Método de pago no válido');
        break;
    }
  }
}

/** 
 * @desc Main function to execute payment example without Strategy
 * @return void
 */
export function main(): void {
  const metodoUsuario: string = readlineSync.question('Elige método de pago (tarjeta/paypal/efectivo): ');
  const sistema: SistemaPagos = new SistemaPagos(metodoUsuario);
  sistema.procesarPago();
}

main();

