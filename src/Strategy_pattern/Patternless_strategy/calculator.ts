/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026ogramming 2025-2026
 *
 * @author Saúl Lorenzo Armas
 * @author Sergio Rosales Calzadilla
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Large calculator without applying Strategy pattern, with many different operations
 */

class Calculator {
  /** 
   * Executes the operation requested by the user
   * @param operation Type of operation to perform
   * @param value1 First value
   * @param value2 Second value (optional depending on operation)
   * @return Result of the operation as number or string in case of error
   */
  executeOperation(operation: string, value1: number, value2: number = 0): number | string {
    let result: number | string = 0;
    switch (operation) {
      case 'sum':
        result = value1 + value2;
        break;
      case 'subtract':
        result = value1 - value2;
        break;
      case 'multiply':
        result = value1 * value2;
        break;
      case 'divide':
        if (value2 === 0) {
          result = 'Error: division by zero';
        } else {
          result = value1 / value2;
        }
        break;
      case 'power':
        result = Math.pow(value1, value2);
        break;
      case 'sqrt':
        if (value1 < 0) {
          result = 'Error: square root of negative number';
        } else {
          result = Math.sqrt(value1);
        }
        break;
      case 'log':
        if (value1 <= 0) {
          result = 'Error: logarithm of non-positive number';
        } else {
          result = Math.log(value1);
        }
        break;
      case 'mod':
        if (value2 === 0) {
          result = 'Error: modulo by zero';
        } else {
          result = value1 % value2;
        }
        break;
      case 'factorial':
        if (value1 < 0) {
          result = 'Error: factorial of negative number';
        } else {
          let factorial: number = 1;
          for (let i: number = 2; i <= value1; i++) {
            factorial *= i;
          }
          result = factorial;
        }
        break;
      case 'sin':
        result = Math.sin(value1);
        break;
      case 'cos':
        result = Math.cos(value1);
        break;
      case 'tan':
        result = Math.tan(value1);
        break;
      default:
        result = 'Invalid operation';
        break;
    }
    return result;
  }
}

function main(): void {
  const calculator: Calculator = new Calculator();
  console.log('--- STARTING AUTOMATED CALCULATOR TESTS ---');
  const res1 = calculator.executeOperation('sum', 10, 5);
  console.log(`Test Sum (10+5): ${res1}`);
  const res2 = calculator.executeOperation('sqrt', 25);
  console.log(`Test Sqrt (25): ${res2}`);
  const res3 = calculator.executeOperation('factorial', 5);
  console.log(`Test Factorial (5!): ${res3}`);
  const res4 = calculator.executeOperation('divide', 10, 0);
  console.log(`Test Division by Zero: ${res4}`);
  const res5 = calculator.executeOperation('sin', Math.PI / 2);
  console.log(`Test Sin (PI/2): ${res5}`);
  console.log('\n--- OBSERVATION ---');
  console.log('Notice how every operation, regardless of its logic, is forced into a single class.');
}

main();

