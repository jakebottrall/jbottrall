import React from "react";

import { cleanup, render } from "@testing-library/react";

import { data } from "../../data/portfolio";
import Portfolio from "../Portfolio";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

describe("<Portfolio />", () => {
  it("renders without warnings or errors", () => {
    const {} = render(<Portfolio />);
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });
});
