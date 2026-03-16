/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @desc Implementación de pago con PayPal
 */

import { MetodoPago } from './MetodoPago.ts';

export class PagoPaypal extends MetodoPago {
  private readonly email: string;

  /** 
   * @desc Inicializa el pago con PayPal
   * @param email Correo de la cuenta PayPal
   */
  constructor(email: string) {
    super();
    this.email = email;
  }

  /** 
   * @desc Ejecuta el pago con PayPal
   * @return void
   */
  public procesarPago(): void {
    console.log(`Pago con PayPal realizado, correo: ${this.email}`);
  }
}
