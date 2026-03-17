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
 * @description A simple type to represent furniture items in the "without pattern" version.
 */
type FurnitureItem = {
  kind: string;
  style: string;
  test: () => void;
};

/**
 * @description class that simulates a client that creates and manages furniture items without using the Abstract Factory Pattern.
 */
export class FurnitureClientWithoutFactory {
  private myFurniture: FurnitureItem[] = [];

  /**
   * @description Adds a chair to the client's inventory based on the specified style.
   * @param {string} style - The style of the chair to add (e.g., 'Victorian', 'Modern').
   */
  addChair(style: string): void {
    if (style === 'Victorian') {
      const chair: FurnitureItem = {
        kind: 'Chair',
        style: 'Victorian',
        test: () => console.log('Sitting in a Victorian chair'),
      };
      this.myFurniture.push(chair);
      console.log('New Victorian chair added.');
    } else if (style === 'Modern') {
      const chair: FurnitureItem = {
        kind: 'Chair',
        style: 'Modern',
        test: () => console.log('Sitting in a Modern chair'),
      };
      this.myFurniture.push(chair);
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
      const sofa: FurnitureItem = {
        kind: 'Sofa',
        style: 'Victorian',
        test: () => console.log('Lying on a Victorian sofa.'),
      };
      this.myFurniture.push(sofa);
      console.log('New Victorian sofa added.');
    } else if (style === 'Modern') {
      const sofa: FurnitureItem = {
        kind: 'Sofa',
        style: 'Modern',
        test: () => console.log('Lying on a Modern sofa.'),
      };
      this.myFurniture.push(sofa);
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
      const table: FurnitureItem = {
        kind: 'Table',
        style: 'Victorian',
        test: () => console.log('Placing a drink on a Victorian table.'),
      };
      this.myFurniture.push(table);
      console.log('New Victorian table added.');
    } else if (style === 'Modern') {
      const table: FurnitureItem = {
        kind: 'Table',
        style: 'Modern',
        test: () => console.log('Placing a drink on a Modern table.'),
      };
      this.myFurniture.push(table);
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
    console.log(`--- Testing your inventory (${this.myFurniture.length} items) ---`);
    this.myFurniture.forEach((item) => {
      console.log(`${item.style} ${item.kind}:`);
      item.test();
    });
  }
}
