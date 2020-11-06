import React from "react";

import { cleanup, render } from "@testing-library/react";

import Portfolio from "../components/Portfolio";
import { data } from "../data/portfolio";

afterEach(cleanup);

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

    // expect that all portfolio items to be present
    const portfolioItems = getAllByTestId("portfolio-item");
    expect(portfolioItems.length).toBe(data.length);
  });

  it("renders tabs vertically on large screens", () => {
    // set display to large width
    window.innerWidth = 1000;

    const { getByTestId } = render(<Portfolio />);

    const tabs = getByTestId("tabs");

    // expect orientation is verticle on large screen
    expect(tabs.classList.contains("MuiTabs-vertical")).toBeTruthy();
  });

  it("renders without warnings or errors", () => {
    const {} = render(<Portfolio />);
    expect(console.warn).not.toBeCalled();
    expect(console.error).not.toBeCalled();
  });
});
