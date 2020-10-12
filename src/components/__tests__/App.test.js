import React from "react";

import { render } from "@testing-library/react";

import App from "../../App";

test("<App /> Renders without warnings or errors", () => {
  const {} = render(<App />);

  expect(console.warn).not.toHaveBeenCalled();
  expect(console.error).not.toHaveBeenCalled();
});
