/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @since Mar 13 2026
 * @desc Example of Prototype inheritance in javascript
 */

/** BASIC OBJECT (inherits from Object.prototype) */
const obj = {
  name: "Keran"
};

/**
 * All object literals inherit from Object.prototype.
 * That means they have access to its methods.
 * Method NOT defined in obj, but inherited from Object.prototype
 */
console.log(obj.toString()); // → "[object Object]"

/**
 * Where is toString?
 * It is not in obj → JavaScript looks it up in Object.prototype
 */
console.log(Object.getPrototypeOf(obj) === Object.prototype); // → true

/** ARRAY (inherits from Array.prototype) */
const array = [1, 2, 3];

/**
 * Arrays inherit from Array.prototype,
 * which in turn inherits from Object.prototype.
 * Method from Array.prototype
 */
array.push(4);
console.log(array); // → [1, 2, 3, 4]
/** Method from Object.prototype */
console.log(array.hasOwnProperty("length")); // → true
/**
 * Prototype chain:
 * array → Array.prototype → Object.prototype → null
 * Verifying the chain
 */
console.log(Object.getPrototypeOf(array) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

/** READ vs WRITE behavior */
const arrayExample = [1, 2, 3];
/** We override the push method ONLY for this specific array. */
Object.defineProperty(arrayExample, "push", {
  value: function (...items: number[]): number {
    console.log("Custom push called with:", items);
    return arrayExample.length; 
  }
});
arrayExample.push(4); // → "Custom push called with: [4]"
/**
 * This does NOT modify Array.prototype.push
 * It only affects this specific array instance
 * Another array still uses the original push
 */
const anotherArray = [10, 20];
anotherArray.push(30);
console.log(anotherArray); // → [10, 20, 30]

/**
 * -------------------------------------------------------
 * CONCLUSION
 * -------------------------------------------------------
 * - Built-in objects (Object, Array, String...) rely on prototypes
 * - Methods come from their prototypes, not the object itself
 * - The prototype chain enables code reuse
 * - Writing affects only the current object, not the prototype
 */
