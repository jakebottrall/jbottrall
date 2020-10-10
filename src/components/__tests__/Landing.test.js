import React from "react";
import { MemoryRouter } from "react-router-dom";

import { cleanup, render } from "@testing-library/react";

import Landing, { navItems } from "../Landing.js";

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

afterEach(cleanup);

test("<Landing />", () => {
  const { getByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );

  //   check title
  const title = getByTestId("landing-page-title");
  expect(title.textContent).toBeTruthy();

  //   check subtitle
  const subtitle = getByTestId("landing-page-subtitle");
  expect(subtitle.textContent).toBeTruthy();

  //   check nav items have rendered
  const navLinks = getAllByTestId("nav-link");
  expect(navLinks.length).toBe(navItems.length);

  //   check if any errors or warnings are present
  expect(console.error).not.toHaveBeenCalled();
  expect(console.warn).not.toHaveBeenCalled();
});
