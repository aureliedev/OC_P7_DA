function createRecipesList(array) {
  array.forEach((element) => {
    const recipeCard = recipeFactory(element).createRecipeCard();
    recipeCardsContainer.appendChild(recipeCard);
  });
}

function getIngredientsFromRecipe(recipe) {
  const ingredients = recipe.ingredients.map((item) =>
    item.ingredient.toLowerCase()
  );
  return ingredients.toString();
}

function getAllIngredientsFromRecipesList(recipesList) {
  const allIngredients = [];
  recipesList.forEach((recipe) => {
    recipe.ingredients.forEach((item) => {
      allIngredients.push(capitalize(item.ingredient));
    });
  });
  let allIngredientsOnce = [...new Set(allIngredients)];
  const sortedAllIngredientsOnce = allIngredientsOnce.sort((a, b) =>
    a.localeCompare(b)
  );
  return sortedAllIngredientsOnce;
}

function getAllAppliancesFromRecipesList(recipesList) {
  const allAppliances = [];
  recipesList.forEach((recipe) => {
    allAppliances.push(recipe.appliance);
  });
  const allAppliancesOnce = [...new Set(allAppliances)];
  const sortedAllAppliancesOnce = allAppliancesOnce.sort((a, b) =>
    a.localeCompare(b)
  );
  return sortedAllAppliancesOnce;
}

function getAllUstensilsFromRecipesList(recipesList) {
  const allUstensils = [];
  recipesList.forEach((recipe) => {
    allUstensils.push(recipe.ustensils);
  });
  const allUstensilsFlat = allUstensils.flat();
  const allUstensilsFlatCapitalized = allUstensilsFlat.map((ustensil) =>
    capitalize(ustensil)
  );
  const allUstensilsFlatCapitalizedOnce = [
    ...new Set(allUstensilsFlatCapitalized),
  ];
  const sortedAllUstensilsFlatCapitalizedOnce =
    allUstensilsFlatCapitalizedOnce.sort((a, b) => a.localeCompare(b));
  return sortedAllUstensilsFlatCapitalizedOnce;
}

function capitalize(string) {
  if (string === "") {
    return;
  }
  const temp = string.split("");
  const capitalized = [];
  capitalized.push(temp[0].toUpperCase());
  for (i = 1; i < temp.length; i++) {
    capitalized.push(temp[i]);
  }
  const capitalizedString = capitalized.join("");
  return capitalizedString;
}
function displayListItems(listOfItemToDisplay, type) {
  let container;
  switch (type) {
    case "ingredients":
      container = document.querySelector(".ingredients-container");
      break;
    case "appliances":
      container = document.querySelector(".appliances-container");
      break;
    case "ustensils":
      container = document.querySelector(".ustensils-container");
      break;
  }
  container.innerHTML = "";
  if (listOfItemToDisplay.length === 0) {
    container.innerHTML = `
          <p>Aucun résultat</p>
      `;
  }
  listOfItemToDisplay.forEach((item) => {
    const spanItem = document.createElement("span");
    spanItem.classList.add("list-item");
    spanItem.textContent = item;
    spanItem.setAttribute("data-type", type);
    spanItem.addEventListener("click", addTag);
    container.appendChild(spanItem);
  });
}

function displayTags(list) {
  tagsContainer.innerHTML = "";
  if (list.length === 0) {
    return;
  }
  list.forEach((item) => {
    let tag = tagFactory(item.content, item.type).createTag();
    tagsContainer.appendChild(tag);
  });
}
