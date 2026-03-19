import {
  Chair,
  ModernChair,
  ModernSofa,
  ModernTable,
  Sofa,
  Table,
  VictorianChair,
  VictorianSofa,
  VictorianTable,
} from './furniture_products';

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
 * @desc  User interacting with furniture products without using the Abstract Factory Pattern.
 */


/**
 * @description class that simulates a client that creates and manages furniture items without using the Abstract Factory Pattern.
 */
export class FurnitureClientWithoutFactory {
  private myChairs: Chair[] = [];
  private mySofas: Sofa[] = [];
  private myTables: Table[] = [];

  /**
   * @description Adds a chair to the client's inventory based on the specified style.
   * @param {string} style - The style of the chair to add (e.g., 'Victorian', 'Modern').
   */
  addChair(style: string): void {
    if (style === 'Victorian') {
      const chair = new VictorianChair();
      this.myChairs.push(chair);
      console.log('New Victorian chair added.');
    } else if (style === 'Modern') {
      const chair = new ModernChair();
      this.myChairs.push(chair);
      console.log('New Modern chair added.');
    } else {
      throw new Error('Style not available for chair.');
    }
  }

  /**
   * @description Adds a sofa to the client's inventory based on the specified style.
   * @param {string} style - The style of the sofa to add (e.g., 'Victorian', 'Modern').
   */
  addSofa(style: string): void {
    if (style === 'Victorian') {
      const sofa = new VictorianSofa();
      this.mySofas.push(sofa);
      console.log('New Victorian sofa added.');
    } else if (style === 'Modern') {
      const sofa = new ModernSofa();
      this.mySofas.push(sofa);
      console.log('New Modern sofa added.');
    } else {
      throw new Error('Style not available for sofa.');
    }
  }

  /**
   * @description Adds a table to the client's inventory based on the specified style.
   * @param {string} style - The style of the table to add (e.g., 'Victorian', 'Modern').
   */
  addTable(style: string): void {
    if (style === 'Victorian') {
      const table = new VictorianTable();
      this.myTables.push(table);
      console.log('New Victorian table added.');
    } else if (style === 'Modern') {
      const table = new ModernTable();
      this.myTables.push(table);
      console.log('New Modern table added.');
    } else {
      throw new Error('Style not available for table.');
    }
  }

  /**
   * @description Demonstrates the use of all stored furniture items in the client's inventory.
   * @returns {void}
   */
  testAllFurniture(): void {
    const totalFurniture = this.myChairs.length + this.mySofas.length + this.myTables.length;
    console.log(`--- Testing your inventory (${totalFurniture} items) ---`);
    for (const chair of this.myChairs) {
      const style = chair instanceof VictorianChair ? 'Victorian' : 'Modern';
      console.log(`${style} Chair:`);
      chair.sitOn();
    }
    for (const sofa of this.mySofas) {
      const style = sofa instanceof VictorianSofa ? 'Victorian' : 'Modern';
      console.log(`${style} Sofa:`);
      sofa.lieOn();
    }
    for (const table of this.myTables) {
      const style = table instanceof VictorianTable ? 'Victorian' : 'Modern';
      console.log(`${style} Table:`);
      table.putSomeDrink();
    }
  }
}
