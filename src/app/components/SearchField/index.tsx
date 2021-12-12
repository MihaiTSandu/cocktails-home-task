import React from "react";
import styled from "styled-components";

const translations = {
  inputError: "Could not handle input",
  buttonText: "Search",
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
        placeholder="Search for a drink"
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

const SearchButton = styled.button`
  background-color: ${(p) => p.theme.primary};
  border: none;
  border-radius: 1rem;
  color: white;
  padding: 1rem 2rem;
  margin-left: 1.25rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
`;

const SearchDiv = styled.div`
  background-color: #eee;
  height: 5.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  border: 2px solid ${(p) => p.theme.primary};
  border-radius: 1rem;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const CheckboxText = styled.p`
  margin-left: 1.25rem;
`;

const Checkbox = styled.input`
  margin-left: 0.5rem;
`;
