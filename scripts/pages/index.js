const recipeCardsContainer = document.querySelector("#recipe-cards-container");

let recipesList = [];

async function fetchAllRecipes() {
  const response = await fetch("../../assets/datas/recipes.json");
  const recipes = await response.json();
  return recipes;
}

async function displayRecipes() {
  recipesList.forEach((recipe) => {
    const recipeCard = recipeFactory(recipe).createRecipeCard();
    recipeCardsContainer.appendChild(recipeCard);
  });
}

async function init() {
  recipesList = await fetchAllRecipes();
  displayRecipes();
}

init();
