export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

export let page = 1;
export let maxPage = 1;

export const pagination = document.querySelector('[data-js="pagination"]');

// States
export function updatePageCounter(data, page) {
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${data.info.pages}`;
}

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

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

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

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const searchbarButton = document.querySelector(".search-bar__button");
let searchQuery = "";

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  searchQuery = data.query;
  console.log(searchQuery);
  cardContainer.textContent = "";
  page = 1;
  fetchCharacters();
  createCharacterCards();
});

export async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  updatePageCounter(data, page);
  return data.results;
}
export async function createCharacterCards() {
  const characterArray = await fetchCharacters();
  characterArray.forEach((character) => {
    CharacterCard(character);
  });
}
fetchCharacters();
createCharacterCards();
