const baseUrl = "https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=";

const searchByIngredients = async (ingredients: Array<string>) => {
  ingredients = ingredients.map((el) => {
    return el.replace(/\s/g, "_");
  })
  const callUrl = baseUrl + ingredients.join(',');
  console.log(callUrl);

    const response = await fetch(
      callUrl
    );
    const responseJSON = await response.json();

    if (response.ok) {
      return responseJSON;
    }
};
  
export default searchByIngredients;