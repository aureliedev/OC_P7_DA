// INDEX PAGE
console.log("Array algo");

const recipeCardsContainer = document.querySelector("#recipe-cards-container");
const searchInput = document.querySelector("#search-input");

let recipesList = [];

searchInput.addEventListener("input", filterRecipes);

async function getAllRecipes() {
  const response = await fetch("../../assets/datas/recipes.json");
  const results = await response.json();
  recipesList = results;
  createRecipesList(recipesList);
}

init();

function init() {
  getAllRecipes();
}

function createRecipesList(array) {
  array.forEach((element) => {
    const recipeCard = recipeFactory(element).createRecipeCard();
    recipeCardsContainer.appendChild(recipeCard);
  });
}
