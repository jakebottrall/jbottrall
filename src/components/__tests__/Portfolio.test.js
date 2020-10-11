import React from "react";

import { cleanup, render } from "@testing-library/react";

import Portfolio from "../Portfolio";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

test("<Portfolio />", () => {
  const {} = render(<Portfolio />);

  //   check if any errors or warnings are present
  expect(console.error).not.toHaveBeenCalled();
  expect(console.warn).not.toHaveBeenCalled();
});
