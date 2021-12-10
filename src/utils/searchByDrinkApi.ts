export const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"

export interface drinkResponse {
}

export const searchByDrink = async (drinkName: string): Promise<any> => {
    const requestUrl = `${baseUrl}s=${drinkName}`

    const response = await fetch(requestUrl)


    const responseJSON = await response.json();


    if (response.ok) {
        return responseJSON;
    } 
}
