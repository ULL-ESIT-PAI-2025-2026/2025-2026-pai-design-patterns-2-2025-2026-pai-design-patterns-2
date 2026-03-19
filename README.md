[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/I5FUcQFi)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23017548&assignment_repo_type=AssignmentRepo)


# Design Patterns II: Structural and Behavioral Architectures
### Software Architecture Study Material - PAI 2025-2026

This repository contains the official research, documentation, and practical implementations for the **Design Patterns II** session. This material is designed to serve as a high-level study guide, complementing the theoretical lectures provided in class with real-world code scenarios.

## Repository Structure
The project is organized to facilitate the transition from theory to practice:

* **`bib/`**: Bibliography, academic references, and deep-dive documentation.
* **`slides/`**: Visual support used during the technical exposition (PDF).
* **`src/`**: Core implementations categorized by design pattern. Each pattern includes a **"Bad Design"** version (anti-pattern) and a **"Pattern-based"** version to demonstrate the benefits of proper architecture.

## Patterns Addressed
We focus on four critical patterns that solve common problems in software scalability and flexibility:

1.  **Composite:** Managing tree structures and treating individual objects and compositions uniformly.
2.  **Prototype:** Creating new objects by cloning existing ones to avoid constructor overhead and maintain independence.
3.  **Observer:** Establishing a one-to-many dependency so that when one object changes state, all its dependents are notified automatically.
4.  **Strategy:** Defining a family of algorithms, encapsulating each one, and making them interchangeable at runtime.
5.  **Abstract Factory:** Providing an interface for creating families of related or dependent objects without specifying their concrete classes. This ensures consistency among objects created within the same theme or category.
6.  **Template:** Defining the skeleton of an algorithm in an operation, deferring some steps to subclasses. This allows subclasses to redefine certain steps of an algorithm without changing its overall structure.


## Authors
* **Saúl Lorenzo Armas**
* **Sergio Rosales Calzadilla**
* **Keran Miranda González**

---

## ⚠️ Important: Living Study Material
This repository is considered **official study material** at the same level as the theoretical class sessions. It is a "living" project and is subject to **constant updates**, refactors, and new examples.

> [!CAUTION]
> **Action Required:** To ensure you are studying the correct and most optimized version of the patterns, users must **git pull** the latest changes every time they access the repository. Working with outdated code may lead to misunderstanding the architectural improvements presented.

## Guidelines for Students
* **Comparative Learning:** We highly recommend comparing the `bad_design` files with the final implementations to understand the "Why" behind each pattern.
* **Evaluation:** This repository is the primary source for the work's evaluation. All code follows the ESIT-ULL programming standards.
* **Forum Access:** The link to this repository is available in the PAI forum for collective review and exam preparation.



