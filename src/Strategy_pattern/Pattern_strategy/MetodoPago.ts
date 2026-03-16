/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Clase abstracta que representa un método de pago
 */

export abstract class MetodoPago {
  /** 
   * @desc Ejecuta el pago según el método implementado
   * @return void
   */
  public abstract procesarPago(): void;
}
