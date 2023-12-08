import { listFilmsEl, categoriesGenEl } from "./components/asyncComponents.js";
import {
  headerGenEl,
  mobileFilterGenEl,
  heroGenEl,
  movieGenEl,
  filterSectionGenEl,
  listsFilmContainerGenEl,
  bannerGenEl,
  filteredFilmsGenEl,
  loaderGenEl,
  modalGenEl,
  footerGenEl,
} from "./components/syncComponents.js";
import { httpGet } from "./modules/http.js";

const openModal = (event) => {
  if (event.target.id !== "") {
    header.classList.remove("scrolled-header");
    isModalOpen = true;

    const film = {};

    httpGet(`/movie/${event.target.id}`).then((data) => {
      film.title = data.title;
      film.overview = data.overview;
      film.release_date = data.release_date;
      film.runtime = data.runtime;
      film.genres = data.genres.map((category) => category.name).join(", ");
      film.vote_average = data.vote_average;

      httpGet(`/movie/${event.target.id}/videos`).then((data) => {
        film.trailer = data.results[0].key;

        const modal = modalGenEl(film);
        modal.querySelector(".back-button").addEventListener("click", () => {
          modal.remove();
          isModalOpen = false;
        });

        listFilmsEl(`/movie/${event.target.id}/similar`, "Similar").then(
          (films) => {
            modal.querySelector(".film-info").appendChild(films);
            body.prepend(modal);
          }
        );
      });
    });
  }
};

const body = document.body;
const main = document.createElement("main");
let isModalOpen = false;

const imgBannerUrl =
  "https://picjumbo.com/wp-content/uploads/couple-lying-on-a-sofa-and-watching-movies-free-photo.jpg";

main.append(
  mobileFilterGenEl(),
  heroGenEl(),
  filteredFilmsGenEl(),
  filterSectionGenEl(),
  listsFilmContainerGenEl("first"),
  bannerGenEl(imgBannerUrl),
  listsFilmContainerGenEl("second")
);

body.append(headerGenEl(), main, footerGenEl());

const header = document.querySelector(".header");
const heroBack = document.querySelector(".hero-back");
const heroTitleEl = document.querySelector(".hero-title");
const heroTitle = heroTitleEl.querySelector("h1");

const categorieMobileFilter = document.querySelector("#categorieMobileFilter");
const categorieDesktopFilter = document.querySelector(
  "#categorieDesktopFilter"
);

const heroTopRated = document.querySelector(".hero-toprated");
const firstListsFilmEl = document.querySelector("#listsFilm-first");
const secondListsFilmEl = document.querySelector("#listsFilm-second");

categorieDesktopFilter.append(...(await categoriesGenEl()));
categorieMobileFilter.append(...(await categoriesGenEl()));

/** ADD FILMS **/

listFilmsEl("/movie/top_rated", "topRated").then((films) => {
  heroTopRated.appendChild(films);
  films.addEventListener("click", (event) => openModal(event));
});

Promise.all([
  listFilmsEl("/movie/upcoming", "Upcoming"),
  listFilmsEl("/movie/now_playing", "Now Playing"),
]).then((filmsList) => {
  filmsList.map((list) => {
    firstListsFilmEl.appendChild(list);
    list.addEventListener("click", (event) => openModal(event));
  });
});

Promise.all([listFilmsEl("/movie/popular", "Popular")]).then((filmsList) => {
  filmsList.map((list) => {
    secondListsFilmEl.appendChild(list);
    list.addEventListener("click", (event) => openModal(event));
  });
});

/** END ADD FILMS */

/** BULLET SLIDER TIMER **/

const data = await httpGet("/movie/top_rated");
let currentIndex = 1;

heroBack.src = `https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path}`;
heroTitle.textContent = data.results[0].title;

setInterval(() => {
  const movie = data.results[currentIndex];

  heroBack.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  heroTitle.textContent = movie.title;

  document.querySelectorAll(".slide-point").forEach((bullet) => {
    console.log(bullet.id, currentIndex);
    if (bullet.id == currentIndex) bullet.classList.add("actual");
    else bullet.classList.remove("actual");
  });

  currentIndex = (currentIndex + 1) % 5;
}, 5000);

/** END SLIDER TIMER **/

/** EVENTS HANDLING **/

document.querySelectorAll(".slide-point").forEach((bullet) => {
  bullet.addEventListener("click", (event) => {
    currentIndex = (parseInt(event.target.id) + 1) % 5;
    const movie = data.results[event.target.id];
    heroBack.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    heroTitle.textContent = movie.title;

    document.querySelectorAll(".slide-point").forEach((bullet) => {
      bullet.classList.remove("actual");
    });

    event.target.classList.add("actual");
  });
});

categorieDesktopFilter.addEventListener("change", () => {
  const loader = loaderGenEl();

  const selectedOption =
    categorieDesktopFilter.options[categorieDesktopFilter.selectedIndex];

  const filteredFilms = document.querySelector("#filteredFilmsContainer");
  const containerFilms = filteredFilms.querySelector(".filtered-films");

  containerFilms.innerHTML = "";

  if (selectedOption.value !== "all") {
    containerFilms.appendChild(loader);

    httpGet(`/discover/movie?with_genres=${selectedOption.value}`)
      .then((data) => {
        data.results.map((film) => {
          const filmEl = movieGenEl(film);
          containerFilms.appendChild(filmEl);
          console.log(filmEl);
          filmEl.addEventListener("click", (event) => openModal(event));
        });
      })
      .finally(() => loader.remove());
    main.insertBefore(filteredFilms, firstListsFilmEl);
    filteredFilms.style = "display: flex";
    firstListsFilmEl.style = "display: none";
  } else {
    filteredFilms.style = "display: none";
    firstListsFilmEl.style = "display: flex";
  }
});

categorieMobileFilter.addEventListener("change", () => {
  const loader = loaderGenEl();

  const selectedOption =
    categorieMobileFilter.options[categorieMobileFilter.selectedIndex];

  const filteredFilms = document.querySelector("#filteredFilmsContainer");
  const containerFilms = filteredFilms.querySelector(".filtered-films");

  containerFilms.innerHTML = "";

  if (selectedOption.value !== "all") {
    containerFilms.appendChild(loader);

    httpGet(`/discover/movie?with_genres=${selectedOption.value}`)
      .then((data) => {
        data.results.map((film) => {
          containerFilms.appendChild(movieGenEl(film));
        });
      })
      .finally(() => loader.remove());
    main.insertBefore(filteredFilms, firstListsFilmEl);
    filteredFilms.style = "display: flex";
    firstListsFilmEl.style = "display: none";
  } else {
    filteredFilms.style = "display: none";
    firstListsFilmEl.style = "display: flex";
  }
});

window.addEventListener("scroll", () => {
  if (window.innerWidth < 768 || isModalOpen) return;
  if (window.scrollY > 50) {
    header.classList.add("scrolled-header");
  } else {
    header.classList.remove("scrolled-header");
  }
});

/** END EVENTS HANDLING **/
