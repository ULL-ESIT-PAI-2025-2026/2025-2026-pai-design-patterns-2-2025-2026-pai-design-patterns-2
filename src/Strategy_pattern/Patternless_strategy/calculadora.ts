/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @author Keran Miranda González
 * @since Mar 13 2026
 * @desc Calculadora gigante sin aplicar patrón estrategia, con muchas operaciones diferentes
 */

import * as readlineSync from 'readline-sync';

class Calculadora {

  /** 
   * @desc Ejecuta la operación solicitada por el usuario
   * @param operacion Tipo de operación a realizar
   * @param valor1 Primer valor
   * @param valor2 Segundo valor (opcional según operación)
   * @return Resultado de la operación como number o string en caso de error
   */
  public ejecutarOperacion(operacion: string, valor1: number, valor2: number = 0): number | string {
    let resultado: number | string = 0;
    switch (operacion) {
      case 'suma':
        resultado = valor1 + valor2;
        break;
      case 'resta':
        resultado = valor1 - valor2;
        break;
      case 'multiplicacion':
        resultado = valor1 * valor2;
        break;
      case 'division':
        if (valor2 === 0) {
          resultado = 'Error: división por cero';
        } else {
          resultado = valor1 / valor2;
        }
        break;
      case 'potencia':
        resultado = Math.pow(valor1, valor2);
        break;
      case 'raiz':
        if (valor1 < 0) {
          resultado = 'Error: raíz de número negativo';
        } else {
          resultado = Math.sqrt(valor1);
        }
        break;
      case 'logaritmo':
        if (valor1 <= 0) {
          resultado = 'Error: logaritmo de número no positivo';
        } else {
          resultado = Math.log(valor1);
        }
        break;
      case 'modulo':
        if (valor2 === 0) {
          resultado = 'Error: módulo por cero';
        } else {
          resultado = valor1 % valor2;
        }
        break;
      case 'factorial':
        if (valor1 < 0) {
          resultado = 'Error: factorial de número negativo';
        } else {
          let factorial: number = 1;
          for (let iterador: number = 2; iterador <= valor1; iterador++) {
            factorial *= iterador;
          }
          resultado = factorial;
        }
        break;
      case 'seno':
        resultado = Math.sin(valor1);
        break;
      case 'coseno':
        resultado = Math.cos(valor1);
        break;
      case 'tangente':
        resultado = Math.tan(valor1);
        break;
      default:
        resultado = 'Operación no válida';
        break;
    }
    return resultado;
  }
}

function main(): void {
  const calculadora: Calculadora = new Calculadora();
  console.log('Bienvenido a la calculadora gigante');
  console.log('Operaciones disponibles: suma, resta, multiplicacion, division, potencia, raiz, logaritmo, modulo, factorial, seno, coseno, tangente');
  const operacion: string = readlineSync.question('Introduce la operación que quieres realizar: ');
  const valor1: number = Number(readlineSync.question('Introduce el primer valor: '));
  let valor2: number = 0;
  if (['suma', 'resta', 'multiplicacion', 'division', 'potencia', 'modulo'].includes(operacion)) {
    valor2 = Number(readlineSync.question('Introduce el segundo valor: '));
  }
  const resultado: number | string = calculadora.ejecutarOperacion(operacion, valor1, valor2);
  console.log(`Resultado: ${resultado}`);
}

main();
