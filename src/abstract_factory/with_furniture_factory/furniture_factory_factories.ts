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



import { Chair, Sofa, Table } from './furniture_factory_products';
import { VictorianChair, ModernChair, VictorianSofa, ModernSofa, VictorianTable, ModernTable } from './furniture_factory_products';

/** 
 * @desc The Abstract Factory interface declares methods for creating abstract products. 
 */
export interface FurnitureFactory {
  /** 
   * @return A concrete chair instance.
   */
  createChair(): Chair;
  /**   
   * @return A concrete sofa instance.
   */
  createSofa(): Sofa;
  /** 
   * @return A concrete coffee table instance.
   */
  createTable(): Table;
}

/**
 * @desc Concrete factory that produces Victorian style furniture. 
 */
export class VictorianFurnitureFactory implements FurnitureFactory {

  /** 
   * @return A Victorian chair instance.
   */
  createChair(): Chair { return new VictorianChair(); }
  /** 
   * @return A Victorian sofa instance.
   */
  createSofa(): Sofa { return new VictorianSofa(); }
  /** 
   * @return A Victorian table instance.
   */
  createTable(): Table { return new VictorianTable(); }
}

/**
 * @desc Concrete factory that produces Modern style furniture.
 */
export class ModernFurnitureFactory implements FurnitureFactory {
  /** 
   * @return A Modern chair instance.
   */
  createChair(): Chair { return new ModernChair(); }
  /** 
   * @return A Modern sofa instance.
   */
  createSofa(): Sofa { return new ModernSofa(); }
  /** 
   * @return A Modern table instance.
   */
  createTable(): Table { return new ModernTable(); }
}
