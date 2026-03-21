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
 * @desc Implementation of the Composite Pattern using a Corporate Organization Chart.
 */

/** 
 * @desc Represents any person or group in the company. 
 *     Both individual workers and managers will implement this.
 */
export interface CompanyMember {
  /**
   * @desc Calculates and returns the total salary cost.
   *     For a worker, it's just their salary. For a manager, it's their salary + their team's salaries.
   * @return The total salary in euros.
   */
  getSalaryCost(): number;

  /**
   * @desc Retrieves the name and role of the member.
   * @return A formatted string with name and role.
   */
  getRoleDescription(): string;

  /**
   * @desc Prints the organizational hierarchy from this member downwards.
   * @param indentation The string used to format the visual tree.
   */
  showHierarchy(indentation: string): void;
}

/** @desc Leaf class representing a standard employee with no subordinates. */
export class Worker implements CompanyMember {
  /**
   * @desc Initializes a standard worker.
   * @param name The employee's name.
   * @param role The employee's job title.
   * @param salary The employee's individual salary.
   */
  constructor(private name: string, private role: string, private salary: number) {
    this.name = name;
    this.role = role;
    this.salary = salary;
  }

  /**
   * @desc Retrieves the salary cost for this specific worker.
   * @return The individual salary in euros.
   */
  getSalaryCost(): number {
    return this.salary;
  }

  /**
   * @desc Retrieves the formatted name and role of the worker.
   * @return A string containing the worker's name and role.
   */
  getRoleDescription(): string {
    return `${this.name} (${this.role})`;
  }

  /**
   * @desc Prints the worker's information in the organizational hierarchy.
   * @param indentation The string used to format the visual tree. Default is an empty string.
   */
  showHierarchy(indentation: string = ""): void {
    console.log(`${indentation}-  ${this.getRoleDescription()} : €${this.salary}`);
  }
}

/** @desc Composite class representing a manager who oversees other employees (Workers or other Managers). */
export class Manager implements CompanyMember {
  private subordinates: CompanyMember[];

  /**
   * @desc Initializes a manager with an empty team.
   * @param name The manager's name.
   * @param role The manager's job title.
   * @param personalSalary The manager's individual base salary.
   */
  constructor(private name: string, private role: string, private personalSalary: number) {
    this.name = name;
    this.role = role;
    this.personalSalary = personalSalary;
    this.subordinates = [];
  }

  /**
   * @desc Adds a new member (Worker or Manager) to this manager's team.
   * @param member The company member to add as a subordinate.
   */
  addSubordinate(member: CompanyMember): void {
    this.subordinates.push(member);
  }

  /**
   * @desc Removes a subordinate from the team.
   * @param member The company member to remove.
   */
  removeSubordinate(member: CompanyMember): void {
    const index: number = this.subordinates.indexOf(member);
    if (index !== -1) {
      this.subordinates.splice(index, 1);
    }
  }

  /**
   * @desc Calculates the total salary cost of this manager AND their entire team.
   * @return The sum of the manager's personal salary plus the recursively calculated salaries of all subordinates.
   */
  getSalaryCost(): number {
    let totalAccumulated = 0;
    let stack: CompanyMember[] = [this];
    let current: CompanyMember | undefined;
    while (current = stack.pop()) {
      if (current instanceof Manager) {
        totalAccumulated += current.personalSalary;
        stack.push(...current.subordinates);
      } else if (current instanceof Worker) {
        totalAccumulated += current.getSalaryCost();
      }
    }
    return totalAccumulated;
  }

  /**
   * @desc Retrieves the formatted name and role of the manager.
   * @return A string containing the manager's name and role.
   */
  getRoleDescription(): string {
    return `${this.name} (${this.role})`;
  }

  /**
   * @desc Prints the manager's information and recursively prints the hierarchy of their entire team.
   * @param indentation The string used to format the visual tree. Default is an empty string.
   */
  showHierarchy(indentation: string = ""): void {
    console.log(`${indentation}+ ${this.getRoleDescription()} [Team Cost: €${this.getSalaryCost()}]`);
    for (const subordinate of this.subordinates) {
      subordinate.showHierarchy(indentation + "   ");
    }
  }
}