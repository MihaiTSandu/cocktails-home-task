import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import searchByIngredients from "../../../utils/searchByIngredientsApi";
import searchIngredients from "../../../utils/searchIngredients";

const SearchByIngredient = () => {
  const [displayChosenIngredients, setDisplayChosenIngredients] = useState<
    Array<string>
  >([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const resp = await searchIngredients();
      setIngredientsList(resp.drinks);
    } catch {}
  };

  const callDrinks = async () => {
    try {
      const resp = await searchByIngredients(displayChosenIngredients);
      console.log(resp);
    } catch {}
  };

  return (
    <StyledContainer>
      <StyledDiv>
        {ingredientsList.map((el: any) => (
          <IngredientButton
            selected={displayChosenIngredients.includes(el.strIngredient1)}
            onClick={(e) => {
              if (
                displayChosenIngredients.includes(
                  (e.target as HTMLElement).innerHTML
                )
              ) {
                let index = displayChosenIngredients.indexOf(
                  (e.target as HTMLElement).innerHTML
                );
                setDisplayChosenIngredients(
                  displayChosenIngredients.filter((item, ind) => ind !== index)
                );
              } else {
                setDisplayChosenIngredients([
                  ...displayChosenIngredients,
                  (e.target as HTMLElement).innerHTML,
                ]);
              }
              console.log(displayChosenIngredients);
            }}
          >
            {el.strIngredient1}
          </IngredientButton>
        ))}
      </StyledDiv>
      <StyledButton onClick={callDrinks}>Search</StyledButton>
    </StyledContainer>
  );
};

export default SearchByIngredient;

const ingredientButtonSelected = css`
  background-color: #02e2ff;
`;

const IngredientButton = styled.span<{ selected?: boolean }>`
  border-radius: 1rem;
  height: 3rem;
  width: 12%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => (p.selected ? ingredientButtonSelected : "")}

  :hover {
    cursor: pointer;
    background-color: #02e2ff;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background-color: #02e2ff;
  border: none;
  border-radius: 1rem;
  color: white;
  padding: 1rem 2rem;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  width: 20%;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
