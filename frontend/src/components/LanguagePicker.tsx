import { useState } from "react";
import { useTranslation } from "react-i18next";
import SelectBox from "./SelectBox";

const LanguagePicker = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedGenre] = useState<string>("");

  const changeLanguage = (lng: string) => {
    i18n?.changeLanguage(lng);
    setSelectedGenre(lng);
  };


  return (
    <div className="px-4 md:px-12 mt-4">
      <SelectBox
        options={[
          { value: "", label: "all" },
          { value: "en", label:"english" },
          { value: "es", label: "spanish" },
          { value: "de", label: "german" },
        ]}
        value={selectedLanguage}
        onChange={changeLanguage}
      />
    </div>
  );
};

export default LanguagePicker;
