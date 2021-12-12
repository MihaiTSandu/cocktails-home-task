import styled, { css } from "styled-components";

export const ingredientButtonSelected = css`
  background-color: ${(p) => p.theme.primary};
`;

export const IngredientButton = styled.span<{ selected?: boolean }>`
  border-radius: 1rem;
  height: 3rem;
  width: 12%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => (p.selected ? ingredientButtonSelected : "")}

  :hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.primary};
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  background-color: ${(p) => p.theme.primary};
  border: none;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  width: 20%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
