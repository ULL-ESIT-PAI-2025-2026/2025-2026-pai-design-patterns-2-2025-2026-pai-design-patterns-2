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
 * @desc Definition of the products for the Abstract Factory Pattern applied to a Furniture Factory.
 */

'use strict';

/** 
 * @description Represents the abstract product for all types of chairs.
 */
export interface Chair {
  /** 
   * Checks if the chair design includes legs.
   * @return True if it has legs, false otherwise.
   */
  hasLegs(): boolean;

  /**
   * Performs the action of sitting on the chair.
   */
  sitOn(): void;
}
/**
 * Represents the abstract product for all types of sofas.
 */
export interface Sofa {
  /** 
   * Determines if the sofa meets comfort standards.
   * @return True if comfortable.
   */
  isComfortable(): boolean;

  /** 
   * Performs the action of lying down on the sofa.
   */
  lieOn(): void;
}
/**
 * Represents the abstract product for all types of coffee tables.
 */
export interface Table {
  /**
   * Gets the physical dimensions of the table.
   * @return The size in centimeters.
   */
  getSize(): number;

  /** 
   * Performs the action of placing a drink on the table.
   */
  putSomeDrink(): void;
}

/**
 * Concrete Victorian-style chair.
 */
export class VictorianChair implements Chair {
  /** 
   * Victorian chairs always feature ornate wooden legs.
   * @return Always true.
   */
  hasLegs(): boolean { return true; }

  /** 
   * Sitting action for a Victorian chair.
   */
  sitOn(): void { console.log('Sitting in a Victorian chair'); }
}

/**
 * Concrete Modern-style chair.
 */
export class ModernChair implements Chair {
  /** 
   * Modern chairs might have a cantilever or pedestal base.
   * @return Returns false for this minimalist design.
   */
  hasLegs(): boolean { return false; }

  /** 
   * Sitting action for a Modern chair.
   */
  sitOn(): void { console.log('Sitting in a Modern chair'); }
}

/**
 * Concrete Victorian-style sofa.
 */
export class VictorianSofa implements Sofa {
  /** 
   * Checks if the Victorian sofa is comfortable.
   * @return True if comfortable.
   */
  isComfortable(): boolean { return true; }

  /** 
   * Performs the action of lying down on the Victorian sofa.
   */
  lieOn(): void { console.log('Lying on a Victorian sofa.'); }
}

/**
 * Concrete Modern-style sofa.
 */
export class ModernSofa implements Sofa {
  /** 
   * Checks if the Modern sofa is comfortable.
   * @return True if comfortable.
   */
  isComfortable(): boolean { return true; }

  /** 
   * Performs the action of lying down on the Modern sofa.
   */
  lieOn(): void { console.log('Lying on a Modern sofa.'); }
}

/**
 * Concrete Modern-style coffee table.
 */
export class ModernTable implements Table {
  /** 
   * Gets the physical dimensions of the Modern table.
   * @return The size in centimeters.
   */
  getSize(): number { return 100; }

  /** 
   * Performs the action of placing a drink on the Modern table.
   */
  putSomeDrink(): void { console.log('Placing a drink on a Modern table.'); }
}

/**
 * Concrete Victorian-style coffee table.
 */
export class VictorianTable implements Table {
  /** 
   * Gets the physical dimensions of the Victorian table.
   * @return The size in centimeters.
   */
  getSize(): number { return 150; }

  /** 
   * Performs the action of placing a drink on the Victorian table.
   */
  putSomeDrink(): void { console.log('Placing a drink on a Victorian table.'); }
}