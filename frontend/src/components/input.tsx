import React from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  type,
  placeholder,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
