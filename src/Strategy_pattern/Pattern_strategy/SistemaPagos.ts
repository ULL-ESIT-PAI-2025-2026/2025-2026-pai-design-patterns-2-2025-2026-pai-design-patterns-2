/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @desc Sistema que procesa pagos usando una estrategia
 */

import { MetodoPago } from './MetodoPago.ts';

export class SistemaPagos {
  private metodoPago: MetodoPago;

  /** 
   * @desc Inicializa el sistema con una estrategia de pago
   * @param metodoPago Estrategia de pago a usar
   */
  constructor(metodoPago: MetodoPago) {
    this.metodoPago = metodoPago;
  }

  /** 
   * @desc Ejecuta el pago usando la estrategia seleccionada
   * @return void
   */
  public procesarPago(): void {
    this.metodoPago.procesarPago();
  }
}
