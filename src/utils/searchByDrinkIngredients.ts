

export const setIngredients = (drink: any) => {
    let str = "";

    if (drink.strIngredient1 !== null) {
        str += drink.strIngredient1 + ": " + drink.strMeasure1 + "; ";

    }
    if (drink.strIngredient2 !== null) {
        str += drink.strIngredient2 + ": " + drink.strMeasure2 + "; ";

    }
    if (drink.strIngredient3 !== null) {
        str += drink.strIngredient3 + ": " + drink.strMeasure3 + "; ";

    }
    if (drink.strIngredient4 !== null) {
        str += drink.strIngredient4 + ": " + drink.strMeasure4 + "; ";

    }
    if (drink.strIngredient5 !== null) {
        str += drink.strIngredient5 + ": " + drink.strMeasure5 + "; ";

    }
    if (drink.strIngredient6 !== null) {
        str += drink.strIngredient6 + ": " + drink.strMeasure6 + "; ";

    }
    if (drink.strIngredient7 !== null) {
        str += drink.strIngredient7 + ": " + drink.strMeasure7 + "; ";

    }
    if (drink.strIngredient8 !== null) {
        str += drink.strIngredient8 + ": " + drink.strMeasure8 + "; ";

    }
    if (drink.strIngredient9 !== null) {
        str += drink.strIngredient9 + ": " + drink.strMeasure9 + "; ";

    }
    if (drink.strIngredient10 !== null) {
        str += drink.strIngredient10 + ": " + drink.strMeasure10 + "; ";

    }
    if (drink.strIngredient11 !== null) {
        str += drink.strIngredient11 + ": " + drink.strMeasure11 + "; ";

    }
    if (drink.strIngredient12 !== null) {
        str += drink.strIngredient12 + ": " + drink.strMeasure12 + "; ";

    }
    if (drink.strIngredient13 !== null) {
        str += drink.strIngredient13 + ": " + drink.strMeasure13 + "; ";

    }
    if (drink.strIngredient14 !== null) {
        str += drink.strIngredient14 + ": " + drink.strMeasure14 + "; ";

    }
    if (drink.strIngredient15 !== null) {
        str += drink.strIngredient15 + ": " + drink.strMeasure15+ "; ";

    }

    return str;
}