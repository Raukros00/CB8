import { httpGet } from "./http.js";
import {
  headerElGen,
  cardElGen,
  cardsListEl,
  listContainerEl,
  modalElGen,
} from "./components.js";

const mainSectionEl = document.querySelector(".main");

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGet(endpoint);
  const listContEl = listContainerEl(title);
  const cardListEl = cardsListEl();

  data.results.map((serie) => {
    const card = cardElGen(serie);
    card.addEventListener("click", () =>
      document.body.appendChild(modalElGen(serie))
    );
    cardListEl.appendChild(card);
  });

  listContEl.appendChild(cardListEl);
  return listContEl;
};

// asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming").then((data) =>
//   mainSectionEl.appendChild(data)
// );

// asyncListContainerElGen("/tv/top_rated", "TV Series - Top Rated").then((data) =>
//   mainSectionEl.appendChild(data)
// );

// asyncListContainerElGen("/tv/popular", "TV Series - Popular").then((data) =>
//   mainSectionEl.appendChild(data)
// );

//Non mi piace questa soluzione
document.querySelector(".navbar").append(...headerElGen());

Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "TV Series - Top Rated"),
  asyncListContainerElGen("/tv/popular", "TV Series - Popular"),
])
  .then((elements) => {
    elements.map((element) => mainSectionEl.appendChild(element));
  })
  .catch((error) => {
    error.log(error);
  });
