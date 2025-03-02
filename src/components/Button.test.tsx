// @ts-ignore
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("باید متن داخل دکمه را نمایش دهد", () => {
  render(<Button>Click Me</Button>);

  // بررسی می‌کنیم که دکمه با متن موردنظر وجود دارد
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("باید روی کلیک، تابع onClick را اجرا کند", () => {
  const mockHandler = jest.fn();
  render(<Button onClick={mockHandler}>Click Me</Button>);

  const buttonElement = screen.getByTestId("custom-button");
  fireEvent.click(buttonElement);

  // انتظار داریم که تابع onClick فقط یک بار اجرا شود
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
