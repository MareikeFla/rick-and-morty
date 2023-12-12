import { page } from "../NavPagination/NavPagination.js";
import { updatePageCounter } from "../NavPagination/NavPagination.js";
export function CharacterCard({ image, name, status, type, episode }) {
  const characterCard = document.createElement("li");
  const cardContainer = document.querySelector('[data-js="card-container"]');
  characterCard.innerHTML = `<div class="card__image-container">
    
    <img
      class="card__image"
      src=${image}
      alt="image of ${name}"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${episode.length}</dd>
    </dl>
  </div>`;
  cardContainer.append(characterCard);
}

export async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  updatePageCounter(data, page);
  console.log(data);
  return data.results;
}
export async function createCharacterCards() {
  const characterArray = await fetchCharacters();
  characterArray.forEach((character) => {
    CharacterCard(character);
  });
}
