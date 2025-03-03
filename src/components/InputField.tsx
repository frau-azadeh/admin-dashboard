import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-gray-600">
        {label}
      </label>
      <input
        id={label}
        value={value}
        onChange={onChange}
        type={type}
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

export default InputField;
