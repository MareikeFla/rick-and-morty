export let page = 1;
export let maxPage = 1;

export function updatePageCounter(data, page) {
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${data.info.pages}`;
}
