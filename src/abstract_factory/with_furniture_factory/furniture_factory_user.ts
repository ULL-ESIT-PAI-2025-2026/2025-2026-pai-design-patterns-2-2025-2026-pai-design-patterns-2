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
 * @desc The client code that uses the Abstract Factory Pattern to create and
 *       manage furniture products without depending on their concrete classes.
 */



import { Chair, Sofa, Table } from './furniture_factory_products';
import { FurnitureFactory, ModernFurnitureFactory, VictorianFurnitureFactory } from './furniture_factory_factories';

/** @desc The client code works with factories and products only through abstract interfaces. */
export class FurnitureClient {
  private furnitureFactory: FurnitureFactory;
  private myChairs: Chair[] = [];
  private mySofas: Sofa[] = [];
  private myTables: Table[] = [];

  /**
   * @desc Configures the style of the entire room/order.
   * @param userChoice - The style chosen ('Victorian' or 'Modern').
   */
  constructor(private userChoice: string) {
    if (userChoice === 'Victorian') {
      this.furnitureFactory = new VictorianFurnitureFactory();
    } else if (userChoice === 'Modern') {
      this.furnitureFactory = new ModernFurnitureFactory();
    } else {
      throw new Error('Style not available.');
    }
  }

  /**
   * @desc Creates a chair and SAVES it in the internal collection.
   * @return The newly created chair.
   */
  addChair(): Chair {
    const newChair = this.furnitureFactory.createChair();
    this.myChairs.push(newChair);
    console.log('New chair added to your collection.');
    return newChair;
  }

  /**
   * @desc Creates a sofa and SAVES it in the internal collection.
   * @return The newly created sofa.
   */
  addSofa(): Sofa {
    const newSofa = this.furnitureFactory.createSofa();
    this.mySofas.push(newSofa);
    console.log('New sofa added to your collection.');
    return newSofa;
  }

  /**
   * @desc Creates a table and SAVES it in the internal collection.
   * @return The newly created table.
   */
  addTable(): Table {
    const newTable = this.furnitureFactory.createTable();
    this.myTables.push(newTable);
    console.log('New table added to your collection.');
    return newTable;
  }

  /** @desc Demonstrates the use of ALL stored furniture. */
  testAllFurniture(): void {
    console.log(`--- Testing your inventory (${this.myChairs.length} chairs, ${this.mySofas.length} sofas, ${this.myTables.length} tables) ---`);
    this.myChairs.forEach(chair => chair.sitOn());
    this.mySofas.forEach(sofa => sofa.lieOn());
    this.myTables.forEach(table => table.putSomeDrink());
  }
}