# Technical Learning Report

## **Topic:** TypeScript Fundamentals, Tooling & Practical Implementation

## 1. Overview

## This document summarizes the technical learning and hands-on practice completed during the day. The primary focus was on understanding **TypeScript fundamentals**, progressing up to **utility types**, and applying this knowledge by building a **basic Express backend** and a **basic React frontend** using TypeScript. Additionally, foundational **Linux/Terminal commands** were practiced to improve development workflow efficiency.

## 2. Terminal / Linux Commands Practiced

Practiced commonly used Linux terminal commands essential for daily development activities.

### File & Directory Management

- `pwd` – Display current directory path
- `ls`, `ls -a`, `ls -l` – List files and directories
- `cd` – Navigate between directories
- `mkdir` – Create directories
- `rmdir` – Remove empty directories
- `touch` – Create files
- `rm`, `rm -r` – Remove files and directories
- `cp` – Copy files/directories
- `mv` – Move or rename files

### File Viewing & Editing

- `cat` – View file content
- `less`, `more` – Paginated file viewing
- `head`, `tail` – View beginning or end of files
- `nano`, `vi` – Basic file editing

### System & Utility Commands

- `clear` – Clear terminal screen
- `history` – View command history
- `whoami` – Show current user
- `uname` – System information
- `top` / `htop` – Process monitoring
- `ps` – View running processes

### Permissions & Networking

- `chmod` – Change file permissions
- `chown` – Change file ownership
- `ip a` / `ifconfig` – Network information
- `ping` – Network connectivity test

---

## 3. TypeScript Learning

### 3.1 TypeScript Fundamentals

- Introduction to TypeScript and its advantages over JavaScript
- Static typing and type inference
- Compilation using `tsc`
- Understanding and configuring `tsconfig.json`

### 3.2 Core TypeScript Concepts

- Primitive Types (`string`, `number`, `boolean`)
- Arrays and Tuples
- Enums
- `any`, `unknown`, `void`, `never`
- Type Aliases
- Interfaces
- Union and Intersection Types

### 3.3 Classes in TypeScript

- Class structure and constructors
- Access modifiers (`public`, `private`, `protected`)
- Readonly properties
- Inheritance and method overriding
- Pitfall of `private` modifier

### 3.4 Utility Types (Up to Intermediate Level)

- `Awaited<T>`
- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, T>`
- `Exclude<U, EM>`
- `Extract<T,U>`
- `NonNullable<T>`
- `Parameters<T>`
- `ConstructorParameters<T>`

---

## 4. Practical Implementation

### 4.1 Express Application with TypeScript

Developed a basic backend server using **Express + TypeScript**.
**Key Activities:**

- Project setup with TypeScript
- Installation of required dependencies:
  ```bash
  npm install express dotenv cors
  npm install -D typescript @types/node @types/express ts-node nodemon
  ```
- Typed `Request` and `Response` objects
- Implemented basic routing
- Configured server execution using `ts-node`

### 4.2 React Application with TypeScript

Created a basic frontend application using **React + TypeScript**.
**Key Activities:**

- Application setup using:
  ```bash
  npm create vite@latest forms-and-events
  npm install
  npm run dev
  ```
- Typed component props and state
- Functional components with TypeScript
- Form and Event handling with proper typings

---

## 5. Skills & Outcomes

- Improved proficiency with Linux terminal commands
- Strong understanding of TypeScript fundamentals and utility types
- Hands-on experience with Express backend using TypeScript
- Hands-on experience with React frontend using TypeScript
- Enhanced code maintainability and type safety

---

## 6. Next Learning Objectives

- Advanced TypeScript generics
- Custom utility types
- Error handling and validation
- Full-stack MERN application using TypeScript

---
