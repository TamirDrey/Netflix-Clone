import React, {useState } from "react";


interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  validate?: (value: string) => boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  onChange,
  validate,
  required
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);

    if (validate && !validate(value)) {
      setError(`Invalid ${label}`);
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        required={required}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label>{label}</label>
    </div>
  );
};

export default Input;
