/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @desc Implementación de pago en efectivo
 */

import { MetodoPago } from './MetodoPago.ts';

export class PagoEfectivo extends MetodoPago {

  /** 
   * @desc Ejecuta el pago en efectivo
   * @return void
   */
  public procesarPago(): void {
    console.log('Pago en efectivo realizado');
  }
}
