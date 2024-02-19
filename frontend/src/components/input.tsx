import React from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({
  onChange,
  onBlur,
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
        onBlur={onBlur}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
