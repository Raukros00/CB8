import { httpGet } from "../modules/http.js";
import { movieGenEl } from "./syncComponents.js";

const categoriesGenEl = async () => {
  const data = await httpGet("/genre/movie/list");

  const categories = data.genres.map((gen) => {
    const option = document.createElement("option");
    option.value = gen.id;
    option.textContent = gen.name;
    return option;
  });

  return categories;
};

const listFilmsEl = async (endpoint, title) => {
  const filmListEl = document.createElement("div");
  const filmContainerEl = document.createElement("div");
  const titleListEl = document.createElement("h2");
  const data = await httpGet(endpoint);

  let type;

  filmContainerEl.className = "film-list";

  if (title === "topRated") {
    type = "backdrop";
  } else {
    type = "poster";
    filmListEl.className = "film-container";
    titleListEl.innerHTML = `Film - <span class="blue-span">${title}</span>`;
    filmListEl.appendChild(titleListEl);
  }

  data.results.map((film) =>
    filmContainerEl.appendChild(movieGenEl(film, type))
  );

  filmListEl.appendChild(filmContainerEl);

  return filmListEl;
};

export { listFilmsEl, categoriesGenEl };
