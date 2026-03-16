/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Implementación de pago con tarjeta
 */

import { MetodoPago } from './MetodoPago.ts';

export class PagoTarjeta extends MetodoPago {
  private readonly pin: string;

  /** 
   * @desc Inicializa el pago con tarjeta
   * @param pin PIN de la tarjeta
   */
  constructor(pin: string) {
    super();
    this.pin = pin;
  }

  /** 
   * @desc Ejecuta el pago con tarjeta
   * @return void
   */
  public procesarPago(): void {
    console.log(`Pago con tarjeta realizado, PIN: ${this.pin}`);
  }
}
