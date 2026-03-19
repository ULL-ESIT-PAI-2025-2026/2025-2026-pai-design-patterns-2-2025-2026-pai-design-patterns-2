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
 * @desc Implementation of the Composite Pattern using a Car Pricing system.
 */

/**
 * @desc This is the common interface that BOTH simple parts and complex assemblies will implement.
 *     The client will use this interface to interact with all objects in the composition.
 */
export interface CarComponent {
  /**
   * @desc Calculates and returns the price of the component.
   * @return The price in dollars.
   */
  howMuchItCost(): number;

  /**
   * @desc Retrieves the name of the component.
   * @return The string representing the component's name.
   */
  getName(): string;

  /**
   * @desc Prints the component details. Useful to visualize the tree structure.
   * @param indentation The string used to indent the output for tree visualization.
   */
  showDetails(indentation: string): void;
}

/**
 * @desc Leaf class representing a simple, indivisible car part.
 *     It does not have any children. Its price is fixed.
 */
export class SimplePart implements CarComponent {

  /**
   * @desc Initializes a simple part with a fixed price.
   * @param name The name of the part (e.g., "Tire", "Spark Plug").
   * @param price The fixed market value of this specific part.
   */
  constructor(private name: string, private price: number) {
    this.name = name;
    this.price = price;
  }

  /**
   * @desc It returns the price of the component.
   * @return The exact price of the actual part.
   */
  howMuchItCost(): number {
    return this.price;
  }

  /**
   * @desc It returns the name of the component.
   * @return A string containing its name.
   */
  getName(): string {
    return this.name;
  }

  /**
   * @desc It returns the details of the part.
   * @return It prints the details, acts like a print-method.
   */
  showDetails(indentation: string = ""): void {
    console.log(`${indentation}- ${this.name}: $${this.price}`);
  }
}

/**
 * @desc Composite class representing a complex assembly of car parts.
 *     It can contain SimpleParts or other ComplexAssemblies.
 */
export class ComplexAssembly implements CarComponent {
  private children: CarComponent[];

  /**
   * @desc Initializes an empty complex assembly.
   * @param name The name of the assembly (e.g., "V8 Engine", "Complete Car").
   */
  constructor(private name: string) {
    this.name = name;
    this.children = [];
  }

  /**
   * @return The childrens of the node
   */
  getChildren() : CarComponent[] {
    return this.children;
  }

  /**
   * @desc Adds a new component (Leaf or another Composite) to this assembly.
   * @param component The car component to add.
   */
  add(component: CarComponent): void {
    this.children.push(component);
  }

  /**
   * @desc Removes a component from this assembly.
   * @param component The car component to remove.
   */
  remove(component: CarComponent): void {
    const index: number = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  /**
   * @desc Calculates the total price by delegating the call to all its children.
   * @return The sum of the prices of all child components.
   */
  howMuchItCost(): number {
    let total: number = 0;
    let stack: CarComponent[] = [...this.children];
    let current: CarComponent | undefined;
    while (current = stack.pop()) {
      if (current instanceof ComplexAssembly) {
        stack.push(...current.getChildren());
      } else {
        total += current.howMuchItCost();
      }
    }
    return total
  }

  /**
   * @desc It returns the name of the component.
   * @return A string containing its name.
   */
  getName(): string {
    return this.name;
  }

  /**
   * @desc It returns the details of the component.
   * @return It prints the details, acts like a print-method.
   */
  showDetails(indentation: string = ""): void {
    console.log(`${indentation}+ ${this.name} (Total: $${this.howMuchItCost()})`);
    for (const child of this.children) {
      child.showDetails(indentation + "  ");
    }
  }
}