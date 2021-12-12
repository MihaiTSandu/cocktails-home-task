import React, { useState } from "react";
import styled from "styled-components";
import { searchByDrink } from "../../../utils/searchByDrinkApi";
import { setIngredients } from "../../../utils/searchByDrinkIngredients";
import DrinksDisplay from "../../components/DrinksDisplay";
import SearchField from "../../components/SearchField";

const translations = {
  instructions: "Instructions",
  ingredients: "Ingredients",
  noDrinkFound: "No drink available",
};

const SearchByDrink = () => {
  const [nonAlcoholic, setNonAlcoholic] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [returnedDrinks, setReturnedDrinks] = useState<Array<any>>();
  const [drinkInstructions, setDrinkInstructions] = useState<string>();
  const [drinkImage, setDrinkImage] = useState<string | null>();
  const [drinkIngredients, setDrinkIngredients] = useState<string>("");

  const callApi = async () => {
    try {
      const resp = await searchByDrink(inputValue);

      if (nonAlcoholic) {
        resp.drinks = resp.drinks.filter(
          (el: any) => el.strAlcoholic === "Non alcoholic"
        );
      }
      setReturnedDrinks(resp.drinks);

      setDrinkImage(null);
      setDrinkIngredients("");
      setDrinkInstructions("");

      if (resp.drinks.length === 1) {
        setDrinkInstructions(resp.drinks[0].strInstructions);
        setDrinkImage(resp.drinks[0].strDrinkThumb);
        setDrinkIngredients(setIngredients(resp.drinks[0]));
      }
    } catch {}
  };

  const drinksToDisplay = (e: any) => {
    try {
      let drink = returnedDrinks![parseInt(e.target.getAttribute("data-key"))];
      setDrinkInstructions(drink.strInstructions);
      setDrinkImage(drink.strDrinkThumb);
      let ingredients = setIngredients(drink);
      setDrinkIngredients(ingredients);
    } catch {}
  };

  return (
    <>
      <SearchField
        value={inputValue}
        onClick={callApi}
        onCheckboxClick={() => {
          setNonAlcoholic(!nonAlcoholic);
        }}
        onInputChange={(input) => {
          return setInputValue(input);
        }}
      />
      <DrinksDisplay
        onClick={(e: any) => {
          drinksToDisplay(e);
        }}
        elements={
          returnedDrinks?.length! > 0
            ? returnedDrinks?.map((el, id) => [el.strDrink, id])
            : [[translations.noDrinkFound, 0]]
        }
      />
      <DrinkInformations>
        {drinkImage != null && <h2>{translations.instructions}</h2>}
        <p>{drinkInstructions}</p>
        {drinkImage != null && <DrinkImage src={drinkImage} />}
        {drinkImage != null && <h2>{translations.ingredients}</h2>}
        <p>{drinkIngredients}</p>
      </DrinkInformations>
    </>
  );
};

export default SearchByDrink;

const DrinkImage = styled.img`
  border: none;
  width: 20rem;
  height: 20rem;
`;

const DrinkInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 5.25rem;
  padding-right: 5.25rem;
`;
