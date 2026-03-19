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
 * @desc Template pattern applied to a Divide and Conquer template. 
 */

/**
 * @desc Abstract class that defines the template method for a divide and conquer algorithm.
 */
abstract class DivideAndConquer {
  /**
   * @desc template method that defines the skeleton of the divide and conquer algorithm. 
   * @param data - Data array to process.
   * @return The result of processing the data.
   */
  solve(data: number[] | string[]): number {
    if (this.isBaseCase(data)) {
      return this.solveBaseCase(data);
    }
    const parts: number[][] | string[][] = this.divide(data);
    const solution1 = this.solve(parts[0]);
    const solution2 = this.solve(parts[1]);
    return this.combine(solution1, solution2);
  }

  /**
   * @desc Checks if the current data set is a base case that can be solved directly.
   * @param data The data to check.
   * @return True if it's a base case, false otherwise.
   */
  protected abstract isBaseCase(data: number[] | string[]): boolean;

  /**
   * @desc Solves the base case directly without further division.
   * @param data The data to solve.
   * @return The solution for the base case.
   */
  protected abstract solveBaseCase(data: number[] | string[]): number;

  /** 
   * @desc Defines how the data is divided into parts for recursive processing.
   * @param data The data to divide.
   * @return An array containing the divided parts of the data.
   */
  protected abstract divide(data: number[] | string[]): number[][] | string[][];
  
  /**
   * @desc Combines the results from the divided parts to form a complete solution.
   * @param res1 The result from the first part.
   * @param res2 The result from the second part.
   * @return The combined result.
   */
  protected abstract combine(res1: number, res2: number): number;
}

/**
 * @desc Counts the number of runners in a marathon using the divide and conquer approach.
 */
export class MarathonCounter extends DivideAndConquer {
  /**
   * @desc Checks if the data array is a base case (0 or 1 runner).
   * @param data 
   * @return True if it's a base case, false otherwise.
   */
  protected isBaseCase(data: string[]): boolean {
    return data.length <= 1;
  }

  /** 
   * @desc Solves the base case by returning 1 if there's a runner, or 0 if it's empty.
   * @param data 
   * @returns 1 if there's a runner, 0 otherwise.
   */
  protected solveBaseCase(data: string[]): number {
    return data.length === 1 ? 1 : 0;
  }

  /**
   * @desc Divides the data array into two halves for recursive counting.
   * @param data 
   * @returns An array containing the two halves of the original data array.
   */
  protected divide(data: string[]): string[][] {
    const mid = Math.floor(data.length / 2);
    return [data.slice(0, mid), data.slice(mid)];
  }

  /**
   * @desc Combines the counts from the two halves by summing them.
   * @param res1 - The count from the first half.
   * @param res2 - The count from the second half.
   * @returns The total count of runners.
   */
  protected combine(res1: number, res2: number): number {
    return res1 + res2;
  }
}

/**
 * @desc Inspects the temperature of products in a warehouse.
 * If it detects a temperature > 30 degrees, it triggers an alert.
 */
export class WarehouseInspector extends DivideAndConquer {
  /**
   * Checks if the data array is a base case (0 or 1 temperature).
   * @param data 
   * @returns True if it's a base case, false otherwise.
   */
  protected isBaseCase(data: number[]): boolean {
    return data.length <= 1;
  }

  /**
   * @desc Solves the base case by checking if the single temperature exceeds the threshold.
   * @param data 
   * @returns 1 if the temperature is above 30, 0 otherwise.
   */
  protected solveBaseCase(data: number[]): number {
    if (data.length === 0) return 0;
    return data[0] > 30 ? 1 : 0;
  }

  /**
    * @desc Divides the data array into two halves for recursive inspection.
    * @param data 
    * @returns An array containing the two halves of the original data array.
    */
  protected divide(data: number[]): number[][] {
    const mid = Math.floor(data.length / 2);
    return [data.slice(0, mid), data.slice(mid)];
  }

  /**
   * @desc Combines the results from the two halves. If either half has an alert (1), the combined result is an alert (1).
   * @param res1 - The result from the first half.
   * @param res2 - The result from the second half.
   * @returns 1 if either half has an alert, 0 otherwise.
   */
  protected combine(res1: number, res2: number): number {
    return (res1 === 1 || res2 === 1) ? 1 : 0;
  }
}