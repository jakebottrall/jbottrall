import React from "react";

import { cleanup, render, waitFor } from "@testing-library/react";

import Boat from "../../assets/boat.png";
import Background from "../Background";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

// simulate image asssets loading being successful after 100ms
global.Image = class {
  constructor() {
    setTimeout(() => {
      this.onload();
    }, 100);
  }
};

// set up mock for makestyles
jest.mock("@material-ui/core/styles", () => ({
  makeStyles: () =>
    jest.fn(() => {
      return {
        bg: "bg",
        slideBoat: "slideBoat",
        rollBackground: "rollBackground",
        slideBackground: "slideBackground",
      };
    }),
}));

describe("<Background />", () => {
  it("correctly animates the image assets", async () => {
    const { getByTestId } = render(<Background />);

    //   expect background image is present with initial className and without animation classes
    const backgroundImage = getByTestId("background-image");
    expect(backgroundImage.classList.contains("bg")).toBeTruthy();
    expect(backgroundImage.classList.contains("slideBackground")).toBeFalsy();
    expect(backgroundImage.classList.contains("rollBackground")).toBeFalsy();

    //   expect boat image is present with correct src and without animation class
    const boatImage = getByTestId("boat-image");
    expect(boatImage.getAttribute("src")).toBe(Boat);
    expect(boatImage.classList.contains("slideBoat")).toBeFalsy();

    //   wait for first background animation
    await waitFor(() =>
      expect(backgroundImage.classList.contains("slideBackground")).toBeTruthy()
    );

    //   wait for first boat animation
    await waitFor(() =>
      expect(boatImage.classList.contains("slideBoat")).toBeTruthy()
    );

    //   wait for second background animation
    await waitFor(() =>
      expect(backgroundImage.classList.contains("rollBackground")).toBeTruthy()
    );
  });

  it("renders without warnings or errors", () => {
    const {} = render(<Background />);
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });
});
