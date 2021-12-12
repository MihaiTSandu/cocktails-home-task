import React, { useEffect, useState } from "react";
import searchByIngredients from "../../../utils/searchByIngredientsApi";
import searchIngredients from "../../../utils/searchIngredients";
import {
  IngredientButton,
  StyledButton,
  StyledContainer,
  StyledDiv,
} from "./style";

const SearchByIngredient = () => {
  const [displayResults, setDisplayResults] = useState<Array<string>>([]);
  const [chosenIngredients, setChosenIngredients] = useState<Array<string>>([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  useEffect(() => {
    callApiForAllIngredients();
  }, []);

  const callApiForAllIngredients = async () => {
    try {
      const resp = await searchIngredients();
      setIngredientsList(resp.drinks);
    } catch {}
  };

  const callApiForDrinks = async () => {
    try {
      const resp = await searchByIngredients(chosenIngredients);
      console.log(resp.drinks);
      if (resp.drinks !== "None Found") {
        setDisplayResults(resp.drinks.map((el: any) => el.strDrink));
      } else {
        setDisplayResults(["None available"]);
      }
      console.log(displayResults);
    } catch {}
  };

  const selectIngredients = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (chosenIngredients.includes((e.target as HTMLElement).innerHTML)) {
      let index = chosenIngredients.indexOf(
        (e.target as HTMLElement).innerHTML
      );
      setChosenIngredients(
        chosenIngredients.filter((item, ind) => ind !== index)
      );
    } else {
      setChosenIngredients([
        ...chosenIngredients,
        (e.target as HTMLElement).innerHTML,
      ]);
    }
  };

  return (
    <StyledContainer>
      <StyledDiv>
        {ingredientsList.map((el: any) => (
          <IngredientButton
            selected={chosenIngredients.includes(el.strIngredient1)}
            onClick={(e) => {
              selectIngredients(e);
            }}
          >
            {el.strIngredient1}
          </IngredientButton>
        ))}
      </StyledDiv>
      <StyledButton onClick={callApiForDrinks}>Search</StyledButton>
      {displayResults.map((el: any) => (
        <p>{el}</p>
      ))}
    </StyledContainer>
  );
};

export default SearchByIngredient;
