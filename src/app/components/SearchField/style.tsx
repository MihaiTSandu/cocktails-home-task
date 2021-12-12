import styled from "styled-components";

export const SearchButton = styled.button`
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

export const SearchDiv = styled.div`
  background-color: #eee;
  height: 5.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: 2px solid ${(p) => p.theme.primary};
  border-radius: 1rem;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const CheckboxText = styled.p`
  margin-left: 1.25rem;
`;

export const Checkbox = styled.input`
  margin-left: 0.5rem;
`;
