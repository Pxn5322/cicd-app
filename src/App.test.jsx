import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("App form submission", async () => {
    render(<App />);

    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const submitButton = screen.getByTestId("submitButton");

    await userEvent.type(emailInput, "sigmaschool@gmail.com");
    await userEvent.type(passwordInput, "Ken123");

    expect(submitButton.disabled).toBe(false);
});
