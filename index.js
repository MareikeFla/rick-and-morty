import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { updatePageCounter } from "./components/NavPagination/NavPagination.js";
import { page } from "./components/NavPagination/NavPagination.js";
import { cardContainer } from "./components/NavButton/NavButton.js";

export const pagination = document.querySelector('[data-js="pagination"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States

const searchQuery = "";
