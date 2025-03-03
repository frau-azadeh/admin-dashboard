// @ts-ignore
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  test("renders button with correct label", () => {
    render(<Button label="Click Me" />);

    // بررسی اینکه دکمه با متن صحیح نمایش داده شده
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("button should be disabled when disabled prop is true", () => {
    render(<Button label="Click Me" disabled />);

    const buttonElement = screen.getByText(/Click Me/i);

    // بررسی اینکه دکمه غیر فعال است
    expect(buttonElement).toBeDisabled();
  });

  test("calls onClick when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button label="Click Me" onClick={mockOnClick} />);

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    // بررسی اینکه تابع onClick فقط یکبار اجرا شده
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("button should not be clickable when disabled", () => {
    const mockOnClick = jest.fn();
    render(<Button label="Click Me" disabled onClick={mockOnClick} />);

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    // بررسی اینکه onClick در حالت disabled اجرا نمی‌شود
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
