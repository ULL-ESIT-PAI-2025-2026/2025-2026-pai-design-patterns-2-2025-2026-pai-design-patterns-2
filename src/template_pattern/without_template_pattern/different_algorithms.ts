/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @since Mar 15 2026
 * @desc Example of different algorithms that solve the same problem without using a common template.
 */

/** @desc Counts runners in a marathon. */
export class MarathonCounter {
  /**
   * @desc Algorithm for counting runners in a marathon using a divide and conquer approach.
   * @param data
   * @returns Total number of runners.
   */
  solve(data: string[]): number {
    if (data.length <= 1) {
      return data.length === 1 ? 1 : 0;
    }
    const mid = Math.floor(data.length / 2);
    const leftHalf = data.slice(0, mid);
    const rightHalf = data.slice(mid);
    const leftCount = this.solve(leftHalf);
    const rightCount = this.solve(rightHalf);
    return leftCount + rightCount;
  }
}

/**
 * @description Algorithm for inspecting temperatures in a warehouse.
 * If it detects a temperature > 30 degrees, it triggers an alert (1).
 */
export class WarehouseInspector {
  /**
   * @desc Algorithm for inspecting temperatures in a warehouse.
   * If it detects a temperature > 30 degrees, it triggers an alert (1).
   * @param data
   * @returns 1 if there is any temperature > 30, 0 otherwise.
   */
  solve(data: number[]): number {
    if (data.length === 0) {
      return 0;
    }
    if (data.length === 1) {
      return data[0] > 30 ? 1 : 0;
    }
    const mid = Math.floor(data.length / 2);
    const leftHalf = data.slice(0, mid);
    const rightHalf = data.slice(mid);
    const leftAlert = this.solve(leftHalf);
    const rightAlert = this.solve(rightHalf);
    return (leftAlert === 1 || rightAlert === 1) ? 1 : 0;
  }
}