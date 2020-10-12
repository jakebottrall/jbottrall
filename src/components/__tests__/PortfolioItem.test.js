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

    // expect a title
    const title = getByTestId("portfolio-item-title");
    expect(title.textContent).toBeTruthy();

    // expect an image
    const image = getByTestId("portfolio-item-image");
    expect(image.getAttribute("src")).toBe(testData.screenshot);

    // expect links in image and button
    const links = getAllByTestId("portfolio-item-links");
    links.forEach((link) => {
      expect(link.getAttribute("href")).toBe(testData.url);
    });

    // expect github button to have a link
    const github = getByTestId("portfolio-item-github");
    expect(github.getAttribute("href")).toBe(testData.github);

    // expect a description
    const description = getByTestId("portfolio-item-description");
    expect(description).toBeTruthy();

    // expect a stack logos count to match test data
    const stack = getByTestId("portfolio-item-stack");
    expect(stack.childNodes.length).toBe(testData.stack.length);
  });

  it("renders without warnings or errors", () => {
    const {} = render(<PortfolioItem {...testData} />);
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });
});
