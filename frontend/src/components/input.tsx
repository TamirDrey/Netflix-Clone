import React from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  type,
  placeholder,
  required,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
