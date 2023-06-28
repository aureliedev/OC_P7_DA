function tagFactory(content, type) {
  function createTag() {
    let backgroundColor;

    switch (type) {
      case "ingredients":
        backgroundColor = "#3282F7";
        break;
      case "appliances":
        backgroundColor = "#68D9A4";
        break;
      case "ustensils":
        backgroundColor = "#ED6454";
        break;
      default:
        backgroundColor = "#333";
    }

    const tag = document.createElement("span");
    tag.textContent = content;
    tag.classList.add("tag");
    tag.style.background = backgroundColor;
    tag.setAttribute("data-type", type);

    const button = document.createElement("button");
    button.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    button.classList.add("tag-button");
    tag.appendChild(button);
    button.addEventListener("click", deleteTag);

    return tag;
  }

  return { createTag };
}
