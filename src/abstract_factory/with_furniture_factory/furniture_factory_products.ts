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


/** 
 * @description Represents the abstract product for all types of chairs.
 */
export interface Chair {
  /** 
   * @description Checks if the chair design includes legs.
   * @returns {boolean} True if it has legs, false otherwise.
   */
  hasLegs(): boolean;

  /**
   * @description Performs the action of sitting on the chair.
   * @returns {void}
   */
  sitOn(): void;
}
/**
 * @description Represents the abstract product for all types of sofas.
 */
export interface Sofa {
  /** 
   * @description Determines if the sofa meets comfort standards.
   * @returns {boolean} True if comfortable.
   */
  isComfortable(): boolean;

  /** 
   * @description Performs the action of lying down on the sofa.
   * @returns {void}
   */
  lieOn(): void;
}
/**
 * @description Represents the abstract product for all types of coffee tables.
 */
export interface Table {
  /**
   * @description Gets the physical dimensions of the table.
   * @returns {number} The size in centimeters.
   */
  getSize(): number;

  /** 
   * @description Performs the action of placing a drink on the table.
   * @returns {void}
   */
  putSomeDrink(): void;
}

// 2ª Define the concrete products for each family (Victorian and Modern).

/**
 * @class VictorianChair
 * @implements {Chair}
 * @description Concrete Victorian-style chair.
 */
export class VictorianChair implements Chair {
  /** 
   * @description Victorian chairs always feature ornate wooden legs.
   * @returns {boolean} Always true.
   */
  hasLegs(): boolean { return true; }

  /** 
   * @description Sitting action for a Victorian chair.
   * @returns {void}
   */
  sitOn(): void { console.log('Sitting in a Victorian chair'); }
}

/**
 * @class ModernChair
 * @implements {Chair}
 * @description Concrete Modern-style chair.
 */
export class ModernChair implements Chair {
  /** 
   * @description Modern chairs might have a cantilever or pedestal base.
   * @returns {boolean} Returns false for this minimalist design.
   */
  hasLegs(): boolean { return false; }

  /** 
   * @description Sitting action for a Modern chair.
   * @returns {void}
   */
  sitOn(): void { console.log('Sitting in a Modern chair'); }
}

/**
 * @class VictorianSofa
 * @implements {Sofa}
 * @description Concrete Victorian-style sofa.
 */
export class VictorianSofa implements Sofa {
  /** 
   * @description Checks if the Victorian sofa is comfortable.
   * @returns {boolean} True if comfortable.
   */
  isComfortable(): boolean { return true; }
  /** 
   * @description Performs the action of lying down on the Victorian sofa.
   * @returns {void}
   */
  lieOn(): void { console.log('Lying on a Victorian sofa.'); }
}

/**
 * @class ModernSofa
 * @implements {Sofa}
 * @description Concrete Modern-style sofa.
 */
export class ModernSofa implements Sofa {
  /** 
   * @description Checks if the Modern sofa is comfortable.
   * @returns {boolean} True if comfortable.
   */

  isComfortable(): boolean { return true; }
  /** 
   * @description Performs the action of lying down on the Modern sofa.
   * @returns {void}
   */
  lieOn(): void { console.log('Lying on a Modern sofa.'); }
}

/**
 * @class ModernTable
 * @implements {Table}
 * @description Concrete Modern-style coffee table.
 */
export class ModernTable implements Table {
  /** 
   * @description Gets the physical dimensions of the Modern table.
   * @returns {number} The size in centimeters.
   */
  getSize(): number { return 100; }
  /** 
   * @description Performs the action of placing a drink on the Modern table.
   * @returns {void}
   */
  putSomeDrink(): void { console.log('Placing a drink on a Modern table.'); }
}

/**
 * @class VictorianTable
 * @implements {Table}
 * @description Concrete Victorian-style coffee table.
 */
export class VictorianTable implements Table {
  /** 
   * @description Gets the physical dimensions of the Victorian table.
   * @returns {number} The size in centimeters.
   */
  getSize(): number { return 150; }
  /** 
   * @description Performs the action of placing a drink on the Victorian table.
   * @returns {void}
   */
  putSomeDrink(): void { console.log('Placing a drink on a Victorian table.'); }
}