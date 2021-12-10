import React, { useState } from "react";
import styled from "styled-components";
import { setIngredients } from "../../../utils/ingredients";
import { searchByDrink } from "../../../utils/searchByDrinkApi";
import DrinksDisplay from "../../components/DrinksDisplay";
import SearchField from "../../components/SearchField";

const SearchByDrink = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [returnedDrinks, setReturnedDrinks] = useState<Array<any>>();
  const [drinkInstructions, setDrinkInstructions] = useState<string>();
  const [drinkImage, setDrinkImage] = useState<string>();
  const [drinkIngredients, setDrinkIngredients] = useState<string>("");

  const callApi = async () => {
    try {
      const resp = await searchByDrink(inputValue);
      setReturnedDrinks(resp.drinks);
    } catch {}
  };

  return (
    <>
      <SearchField
        value={inputValue}
        onClick={callApi}
        onInputChange={(input) => {
          return setInputValue(input);
        }}
      />
      <DrinksDisplay
        onClick={(e: any) => {
          let drink =
            returnedDrinks![parseInt(e.target.getAttribute("data-key"))];
          setDrinkInstructions(drink.strInstructions);
          setDrinkImage(drink.strDrinkThumb);
          let ingredients = setIngredients(drink);
          console.log(drink);

          setDrinkIngredients(ingredients);
        }}
        elements={returnedDrinks?.map((el, id) => [el.strDrink, id])}
      />
      <p>{drinkInstructions}</p>
      {drinkImage != null && <DrinkImage src={drinkImage} />}
      <p>{drinkIngredients}</p>
    </>
  );
};

export default SearchByDrink;

const DrinkImage = styled.img`
  border: none;
  width: 10rem;
  height: 10rem;
`;
