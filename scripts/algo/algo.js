//let currentSearch = [];

function filterList(e) {
  let inputName = e.target.getAttribute("data-input");

  const searchedString = e.target.value.toLowerCase();
  console.log("searchedString:", searchedString);

  if (inputName === "search") {
    if (searchedString.length < 3 && searchedString.length !== 0) {
      return;
    }
    recipeCardsContainer.innerHTML = "";

    const filteredRecipesList = recipesList.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(searchedString) ||
        recipe.description.toLowerCase().includes(searchedString) ||
        getIngredientsFromRecipe(recipe).includes(searchedString)
      );
    });

    console.log("filteredRecipesList", filteredRecipesList);

    noRecipesMessage.style.display =
      filteredRecipesList.length === 0 ? "block" : "none";

    currentSearch = filteredRecipesList;

    createRecipesList(filteredRecipesList);
    displayListItems(
      getAllIngredientsFromRecipesList(filteredRecipesList),
      "ingredients"
    );
    displayListItems(
      getAllAppliancesFromRecipesList(filteredRecipesList),
      "appliances"
    );
    displayListItems(
      getAllUstensilsFromRecipesList(filteredRecipesList),
      "ustensils"
    );
  } else if (inputName === "ingredients") {
    const listToFilter = getAllIngredientsFromRecipesList(currentSearch);
    const filteredList = listToFilter.filter((item) => {
      return item.toLowerCase().includes(searchedString);
    });

    displayListItems(filteredList, "ingredients");
  } else if (inputName === "appliances") {
    const listToFilter = getAllAppliancesFromRecipesList(currentSearch);
    const filteredList = listToFilter.filter((item) => {
      return item.toLowerCase().includes(searchedString);
    });
    displayListItems(filteredList, "appliances");
  } else if (inputName === "ustensils") {
    const listToFilter = getAllUstensilsFromRecipesList(currentSearch);
    const filteredList = listToFilter.filter((item) => {
      return item.toLowerCase().includes(searchedString);
    });
    console.log("filteredList:", filteredList);

    displayListItems(filteredList, "ustensils");
  }
}
