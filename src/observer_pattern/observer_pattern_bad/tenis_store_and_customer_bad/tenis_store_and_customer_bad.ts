/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González 
 * @since Mar 14 2026
 * @desc Main execution file for the Observer Pattern simulation.
 */

'use strict';

/**
 * Concrete Customer class.
 * There is no interface, so the Store must know this specific class.
 */
export class Customer {
  constructor(private name: string) {}

  /**
   * Specific method for customers to receive news.
   */
  receiveNews(productName: string): void {
    console.log(`Customer ${this.name}: "I just saw the new ${productName}!"`);
  }

  getName(): string {
    return this.name;
  }
}

/**
 * Concrete Store class.
 * ERROR: It only works with 'Customer' objects, not any 'Observer'.
 */
export class TenisStore {
  private customers: Customer[] = [];
  constructor() {}
  /**
   * Adds a customer.
   * ERROR: If we want to add a 'Journalist' or 'WebSite', this fails.
   */
  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  /**
   * Removes a customer.
   */
  removeCustomer(customer: Customer): void {
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  /**
   * Manually notifies each customer.
   * ERROR: The store has to know the specific method name 'receiveNews'.
   */
  releaseProduct(productName: string): void {
    console.log(`\n=== Store releasing: ${productName} ===`);
    for (const customer of this.customers) {
      customer.receiveNews(productName);
    }
  }
}