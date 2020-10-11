import notistack from "notistack";
import React from "react";

import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";

import { apiCall, validateCaptcha } from "../../services/api";
import Contact from "../Contact.js";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

// set up mock for enqueue snackbar
jest.mock("notistack", () => ({
  useSnackbar: jest.fn(),
}));
const enqueueSnackbar = jest.fn();
jest.spyOn(notistack, "useSnackbar").mockImplementation(() => {
  return { enqueueSnackbar };
});

// set up mocks for apis
jest.mock("../../services/api", () => ({
  apiCall: jest.fn(() => {}),
  validateCaptcha: jest.fn(() => "asdfasdfasdfh8a7sdy034pb"),
}));

// test form data
const form = [
  {
    id: "name",
    initialValue: "",
    setValue: "Jake Bottrall",
  },
  {
    id: "email",
    initialValue: "",
    setValue: "jakebottrall@gmail.com",
  },
  {
    id: "message",
    initialValue: "",
    setValue: "Hey there,\n how's it going?\n Regards,\n Jake Bottrall",
  },
];
describe("<Contact />", () => {
  it("renders without warnings or errors", () => {
    const {} = render(<Contact history={[]} />);
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });

  it("updates and submits form correctly", async () => {
    const { getByTestId } = render(<Contact history={[]} />);

    // test each input starts with expected initial input and updates correctly on change
    form.forEach((x) => {
      const input = getByTestId(x.id);
      expect(input.value).toBe(x.initialValue);

      fireEvent.change(input, {
        target: { value: x.setValue },
      });

      expect(input.value).toBe(x.setValue);
    });

    // check loader is not open
    const loader = getByTestId("loader-backdrop");
    expect(loader.style.opacity).toBe("0");

    // trigger form submission
    const button = getByTestId("contact-form-button");
    fireEvent.click(button);

    // check loader has been opened
    expect(loader.style.opacity).toBe("1");

    // wait for form to be reset signalling handle submit function has complete
    await waitFor(() => expect(getByTestId("name").value).toBe(""));

    // Check all expected functions to be called during submit handling
    expect(apiCall).toHaveBeenCalledTimes(1);
    expect(validateCaptcha).toHaveBeenCalledTimes(1);
    expect(enqueueSnackbar).toHaveBeenCalledTimes(1);

    // check loader has been closed
    expect(loader.style.opacity).toBe("0");
  });
});
