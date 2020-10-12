import React from "react";

import { cleanup, render } from "@testing-library/react";

import { data } from "../../data/portfolio";
import PortfolioItem from "../PortfolioItem";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

const testData = {
  tab: 0,
  index: 0,
  ...data[0],
};

describe("<PortfolioItem />", () => {
  it("displays expected information", () => {
    const { getByTestId, getAllByTestId } = render(
      <PortfolioItem {...testData} />
    );

    // expect image to use screenshot as source and link to url
    const image = getByTestId("portfolio-item-image");
    expect(image.getAttribute("src")).toBe(testData.screenshot);
    expect(image.getAttribute("src")).toBe(testData.screenshot);

    // expect links (image and button) to be test data url
    const links = getAllByTestId("portfolio-item-links");
    links.forEach((link) => {
      expect(link.getAttribute("href")).toBe(testData.url);
    });

    // expect github button to be test data github link
    const github = getByTestId("portfolio-item-github");
    expect(github.getAttribute("href")).toBe(testData.github);
  });

  it("renders without warnings or errors", () => {
    const {} = render(<PortfolioItem {...testData} />);
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });
});
