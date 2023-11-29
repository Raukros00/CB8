import { httpGet } from "./http.js";

/* Async Components */

/* Sync Components */

const headerElGen = () => {
  const searchEl = document.createElement("div");
  const linksEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const inputEl = document.createElement("input");
  const ulLinkEl = document.createElement("ul");
  const firstLinkEl = document.createElement("li");
  const secondLinkEl = document.createElement("li");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionSelectEl = document.createElement("option");

  searchEl.className = "search";
  ulLinkEl.className = "links-list";
  linksEl.className = "links";

  imgEl.src =
    "https://logosandtypes.com/wp-content/uploads/2020/07/netflix.svg";
  imgEl.alt = "Logo netflix";

  inputEl.type = "text";
  inputEl.placeholder = "Search";

  firstLinkEl.textContent = "TV Shows";
  secondLinkEl.textContent = "Movies";

  labelEl.setAttribute("for", "categories");
  labelEl.textContent = "Categories";

  selectEl.id = "categories";

  selectEl.appendChild(optionSelectEl);
  ulLinkEl.append(firstLinkEl, secondLinkEl, labelEl, selectEl);
  linksEl.appendChild(ulLinkEl);
  searchEl.append(imgEl, inputEl);

  return [searchEl, linksEl]; //Era un tranello e ci sono cascato?
};

const listContainerEl = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "list-container";
  titleEl.textContent = title;

  container.appendChild(titleEl);
  return container;
};

const cardsListEl = () => {
  const container = document.createElement("div");
  container.className = "cards-list";
  return container;
};

const cardElGen = (card) => {
  const imgEl = document.createElement("img");

  imgEl.className = "card-item";
  imgEl.src = `https://image.tmdb.org/t/p/w500${card.poster_path}`;
  imgEl.alt = card.title;

  return imgEl;
};

const modalElGen = (card) => {
  const modalEl = document.createElement("div");
  const modalWrapperEl = document.createElement("div");
  const modalImageEl = document.createElement("div");
  const modalImageButtonEl = document.createElement("div");
  const playBtnEl = document.createElement("a");
  const imgEl = document.createElement("img");
  const modalTextEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const textEl = document.createElement("p");
  const modalClose = document.createElement("div");

  modalEl.className = "modal";
  modalWrapperEl.className = "modal-wrapper";
  modalImageEl.className = "modal-image";
  modalImageButtonEl.className = "image-button";
  modalTextEl.className = "modal-text";
  modalClose.className = "modal-close";

  modalClose.innerHTML = "X";

  playBtnEl.textContent = "Play";
  titleEl.textContent = card.title;
  textEl.textContent = card.overview;

  imgEl.src = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${card.backdrop_path}`;

  modalTextEl.append(titleEl, textEl);
  modalImageButtonEl.appendChild(playBtnEl);
  modalImageEl.append(modalImageButtonEl, imgEl);
  modalWrapperEl.append(modalImageEl, modalTextEl, modalClose);
  modalEl.appendChild(modalWrapperEl);

  modalClose.addEventListener("click", () =>
    document.querySelector(".modal").remove()
  );

  return modalEl;
};

export { headerElGen, cardElGen, cardsListEl, listContainerEl, modalElGen };
