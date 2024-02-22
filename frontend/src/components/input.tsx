import React, { useState } from "react";

interface InputProps {
  type: string;
  label: string;
  onChange: (value: string) => void;
  validate?: (value: string) => boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  onChange,
  validate,
  required,
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
    <div className="relative">
      <input
        type={type}
        onChange={handleInputChange}
        required={required}
        placeholder=""
        className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
        text-white
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-2
        border-orange-600"
      />
      {error && (
        <div className="mt-2">
          <p className="text-xs text-orange-600 dark:text-red-400 h-0.4">
            <span className="font-medium">{error}</span>
          </p>
        </div>
      )}
      <label
        className="
      absolute 
      text-md
      text-zinc-400
      duration-150 
      transform 
      -translate-y-3 
      scale-75 
      top-4 
      z-10 
      origin-[0] 
      left-6
      peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75
      peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
