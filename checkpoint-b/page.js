// Checkpoint B — my behaviour. Built to checkpoint-b/spec.md.
//
// The data is given to us:
import { items } from "./items.js";

// Draws an array of items into #list, replacing whatever was there.
export function renderItems(list) {
  const ul = document.querySelector("#list");

  // Remove the old items first, so we replace instead of adding.
  for (const li of ul.querySelectorAll("li")) {
    li.remove();
  }

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name}`;
    ul.append(li);
  }
}

// Only the stationery, as item objects.
export function matching() {
  return items.filter((item) => item.category === "stationery");
}

// Sets the page up: show everything now, show only stationery on click.
export function start() {
  renderItems(items);

  const button = document.querySelector("#select");

  // Only attach the listener once, even if start() is called twice.
  if (button.dataset.wired) {
    return;
  }
  button.dataset.wired = "yes";

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
