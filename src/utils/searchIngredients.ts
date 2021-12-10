const searchIngredients = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    );
    const responseJSON = await response.json();

    if (response.ok) {
      return responseJSON;
    }
};
  
export default searchIngredients;