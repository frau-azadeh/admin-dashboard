//@ts-ignore
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm Component", () => {
  it("renders login form with email and password fields", () => {
    render(
      <LoginForm
        email=""
        password=""
        setEmail={() => {}}
        setPassword={() => {}}
        onSubmit={() => {}}
      />,
    );

    expect(screen.getByLabelText("ایمیل")).toBeInTheDocument();
    expect(screen.getByLabelText("پسورد")).toBeInTheDocument();
  });

  it("updates email and password fields on change", () => {
    const setEmailMock = jest.fn();
    const setPasswordMock = jest.fn();

    render(
      <LoginForm
        email=""
        password=""
        setEmail={setEmailMock}
        setPassword={setPasswordMock}
        onSubmit={() => {}}
      />,
    );

    const emailInput = screen.getByLabelText("ایمیل");
    const passwordInput = screen.getByLabelText("پسورد");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(setEmailMock).toHaveBeenCalledWith("test@example.com");
    expect(setPasswordMock).toHaveBeenCalledWith("password123");
  });

  it("disables submit button when fields are empty", () => {
    render(
      <LoginForm
        email=""
        password=""
        setEmail={() => {}}
        setPassword={() => {}}
        onSubmit={() => {}}
      />,
    );

    const button = screen.getByText("ورود");
    expect(button).toBeDisabled();
  });

  it("enables submit button when both fields are filled", () => {
    render(
      <LoginForm
        email="test@example.com"
        password="password123"
        setEmail={() => {}}
        setPassword={() => {}}
        onSubmit={() => {}}
      />,
    );

    const button = screen.getByText("ورود");
    expect(button).not.toBeDisabled();
  });

  it("calls onSubmit function when form is submitted", () => {
    const onSubmitMock = jest.fn();

    render(
      <LoginForm
        email="test@example.com"
        password="password123"
        setEmail={() => {}}
        setPassword={() => {}}
        onSubmit={onSubmitMock}
      />,
    );

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
