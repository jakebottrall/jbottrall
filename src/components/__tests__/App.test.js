import React from "react";

import { render } from "@testing-library/react";

import App from "../../App";

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

test("<App /> Renders without warnings or errors", () => {
  const {} = render(<App />);

  expect(console.error).not.toHaveBeenCalled();
  expect(console.warn).not.toHaveBeenCalled();
});
