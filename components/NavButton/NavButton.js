export let page = 1;
export let maxPage = 1;

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
export function navButtonEventListener() {
  nextButton.addEventListener("click", () => {
    if (page < maxPage) {
      page = page + 1;
      cardContainer.textContent = "";
      fetchCharacters();
      createCharacterCards();
    } else {
      cardContainer.textContent = "";
      fetchCharacters();
      createCharacterCards();
    }
  });

  prevButton.addEventListener("click", () => {
    if (page > 1) {
      page = page - 1;
      cardContainer.textContent = "";
      fetchCharacters();
      createCharacterCards();
    } else {
      cardContainer.textContent = "";
      fetchCharacters();
      createCharacterCards();
    }
  });
}
