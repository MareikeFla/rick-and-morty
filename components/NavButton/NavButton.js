import { fetchCharacters } from "../CharacterCard/CharacterCard.js";
import { createCharacterCards } from "../CharacterCard/CharacterCard.js";
import { page } from "../NavPagination/NavPagination.js";
import { maxPage } from "../NavPagination/NavPagination.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

nextButton.addEventListener("click", () => {
  page = page + 1;
  cardContainer.textContent = "";
  fetchCharacters();
  createCharacterCards();
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page = page - 1;
    cardContainer.textContent = "";
    fetchCharacters();
    createCharacterCards();
  }
});
