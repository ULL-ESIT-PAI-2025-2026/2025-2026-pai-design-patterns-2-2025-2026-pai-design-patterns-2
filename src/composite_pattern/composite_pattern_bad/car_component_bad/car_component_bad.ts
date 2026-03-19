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
 * @desc BAD DESIGN: Implementation WITHOUT Composite Pattern. 
 */

/**
 * @desc Class for basic car components
 */
export class SimplePart {
  /**
   * @desc Initializes a simple part
   */
  constructor(private name: string, private price: number) {
    this.name = name;
    this.price = price;
  }

  /**
   * @return The price value
   */
  howMuchItCost(): number {
    return this.price;
  }

  /**
   * @return The name string
   */
  getName(): string {
    return this.name;
  }
}

/**
 * @desc Class for grouped car components without common interface
 */
export class ComplexAssembly {
  private parts: SimplePart[] = [];
  private subAssemblies: ComplexAssembly[] = [];

  /**
   * @desc Initializes an assembly
   */
  constructor(private name: string) {
    this.name = name;
  }

  /**
   * @desc Adds a simple part to the internal list
   */
  addPart(part: SimplePart): void {
    this.parts.push(part);
  }

  /**
   * @desc Adds another assembly to the internal list
   */
  addSubAssembly(assembly: ComplexAssembly): void {
    this.subAssemblies.push(assembly);
  }

  /**
   * @desc Sums prices from all internal lists manually
   * @return The total cost
   */
  howMuchItCost(): number {
    let total = 0;
    for (const part of this.parts) {
      total += part.howMuchItCost();
    }
    for (const sub of this.subAssemblies) {
      total += sub.howMuchItCost();
    }
    return total;
  }

  /**
   * @desc Gets the assembly name
   * @return The name string
   */
  getName(): string {
    return this.name;
  }

  /**
   * @desc Prints the structure using specific loops for each type
   */
  showDetails(indentation: string = ""): void {
    console.log(`${indentation}+ ${this.name} (Total: $${this.howMuchItCost()})`);
    this.parts.forEach(p => console.log(`${indentation}  - ${p.getName()}: $${p.howMuchItCost()}`));
    this.subAssemblies.forEach(s => s.showDetails(indentation + "  "));
  }
}