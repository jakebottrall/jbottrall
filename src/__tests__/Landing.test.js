import React from "react";
import { MemoryRouter } from "react-router-dom";

import { cleanup, render } from "@testing-library/react";

import Landing, { navItems } from "../components/Landing.js";

afterEach(cleanup);

describe("<Landing />", () => {
  it("renders expected components", () => {
    const { getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    //   expect a title
    const title = getByTestId("landing-page-title");
    expect(title.textContent).toBeTruthy();

    //   expect a subtitle
    const subtitle = getByTestId("landing-page-subtitle");
    expect(subtitle.textContent).toBeTruthy();

    //   expect nav items to be present
    const navLinks = getAllByTestId("nav-link");
    expect(navLinks.length).toBe(navItems.length);
  });

  it("renders without warnings or errors", () => {
    const {} = render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(console.warn).not.toBeCalled();
    expect(console.error).not.toBeCalled();
  });
});
