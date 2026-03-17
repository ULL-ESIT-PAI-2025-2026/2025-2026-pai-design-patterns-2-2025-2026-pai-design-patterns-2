import { Chair, Sofa, Table } from './furniture_factory_products';
import { VictorianChair, ModernChair, VictorianSofa, ModernSofa, VictorianTable, ModernTable } from './furniture_factory_products';
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
 * @desc Implementation of the factories for the Abstract Factory Pattern applied to a Furniture Factory.
 */


// 3ª Define the abstract factory and its concrete implementations.

/** 
 * @description The Abstract Factory interface declares methods for creating abstract products. 
 */
export interface FurnitureFactory {
  /** 
   * @description Creates a chair product.
   * @returns {Chair} A concrete chair instance.
   */
  createChair(): Chair;
  /**   
   * @description Creates a sofa product.
   * @returns {Sofa} A concrete sofa instance.
   */
  createSofa(): Sofa;
  /** 
   * @description Creates a coffee table product.
   * @returns {CoffeeTable} A concrete coffee table instance.
   */
  createTable(): Table;
}


/**
 * @class VictorianFurnitureFactory
 * @implements {FurnitureFactory}
 * @description Concrete factory that produces Victorian style furniture. [cite: 315]
 */
export class VictorianFurnitureFactory implements FurnitureFactory {

  /** 
   * @description Creates a Victorian chair.
   * @returns {Chair} A Victorian chair instance.
   */
  createChair(): Chair { return new VictorianChair(); }
  /** 
   * @description Creates a Victorian sofa.
   * @returns {Sofa} A Victorian sofa instance.
   */
  createSofa(): Sofa { return new VictorianSofa(); }
  /** 
   * @description Creates a Victorian table.
   * @returns {Table} A Victorian table instance.
   */
  createTable(): Table { return new VictorianTable(); }
}

// 4ª Define the concrete factories for each family (Victorian and Modern).

/**
 * @class ModernFurnitureFactory
 * @implements {FurnitureFactory}
 * @description Concrete factory that produces Modern style furniture. [cite: 315]
 */
export class ModernFurnitureFactory implements FurnitureFactory {
  /** 
   * @description Creates a Modern chair.
   * @returns {Chair} A Modern chair instance.
   */
  createChair(): Chair { return new ModernChair(); }
  /** 
   * @description Creates a Modern sofa.
   * @returns {Sofa} A Modern sofa instance.
   */
  createSofa(): Sofa { return new ModernSofa(); }
  /** 
   * @description Creates a Modern table.
   * @returns {Table} A Modern table instance.
   */
  createTable(): Table { return new ModernTable(); }
}
