// INDEX PAGE
console.log("Array algo");

const recipeCardsContainer = document.querySelector("#recipe-cards-container");
const searchInput = document.querySelector("#search-input");
const errorMessageRecipes = document.querySelector("#error-message-recipes");

let recipesList = [];

searchInput.addEventListener("input", filterRecipes);

async function getAllRecipes() {
  const response = await fetch("../../assets/datas/recipes.json");
  const results = await response.json();
  recipesList = results;
  createRecipesList(recipesList);
  currentSearch = results;
}

init();

function init() {
  getAllRecipes();
}
