import { navButtonEventListener } from "./components/NavButton/NavButton.js";
import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

export const pagination = document.querySelector('[data-js="pagination"]');

// States
export function updatePageCounter(data, page) {
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${data.info.pages}`;
}

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

  searchQuery = data.query;

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
navButtonEventListener();
