/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @desc Entrada principal que pide datos al usuario y ejecuta el pago
 */

import * as readlineSync from 'readline-sync';

import { MetodoPago } from './MetodoPago.ts';
import { PagoTarjeta } from './PagoTarjeta.ts';
import { PagoPaypal } from './PagoPayPal.ts';
import { PagoEfectivo } from './PagoEfectivo.ts';
import { SistemaPagos } from './SistemaPagos.ts';

function main(): void {
  const metodoUsuario: string = readlineSync.question('Elige método de pago (tarjeta/paypal/efectivo): ');
  let pagoUsuario: MetodoPago;
  switch (metodoUsuario) {
    case 'tarjeta':
      const pinTarjeta: string = readlineSync.question('Introduce el PIN de la tarjeta: ');
      pagoUsuario = new PagoTarjeta(pinTarjeta);
      break;
    case 'paypal':
      const emailPaypal: string = readlineSync.question('Introduce el correo de PayPal: ');
      pagoUsuario = new PagoPaypal(emailPaypal);
      break;
    case 'efectivo':
      pagoUsuario = new PagoEfectivo();
      break;
    default:
      console.log('Método de pago no válido');
      return;
  }
  const sistema: SistemaPagos = new SistemaPagos(pagoUsuario);
  sistema.procesarPago();
}

main();
