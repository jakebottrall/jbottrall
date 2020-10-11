import React from "react";

import { cleanup, getByTestId, render } from "@testing-library/react";

import { data } from "../../data/portfolio";
import Portfolio from "../Portfolio";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

describe("<Portfolio />", () => {
  it("renders expected components", () => {
    // set display to small width
    window.innerWidth = 300;

    const { getByTestId, getAllByTestId } = render(<Portfolio />);

    // expect tabs are present
    const tabs = getByTestId("tabs");
    expect(tabs).toBeTruthy();

    // expect orientation is not verticle on small screen
    expect(tabs.classList.contains("MuiTabs-vertical")).toBeFalsy();

    // expect that all portfolio items render
    const portfolioItems = getAllByTestId("portfolio-item");
    expect(portfolioItems.length).toBe(data.length);
  });

  it("renders tabs vertically on large screens", () => {
    window.innerWidth = 1000;
    const { getByTestId } = render(<Portfolio />);

    const tabs = getByTestId("tabs");

    // expect orientation is verticle on large screen
    expect(tabs.classList.contains("MuiTabs-vertical")).toBeTruthy();
  });

  it("renders without warnings or errors", () => {
    const {} = render(<Portfolio />);
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });
});
