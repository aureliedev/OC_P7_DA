function filterRecipes(e) {
  if (e.target.value.length < 3 && e.target.value.length !== 0) {
    return;
  }

  recipeCardsContainer.innerHTML = "";
  const searchedString = e.target.value.toLowerCase();
  const filteredRecipesList = recipesList.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchedString) ||
      recipe.description.toLowerCase().includes(searchedString) ||
      getIngredientsFromRecipe(recipe).includes(searchedString)
    );
  });

  errorMessageRecipes.style.display =
    filteredRecipesList.length === 0 ? "block" : "none";

  createRecipesList(filteredRecipesList);
}
