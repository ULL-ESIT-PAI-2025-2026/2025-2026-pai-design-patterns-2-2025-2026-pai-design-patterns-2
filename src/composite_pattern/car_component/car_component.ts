/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Sergio Rosales Calzadilla
 * @since Mar 15 2026
 * @desc Implementation of the Composite Pattern using a Car Pricing system.
 */

'use strict';

/**
 * @description The Component interface. 
 * This is the common interface that BOTH simple parts and complex assemblies will implement.
 * The client will use this interface to interact with all objects in the composition.
 */
export interface CarComponent {
  /**
   * @description Calculates and returns the price of the component.
   * @return The price in dollars.
   */
  getPrice(): number;

  /**
   * @description Retrieves the name of the component.
   * @return The string representing the component's name.
   */
  getName(): string;

  /**
   * @description Prints the component details. Useful to visualize the tree structure.
   * @param indentation The string used to indent the output for tree visualization.
   */
  showDetails(indentation: string): void;
}

/**
 * @description Leaf class representing a simple, indivisible car part.
 * It does not have any children. Its price is fixed.
 */
export class SimplePart implements CarComponent {

  /**
   * @description Initializes a simple part with a fixed price.
   * @param name The name of the part (e.g., "Tire", "Spark Plug").
   * @param price The fixed market value of this specific part.
   */
  constructor(private name: string, private price: number) {
    this.name = name;
    this.price = price;
  }

  /**
   * @description It returns the price of the component.
   * @return The exact price of the actual part.
   */
  getPrice(): number {
    return this.price;
  }

  /**
   * @description It returns the name of the component.
   * @return A string containing its name.
   */
  getName(): string {
    return this.name;
  }

  /**
   * @description It returns the details of the part.
   * @return It prints the details, acts like a print-method.
   */
  showDetails(indentation: string = ""): void {
    console.log(`${indentation}- ${this.name}: $${this.price}`);
  }
}

/**
 * @description Composite class representing a complex assembly of car parts.
 * It can contain SimpleParts or other ComplexAssemblies.
 */
export class ComplexAssembly implements CarComponent {
  private children: CarComponent[];

  /**
   * @description Initializes an empty complex assembly.
   * @param name The name of the assembly (e.g., "V8 Engine", "Complete Car").
   */
  constructor(private name: string) {
    this.name = name;
    this.children = [];
  }

  /**
   * @description Adds a new component (Leaf or another Composite) to this assembly.
   * @param component The car component to add.
   */
  add(component: CarComponent): void {
    this.children.push(component);
  }

  /**
   * @description Removes a component from this assembly.
   * @param component The car component to remove.
   */
  remove(component: CarComponent): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  /**
   * @description Calculates the total price by delegating the call to all its children.
   * @return The sum of the prices of all child components.
   */
  getPrice(): number {
    return this.children.reduce((total, child) => total + child.getPrice(), 0);
  }

  /**
   * @description It returns the name of the component.
   * @return A string containing its name.
   */
  getName(): string {
    return this.name;
  }

  /**
   * @description It returns the details of the component.
   * @return It prints the details, acts like a print-method.
   */
  showDetails(indentation: string = ""): void {
    console.log(`${indentation}+ ${this.name} (Total: $${this.getPrice()})`);
    for (const child of this.children) {
      child.showDetails(indentation + "  ");
    }
  }
}