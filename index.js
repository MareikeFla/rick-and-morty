import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
const characterArray = await fetchCharacters();
characterArray.forEach((character) => {
  CharacterCard(character);
});
