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

'use strict';

/**
 * @class DivideAndConquer
 * @description Abstract class that defines the template method for a divide and conquer algorithm.
 */
abstract class DivideAndConquer {
  /**
   * @method solve
   * @description template method that defines the skeleton of the divide and conquer algorithm. 
   * @param {number[] | string[]} data - Data array to process.
   * @returns {number} The result of processing the data.
   */
  public solve(data: number[] | string[]): number {
    if (this.isBaseCase(data)) {
      return this.solveBaseCase(data);
    }
    const parts: number[][] | string[][] = this.divide(data);
    const solution1 = this.solve(parts[0]);
    const solution2 = this.solve(parts[1]);
    return this.combine(solution1, solution2);
  }

  /**
   * @description Checks if the current data set is a base case that can be solved directly.
   * @param {number[] | string[]} data - The data to check.
   * @returns {boolean} True if it's a base case, false otherwise.
   */
  protected abstract isBaseCase(data: number[] | string[]): boolean;

  /**
   * @description Solves the base case directly without further division.
   * @param {number[] | string[]} data - The data to solve.
   * @returns {number} The solution for the base case.
   */
  protected abstract solveBaseCase(data: number[] | string[]): number;

  /** 
   * @description Defines how the data is divided into parts for recursive processing.
   * @param {number[] | string[]} data - The data to divide.
   * @returns {number[][] | string [][]} An array containing the divided parts of the data.
   */
  protected abstract divide(data: number[] | string[]): number[][] | string[][];
  
  /**
   * @description Combines the results from the divided parts to form a complete solution.
   * @param {number} res1 - The result from the first part.
   * @param {number} res2 - The result from the second part.
   * @returns {number} The combined result.
   */
  protected abstract combine(res1: number, res2: number): number;
}

/**
 * @class MarathonCounter
 * @extends {DivideAndConquer}
 * @description Counts the number of runners in a marathon using the divide and conquer approach.
 */
export class MarathonCounter extends DivideAndConquer {
  /**
   * @description Checks if the data array is a base case (0 or 1 runner).
   * @param data 
   * @returns True if it's a base case, false otherwise.
   */
  protected isBaseCase(data: string[]): boolean {
    return data.length <= 1;
  }

  /** 
   * @description Solves the base case by returning 1 if there's a runner, or 0 if it's empty.
   * @param data 
   * @returns 1 if there's a runner, 0 otherwise.
   */
  protected solveBaseCase(data: string[]): number {
    return data.length === 1 ? 1 : 0;
  }

  /**
   *  @description Divides the data array into two halves for recursive counting.
   * @param data 
   * @returns An array containing the two halves of the original data array.
   */
  protected divide(data: string[]): string[][] {
    const mid = Math.floor(data.length / 2);
    return [data.slice(0, mid), data.slice(mid)];
  }

  /**
   * @description Combines the counts from the two halves by summing them.
   * @param res1 - The count from the first half.
   * @param res2 - The count from the second half.
   * @returns The total count of runners.
   */
  protected combine(res1: number, res2: number): number {
    return res1 + res2;
  }
}

/**
 * @class WarehouseInspector
 * @extends {DivideAndConquer}
 * @description Inspects the temperature of products in a warehouse.
 * If it detects a temperature > 30 degrees, it triggers an alert.
 */
export class WarehouseInspector extends DivideAndConquer {
  /**
   * @description Checks if the data array is a base case (0 or 1 temperature).
   * @param data 
   * @returns True if it's a base case, false otherwise.
   */
  protected isBaseCase(data: number[]): boolean {
    return data.length <= 1;
  }

  /**
   *  @description Solves the base case by checking if the single temperature exceeds the threshold.
   * @param data 
   * @returns 1 if the temperature is above 30, 0 otherwise.
   */
  protected solveBaseCase(data: number[]): number {
    if (data.length === 0) return 0;
    return data[0] > 30 ? 1 : 0;
  }

  /**
    * @description Divides the data array into two halves for recursive inspection.
    * @param data 
    * @returns An array containing the two halves of the original data array.
    */
  protected divide(data: number[]): number[][] {
    const mid = Math.floor(data.length / 2);
    return [data.slice(0, mid), data.slice(mid)];
  }

  /**
   * @description Combines the results from the two halves. If either half has an alert (1), the combined result is an alert (1).
   * @param res1 - The result from the first half.
   * @param res2 - The result from the second half.
   * @returns 1 if either half has an alert, 0 otherwise.
   */
  protected combine(res1: number, res2: number): number {
    return (res1 === 1 || res2 === 1) ? 1 : 0;
  }
}