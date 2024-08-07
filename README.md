## About

This is a homework for an interview about the todo list system.

### Demo

link: <https://ntustray.github.io/todo-list-react-vite/>

### How to download and practice

1. Download npm and Node.js (18+).
2. Write the command `cd (file path)`.
3. Run `npm install` or `yarn`.
4. Open this project in your IDE or other editor.
5. Run `npm run dev`.

## Architecture

### Overview

This project uses react frontend and vite to build an easy and extendable todo list system.

### Tech Stack

- **React 18.3**: Used for building the user interface.
- **Vite 5.3**: Serves as the development server and build tool, providing a fast development experience.
- **Emotion 11.13**: Used for CSS-in-JS solution, making it easy to manage and apply dynamic styles.
- **Jest 29.7**: Used for unit testing to ensure code reliability if necessary
- **Testing Library 16.0**: Provides better testing utilities focusing on user interactions.
- **ESLint 8.57**: Used for code quality and consistency checks.
- **npm and yarn**: Used for package management.
- **gh-pages**: Used for deploying the project to GitHub Pages.

### Folder and Files

```plaintext
public/ : Static files by vite build
  src/ : Source code
    components/ : React components
    contexts/ : React contexts
    pages/ : React pages
    App.jsx : Main component
    main.tsx : Entry point
  .gitignore : Git ignore file
  .eslintrc.js : ESLint configuration
  .prettierrc.js : Prettier configuration
  jest.config.js : Jest configuration
  package.json : npm package configuration
  README.md : Project documentation
  tsconfig.json : TypeScript configuration
  vite.config.ts : Vite configuration
  ```
