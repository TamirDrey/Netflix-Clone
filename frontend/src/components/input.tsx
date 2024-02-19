import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div>
      <input
        placeholder=""
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
