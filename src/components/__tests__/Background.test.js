import React from "react";

import { render, waitFor } from "@testing-library/react";

import BG from "../../assets/background.png";
import Boat from "../../assets/boat.png";
import Background from "../Background";
import useBackgroundStatus from "../Hooks/useBackgroundStatus";

jest.mock("../Hooks/useBackgroundStatus", () => jest.fn(() => true));

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

test("<Background />", async () => {
  const { getByTestId } = render(<Background />);

  const backgroundImage = getByTestId("background-image");
  expect(backgroundImage.classList.contains("makeStyles-bg-1")).toBeTruthy();

  const boatImage = getByTestId("boat-image");
  expect(boatImage.getAttribute("src")).toBe(Boat);

  await waitFor(() =>
    expect(
      backgroundImage.classList.contains("makeStyles-slideBackground-2")
    ).toBeTruthy()
  );

  await waitFor(() =>
    expect(boatImage.classList.contains("makeStyles-slideBoat-7")).toBeTruthy()
  );

  await waitFor(() =>
    expect(
      backgroundImage.classList.contains("makeStyles-rollBackground-3")
    ).toBeTruthy()
  );

  expect(console.error).not.toBeCalled();
  expect(console.warn).not.toBeCalled();
});
