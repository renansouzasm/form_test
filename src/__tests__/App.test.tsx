import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "../App";

describe("App Component", () => {
  beforeAll(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("Should display an alert when the CPF is in the incorrect format", () => {
    render(<App />);

    const cpfInput = screen.getByPlaceholderText("CPF") as HTMLInputElement;
    const submitButton = screen.getByText("Create Account");

    fireEvent.change(cpfInput, { target: { value: "123456789" } });
    fireEvent.click(submitButton);

    expect(cpfInput.checkValidity()).toBe(false);
    expect(cpfInput.validationMessage).toBe("Constraints not satisfied");
  });

  test("Should display alert when passwords do not match", () => {
    render(<App />);

    const passwordInput = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByPlaceholderText(
      "Confirm Password"
    ) as HTMLInputElement;
    const submitButton = screen.getByText("Create Account");

    fireEvent.change(passwordInput, { target: { value: "pass123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "pass321" } });
    fireEvent.click(submitButton);

    expect(confirmPasswordInput.checkValidity()).toBe(false);
    expect(confirmPasswordInput.validationMessage).toBe(
      "Constraints not satisfied"
    );
  });

  test("Should display success alert when form is submitted correctly", () => {
    render(<App />);

    const fullNameInput = screen.getByPlaceholderText(
      "Full Name"
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
    const cpfInput = screen.getByPlaceholderText("CPF") as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByPlaceholderText(
      "Confirm Password"
    ) as HTMLInputElement;
    const submitButton = screen.getByText("Create Account");

    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(cpfInput, { target: { value: "123.456.789-00" } });
    fireEvent.change(passwordInput, { target: { value: "pass123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "pass123" } });

    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith("Success!");

    expect(fullNameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(cpfInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(confirmPasswordInput.value).toBe("");
  });
});
