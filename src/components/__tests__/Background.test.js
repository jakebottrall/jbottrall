import React from "react";

import { cleanup, render, waitFor } from "@testing-library/react";

import Boat from "../../assets/boat.png";
import Background from "../Background";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

// mock custom background status hook
jest.mock("../Hooks/useBackgroundStatus", () => jest.fn(() => true));

test("<Background />", async () => {
  const { getByTestId } = render(<Background />);

  //   ensure background image is present with initial className
  const backgroundImage = getByTestId("background-image");
  expect(backgroundImage.classList.contains("makeStyles-bg-1")).toBeTruthy();

  //   ensure boat image is present with correct src
  const boatImage = getByTestId("boat-image");
  expect(boatImage.getAttribute("src")).toBe(Boat);

  //   wait for first background animation
  await waitFor(() =>
    expect(
      backgroundImage.classList.contains("makeStyles-slideBackground-2")
    ).toBeTruthy()
  );

  //   wait for first boat animation
  await waitFor(() =>
    expect(boatImage.classList.contains("makeStyles-slideBoat-7")).toBeTruthy()
  );

  //   wait for second background animation
  await waitFor(() =>
    expect(
      backgroundImage.classList.contains("makeStyles-rollBackground-3")
    ).toBeTruthy()
  );

  // check that no errors or warnings are present
  expect(console.error).not.toBeCalled();
  expect(console.warn).not.toBeCalled();
});
