import React from "react";
import {
  Checkbox,
  CheckboxText,
  SearchButton,
  SearchDiv,
  SearchInput,
} from "./style";

const translations = {
  inputError: "Could not handle input",
  buttonText: "Search",
  placeholder: "Search for a drink",
};

export interface SearchFieldProps {
  value: string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onInputChange: (input: string) => void;
  onCheckboxClick: any;
}

const SearchField = ({
  value,
  onClick,
  onInputChange,
  onCheckboxClick,
}: SearchFieldProps) => {
  return (
    <SearchDiv>
      <SearchInput
        placeholder={translations.placeholder}
        type="text"
        value={value}
        onInput={(event) => {
          try {
            onInputChange((event.target as HTMLInputElement).value);
          } catch {
            console.error(translations.inputError);
          }
        }}
      />
      <SearchButton onClick={onClick}>{translations.buttonText}</SearchButton>
      <CheckboxText>Non-Alcoholic</CheckboxText>{" "}
      <Checkbox type="checkbox" onClick={onCheckboxClick}></Checkbox>
    </SearchDiv>
  );
};

export default SearchField;
