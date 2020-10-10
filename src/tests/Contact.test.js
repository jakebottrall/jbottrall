import React from "react";

import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";

import { Contact } from "../components/Contact.js";
import { apiCall, validateCaptcha } from "../services/api";

afterEach(cleanup);

console.error = jest.fn(() => "error");
console.warn = jest.fn(() => "warn");

const setLoader = jest.fn(() => true);
const addSnackbar = jest.fn(() => true);
const history = [];

jest.mock("../services/api", () => ({
  apiCall: jest.fn(() => {}),
  validateCaptcha: jest.fn(
    () => "asdfasdfasdfh8a7sdyf07h42098fg642b9ybq08g034pb"
  ),
}));

const testForm = [
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

test("<Contact /> form control and submission", async () => {
  const { getByTestId } = render(
    <Contact
      history={history}
      setLoader={setLoader}
      addSnackbar={addSnackbar}
    />
  );

  testForm.forEach((x) => {
    const input = getByTestId(x.id);
    expect(input.value).toBe(x.initialValue);

    fireEvent.change(input, {
      target: { value: x.setValue },
    });

    expect(input.value).toBe(x.setValue);
  });

  const button = getByTestId("contact-form-button");

  fireEvent.click(button);

  await waitFor(() => expect(getByTestId("name").value).toBe(""));

  expect(setLoader).toHaveBeenCalledTimes(2);
  expect(apiCall).toHaveBeenCalledTimes(1);
  expect(validateCaptcha).toHaveBeenCalledTimes(1);
  expect(addSnackbar).toHaveBeenCalledTimes(1);

  expect(console.error).not.toHaveBeenCalled();
  expect(console.warn).not.toHaveBeenCalled();
});
