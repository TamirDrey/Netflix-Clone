import React from "react";

interface InputProps {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  id,
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
        id={id}
        value={value}
        type={type}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
