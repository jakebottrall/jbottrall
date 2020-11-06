import React from "react";
import { MemoryRouter } from "react-router-dom";

import { cleanup, render, waitFor } from "@testing-library/react";

import { Main } from "../components/Main";

afterEach(cleanup);

describe("<Main />", () => {
  it("waits for assets to load before loading pages", async () => {
    const { queryByTestId, getByTestId } = render(
      <MemoryRouter>
        <Main location={{ key: "asdf", pathname: "/portfolio" }} />
      </MemoryRouter>
    );

    // expect transition group to not be present initially
    const transitionGroup = queryByTestId("transition-group");
    expect(transitionGroup).toBeFalsy();

    // expect transition group to render once assets have loaded
    await waitFor(() => expect(getByTestId("transition-group")).toBeTruthy());

    // expect button with link back to landing page
    const backButton = getByTestId("back-button");
    expect(backButton.getAttribute("href")).toBe("/");
  });

  it("doesn't display a back button on the landing page", async () => {
    const { queryByTestId, getByTestId } = render(
      <MemoryRouter>
        <Main location={{ key: "asdf", pathname: "/" }} />
      </MemoryRouter>
    );

    // wait for assets to load
    await waitFor(() => expect(getByTestId("component-wrapper")).toBeTruthy());

    // expect back button to not be present
    const backButton = queryByTestId("back-button");
    expect(backButton).toBeFalsy();
  });

  it("renders without warnings or errors", () => {
    const {} = render(<Main />);
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });
});
