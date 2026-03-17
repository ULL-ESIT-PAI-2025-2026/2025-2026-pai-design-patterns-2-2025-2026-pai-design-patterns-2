/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 * 
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @since Mar 17 2026
 * @desc Definition of the products without using the Abstract Factory Pattern for a Furniture Factory example.
 */

/**
 * @description Chair product interface.
 */
export interface Chair {
  hasLegs(): boolean;
  sitOn(): void;
}

/**
 * @description Sofa product interface.
 */
export interface Sofa {
  isComfortable(): boolean;
  lieOn(): void;
}

/**
 * @description Table product interface.
 */
export interface Table {
  getSize(): number;
  putSomeDrink(): void;
}

/**
 * @description Victorian chair implementation.
 */
export class VictorianChair implements Chair {
  /**
   * @description Checks if the Victorian chair has legs.
   * @returns  {boolean} True, as Victorian chairs typically have legs.
   */
  hasLegs(): boolean { return true; }

  /**
   * @description Makes the user sit on the Victorian chair.
   */
  sitOn(): void { console.log('Sitting in a Victorian chair'); }
}

/**
 * @description Modern chair implementation.
 */
export class ModernChair implements Chair {
  /**
   * @description Checks if the Modern chair has legs.
   * @returns  {boolean} False, as Modern chairs typically don't have legs.
   */
  hasLegs(): boolean { return false; }

  /**
   * @description Makes the user sit on the Modern chair.
   */
  sitOn(): void { console.log('Sitting in a Modern chair'); }
}

/**
 * @description Victorian sofa implementation.
 */
export class VictorianSofa implements Sofa {
  /**
   * @description Checks if the Victorian sofa is comfortable.
   * @returns  {boolean} True, as Victorian sofas are typically comfortable.
   */
  isComfortable(): boolean { return true; }

  /**
   * @description Makes the user lie on the Victorian sofa.
   */
  lieOn(): void { console.log('Lying on a Victorian sofa.'); }
}

/**
 * @description Modern sofa implementation.
 */
export class ModernSofa implements Sofa {
  /**
   * @description Checks if the Modern sofa is comfortable.
   * @returns  {boolean} True, as Modern sofas are typically comfortable.
   */
  isComfortable(): boolean { return true; }

  /**
   * @description Makes the user lie on the Modern sofa.
   */
  lieOn(): void { console.log('Lying on a Modern sofa.'); }
}

/**
 * @description Victorian table implementation.
 */
export class VictorianTable implements Table {
  /**
   * @description Gets the size of the Victorian table.
   * @returns  {number} The size of the Victorian table.
   */
  getSize(): number { return 150; }

  /**
   * @description Places a drink on the Victorian table.
   */
  putSomeDrink(): void { console.log('Placing a drink on a Victorian table.'); }
}

/**
 * @description Modern table implementation.
 */
export class ModernTable implements Table {
  /**
   * @description Gets the size of the Modern table.
   * @returns  {number} The size of the Modern table.
   */
  getSize(): number { return 100; }

  /**
   * @description Places a drink on the Modern table.
   */
  putSomeDrink(): void { console.log('Placing a drink on a Modern table.'); }
}
