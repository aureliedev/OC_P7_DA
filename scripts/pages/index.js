// INDEX PAGE

const recipeCardsContainer = document.querySelector("#recipe-cards-container");
const searchInput = document.querySelector("#search-input");
const errorMessageRecipes = document.querySelector("#error-message-recipes");

const ingredientsContainer = document.querySelector(".ingredients-container");
const appliancesContainer = document.querySelector(".appliances-container");
const ustensilsContainer = document.querySelector(".ustensils-container");
const advancedSearchFields = document.querySelectorAll(
  ".advanced-search-field"
);
const tagsContainer = document.getElementById("tags-container");
const tags = document.querySelectorAll(".tag");

searchInput.addEventListener("input", filterList);

async function getAllRecipes() {
  const response = await fetch("../../assets/datas/recipes.json");
  const results = await response.json();
  recipesList = results;
  createRecipesList(recipesList);
  currentSearch = results;
  return results;
}

init();

async function init() {
  getAllRecipes();
  displayAllListItems();
}

async function displayAllListItems() {
  currentSearch = await getAllRecipes();
  displayListItems(
    getAllIngredientsFromRecipesList(currentSearch),
    "ingredients"
  );
  currentIngredientsList = getAllIngredientsFromRecipesList(currentSearch);
  displayListItems(
    getAllAppliancesFromRecipesList(currentSearch),
    "appliances"
  );
  currentAppliancesList = getAllAppliancesFromRecipesList(currentSearch);
  displayListItems(getAllUstensilsFromRecipesList(currentSearch), "ustensils");
  currentUstensilsList = getAllUstensilsFromRecipesList(currentSearch);
}

advancedSearchFields.forEach((field) => {
  const type = field.getAttribute("data-type");
  const chevron = field.querySelector(".chevron");
  const container = field.querySelector(".advanced-search-tags-container");
  const title = field.querySelector(".advanced-search-title");
  const input = field.querySelector(".advanced-search-input");

  chevron.addEventListener("click", toggleField);

  function toggleField() {
    title.classList.toggle("field-closed");
    input.classList.toggle("field-closed");
    input.focus();
    container.classList.toggle("field-closed");
    chevron.classList.toggle("field-opened");
  }

  input.addEventListener("input", filterList);
});

displayTags(tagsList);
