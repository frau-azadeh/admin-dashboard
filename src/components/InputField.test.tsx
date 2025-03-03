// @ts-ignore
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField Component', () => {
  it('renders the input field with correct label', () => {
    render(<InputField label="ایمیل" type="email" value="" onChange={() => {}} />);
    expect(screen.getByText('ایمیل')).toBeInTheDocument();
  });

  it('renders an input element with the correct type', () => {
    render(<InputField label="پسورد" type="password" value="" onChange={() => {}} />);
    const inputElement = screen.getByLabelText('پسورد');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('calls onChange when user types', () => {
    const mockOnChange = jest.fn();
    render(<InputField label="ایمیل" type="email" value="" onChange={mockOnChange} />);

    const inputElement = screen.getByLabelText('ایمیل') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
