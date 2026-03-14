/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Sergio Rosales Calzadilla alu010635590@ull.edu.es
 * @since Mar 14 2026
 * @desc Observer Pattern Implementation.
 * Pure implementation where the Subject notifies all its subscribers without 
 * worrying about their internal logic, and Observers react to every notification.
 */

'use strict';

/**
 * @description Interface representing an Observer in the pattern.
 *     Any class that wants to be notified must implement this interface.
 */
export interface Observer {
  /**
   * @description Receives an update from the Subject.
   * @param productName The name of the new product released.
   */
  update(productName: string): void;
}

/**
 * @description Interface representing a Subject in the pattern.
 *     Defines the basic methods to manage subscribers and notify them.
 */
export interface Subject {
  /**
   * @description Attaches an observer to the subject.
   * @param observer The observer to be attached.
   */
  subscribe(observer: Observer): void;

  /**
   * @description Detaches an observer from the subject.
   * @param observer The observer to be detached.
   */
  unsubscribe(observer: Observer): void;

  /**
   * @description Notifies all attached observers about an event.
   * @param productName The name of the new product to notify about.
   */
  notify(productName: string): void;
}

/**
 * @description Concrete implementation of a Subject.
 *     Represents a Tennis Store that notifies interested customers about new gear.
 */
export class TenisStore implements Subject {
  private subscribers: Observer[];
  /**
   * @description Initializes the TenisStore with an empty list of subscribers.
   */
  constructor() {
    this.subscribers = [];
  }

  /**
   * @description Adds a new customer to the notification list.
   * @param observer The customer who wants to be notified.
   */
  subscribe(observer: Observer): void {
    const isExist = this.subscribers.includes(observer);
    if (!isExist) {
      this.subscribers.push(observer);
    }
  }

  /**
   * @description Removes a customer from the notification list.
   * @param observer The customer who no longer wants to be notified.
   */
  unsubscribe(observer: Observer): void {
    const observerIndex = this.subscribers.indexOf(observer);
    if (observerIndex !== -1) {
      this.subscribers.splice(observerIndex, 1);
    }
  }

  /**
   * @description Notifies all actively subscribed customers about a new product.
   * @param productName The product that has just arrived.
   */
  notify(productName: string): void {
    console.log(`\n[TenisStore]: Broadcasting new arrival -> "${productName}" to ${this.subscribers.length} subscriber(s).`);
    for (const subscriber of this.subscribers) {
      subscriber.update(productName);
    }
  }

  /**
   * @description Simulates the action of releasing a new product and triggering notifications.
   * @param productName The name of the product to release.
   */
  releaseNewProduct(productName: string): void {
    console.log(`\n=== TenisStore released a new product: ${productName} ===`);
    this.notify(productName);
  }
}

/**
 * @description Concrete implementation of an Observer.
 * Represents a Customer. If they are subscribed, they are interested in the updates.
 */
export class Customer implements Observer {
  /**
   * @description Initializes the Customer.
   * @param name The name of the customer.
   */
  constructor(private name: string) {
    this.name = name;
  }

  /**
   * @description Reacts to the notification from the Store.
   *     Since the customer is subscribed, we assume they are interested.
   * @param productName The product notified by the Store.
   */
  update(productName: string): void {
    console.log(`Customer ${this.name}: "Great news! I need to check out the new ${productName}."`);
  }

  /**
   * @description Getter for the customer's name (useful for external logs).
   * @returns The customer's name.
   */
  getName(): string {
    return this.name;
  }
}
