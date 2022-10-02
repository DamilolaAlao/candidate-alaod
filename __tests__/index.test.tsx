import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../pages/index";
import Success from "../pages/success";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Create Account",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders form label property", () => {
    const { getByText } = render(<Home />);

    const firstNameLabel = getByText(/First Name/i);
    expect(firstNameLabel).toBeInTheDocument();

    const lastNameLabel = getByText(/Last Name/i);
    expect(lastNameLabel).toBeInTheDocument();

    const emailLabel = getByText(/Email/i);
    expect(emailLabel).toBeInTheDocument();

    const passwordLabel = getByText(/Password/i);
    expect(passwordLabel).toBeInTheDocument();

    const phoneNumberLabel = getByText(/Phone Number/i);
    expect(phoneNumberLabel).toBeInTheDocument();
  });
  it("renders form input property", () => {
    const { getByTestId } = render(<Home />);

    const firstNameInput = getByTestId("firstName");
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = getByTestId("lastName");
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = getByTestId("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = getByTestId("Password");
    expect(passwordInput).toBeInTheDocument();

    const phoneNumberInput = getByTestId("phoneNumber");
    expect(phoneNumberInput).toBeInTheDocument();

    const createAccountButton = getByTestId("submit");
    expect(createAccountButton).toHaveAttribute("type", "submit");
  });
});

describe("Success", () => {
  it("renders a heading", () => {
    render(<Success />);

    const heading = screen.getByRole("heading", {
      name: "Your account is now active.",
    });

    expect(heading).toBeInTheDocument();
  });
});
