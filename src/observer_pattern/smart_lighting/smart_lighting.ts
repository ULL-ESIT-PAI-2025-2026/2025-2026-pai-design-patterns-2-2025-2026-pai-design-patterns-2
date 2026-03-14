/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Sergio Rosales Calzadilla alu010635590@ull.edu.es
 * @since Mar 14 2026
 * @desc Implementation of a Light Switch (Subject) and Light Bulbs (Observers).
 */

'use strict';

/**
 * @description Interface representing an Observer in the pattern.
 * Any class that wants to be notified must implement this interface.
 */
export interface Observer {
  /**
   * @description Receives an update from the Subject.
   * @param isOn The new state of the circuit (true for ON, false for OFF).
   */
  update(isOn: boolean): void;
}

/**
 * @description Interface representing a Subject in the pattern.
 * Defines the basic methods to manage subscribers and notify them.
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
   * @param isOn The new state of the circuit to notify about.
   */
  notify(isOn: boolean): void;
}


/**
 * @description Subject representing a smart light switch.
 * It maintains a list of connected bulbs and notifies them when toggled.
 */
export class LightSwitch implements Subject {
  private subscribers: Observer[];
  private isTurnedOn: boolean;
  private name: string;

  /**
   * @description Initializes the switch in the OFF state with an empty circuit.
   * @param name Identifier for the switch (e.g., "Living Room").
   */
  constructor(name: string) {
    this.name = name;
    this.subscribers = [];
    this.isTurnedOn = false;
  }

  /**
   * @description Attaches a new light bulb (observer) to this switch's circuit.
   * @param observer The light bulb to be connected.
   */
  subscribe(observer: Observer): void {
    if (!this.subscribers.includes(observer)) {
      this.subscribers.push(observer);
    }
  }

  /**
   * @description Detaches a light bulb (observer) from this switch's circuit.
   * @param observer The light bulb to be disconnected.
   */
  unsubscribe(observer: Observer): void {
    const index = this.subscribers.indexOf(observer);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  /**
   * @description Notifies all connected bulbs about the current power state.
   * @param isOn The current power state to broadcast (true for ON, false for OFF).
   */
  notify(isOn: boolean): void {
    console.log(`\n[${this.name}] Notifying ${this.subscribers.length} bulbs: Power is ${isOn ? 'ON' : 'OFF'}`);
    for (const observer of this.subscribers) {
      observer.update(isOn);
    }
  }

  /**
   * @description Toggles the switch state (ON to OFF, or OFF to ON) and triggers a notification.
   */
  toggle(): void {
    this.isTurnedOn = !this.isTurnedOn;
    console.log(`\n--- Action: Someone flipped the ${this.name} ---`);
    this.notify(this.isTurnedOn);
  }
}

/**
 * @description Observer representing a light bulb connected to a switch.
 * It reacts to the power state changes broadcasted by the switch.
 */
export class LightBulb implements Observer {
  private location: string;

  /**
   * @description Initializes the light bulb with its specific physical location.
   * @param location Where the bulb is installed.
   */
  constructor(location: string) {
    this.location = location;
  }

  /**
   * @description Reacts to the notification from the LightSwitch, turning the physical bulb on or off.
   * @param isOn The new state of the circuit (true for ON, false for OFF).
   */
  update(isOn: boolean): void {
    if (isOn) {
      console.log(`  -> 💡 Bulb at [${this.location}] turned ON.`);
    } else {
      console.log(`  -> 🌑 Bulb at [${this.location}] turned OFF.`);
    }
  }
  
  /**
   * @description Retrieves the location of the light bulb.
   * @return The string representing the bulb's location.
   */
  getLocation(): string {
    return this.location;
  }
}