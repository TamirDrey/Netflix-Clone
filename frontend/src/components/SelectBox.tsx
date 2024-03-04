import React from "react";
import { useTranslation } from "react-i18next";

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange }) => {
  const { t } = useTranslation();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      className="ml-2 px-2 py-1 rounded bg-gray-800 text-white"
      value={value}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {t(`selectBox.items.${option.label}`)}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
