// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// mock console errors and wanrings
console.warn = jest.fn(() => "warn");
console.error = jest.fn(() => "error");

// mock image asssets loading always successful after 100ms
global.Image = class {
  constructor() {
    setTimeout(() => {
      this.onload();
    }, 100);
  }
};
