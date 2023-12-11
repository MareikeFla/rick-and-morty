import { pagination } from "../../index.js";

export function updatePageCounter(data, page) {
  pagination.textContent = `${page} / ${data.info.pages}`;
}
