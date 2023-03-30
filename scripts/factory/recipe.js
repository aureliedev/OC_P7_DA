function recipeFactory(data) {
  const { name, ingredients, time, description } = data;

  function createRecipeCard() {
    const card = document.createElement("article");
    card.classList.add("recipe-card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("recipe-card-image-container");

    const recipeDetails = document.createElement("div");
    recipeDetails.classList.add("recipe-card-details");

    const recipeName = document.createElement("p");
    recipeName.classList.add("recipe-card-name");
    recipeName.textContent = name;

    const recipeTime = document.createElement("p");
    recipeTime.classList.add("recipe-card-time");
    recipeTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${time} min`;

    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("recipe-card-ingredients-list");

    ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("li");
      ingredientItem.classList.add("recipe-card-ingredients-list-item");
      const ingredientQuantity = ingredient.quantity
        ? ": " + ingredient.quantity
        : "";
      const quantityUnit = ingredient.unit ? ingredient.unit : "";
      ingredientItem.innerHTML = `<span>${ingredient.ingredient}</span> ${ingredientQuantity} ${quantityUnit}`;
      ingredientsList.appendChild(ingredientItem);
    });

    const recipeDescription = document.createElement("p");
    recipeDescription.classList.add("recipe-card-description");
    recipeDescription.textContent = description;

    recipeDetails.appendChild(recipeName);
    recipeDetails.appendChild(recipeTime);
    recipeDetails.appendChild(ingredientsList);
    recipeDetails.appendChild(recipeDescription);

    card.appendChild(imageContainer);
    card.appendChild(recipeDetails);

    return card;
  }

  return { createRecipeCard };
}
