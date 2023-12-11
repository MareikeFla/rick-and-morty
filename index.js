import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { updatePageCounter } from "./components/NavPagination/NavPagination.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
export let page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  updatePageCounter(data, page);
  console.log(data);
  return data.results;
}
const characterArray = await fetchCharacters();
characterArray.forEach((character) => {
  CharacterCard(character);
});
