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

/** @desc Chair product interface. */
export interface Chair {
  hasLegs(): boolean;
  sitOn(): void;
}

/** @desc Sofa product interface. */
export interface Sofa {
  isComfortable(): boolean;
  lieOn(): void;
}

/** @desc Table product interface. */
export interface Table {
  getSize(): number;
  putSomeDrink(): void;
}

/** @desc Victorian chair implementation. */
export class VictorianChair implements Chair {
  /**
   * @desc Checks if the Victorian chair has legs.
   * @return True, as Victorian chairs typically have legs.
   */
  hasLegs(): boolean { return true; }

  /** @desc Makes the user sit on the Victorian chair. */
  sitOn(): void { console.log('Sitting in a Victorian chair'); }
}

/** @desc Modern chair implementation. */
export class ModernChair implements Chair {
  /**
   * @desc Checks if the Modern chair has legs.
   * @return False, as Modern chairs typically don't have legs.
   */
  hasLegs(): boolean { return false; }

  /** @desc Makes the user sit on the Modern chair. */
  sitOn(): void { console.log('Sitting in a Modern chair'); }
}

/** Victorian sofa implementation. */
export class VictorianSofa implements Sofa {
  /**
   * @desc Checks if the Victorian sofa is comfortable.
   * @return True, as Victorian sofas are typically comfortable.
   */
  isComfortable(): boolean { return true; }

  /** @desc Makes the user lie on the Victorian sofa. */
  lieOn(): void { console.log('Lying on a Victorian sofa.'); }
}

/** @desc Modern sofa implementation. */
export class ModernSofa implements Sofa {
  /**
   * @desc Checks if the Modern sofa is comfortable.
   * @return True, as Modern sofas are typically comfortable.
   */
  isComfortable(): boolean { return true; }

  /** @desc Makes the user lie on the Modern sofa. */
  lieOn(): void { console.log('Lying on a Modern sofa.'); }
}

/** @desc Victorian table implementation. */
export class VictorianTable implements Table {
  /**
   * @desc Gets the size of the Victorian table.
   * @return The size of the Victorian table.
   */
  getSize(): number { return 150; }

  /** @desc Places a drink on the Victorian table. */
  putSomeDrink(): void { console.log('Placing a drink on a Victorian table.'); }
}

/** @desc Modern table implementation. */
export class ModernTable implements Table {
  /**
   * @desc Gets the size of the Modern table.
   * @return The size of the Modern table.
   */
  getSize(): number { return 100; }

  /** @desc Places a drink on the Modern table. */
  putSomeDrink(): void { console.log('Placing a drink on a Modern table.'); }
}
