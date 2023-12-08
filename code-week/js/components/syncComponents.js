const headerGenEl = () => {
  const headerEl = document.createElement("header");
  const navbarEl = document.createElement("navbar");
  const ulLinksEl = document.createElement("ul");
  const logoDivEl = document.createElement("div");
  const logoImgEl = document.createElement("img");
  const actionsEl = document.createElement("div");
  const searchDivEl = document.createElement("div");
  const iconDivEl = document.createElement("div");
  const iconEl = document.createElement("i");
  const inputEl = document.createElement("input");
  const profileImgEl = document.createElement("img");

  headerEl.className = "header";
  navbarEl.className = "navbar";
  ulLinksEl.className = "nav-links";
  logoDivEl.className = "logo";
  actionsEl.className = "actions";
  searchDivEl.className = "search-input";
  iconDivEl.className = "icon";
  iconEl.className = "fa-solid fa-magnifying-glass";
  profileImgEl.className = "profile-pic";

  logoImgEl.src =
    "https://zeevector.com/wp-content/uploads/LOGO/prime-video-logo-white-2048x629.png";
  logoImgEl.alt = "Logo primeflix";

  inputEl.type = "text";
  inputEl.placeholder = "Search...";

  profileImgEl.src =
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  profileImgEl.alt = "Profile picture";

  iconDivEl.appendChild(iconEl);
  searchDivEl.append(iconDivEl, inputEl);
  actionsEl.append(searchDivEl, profileImgEl);
  logoDivEl.appendChild(logoImgEl);

  ["Home", "Top Rated", "Film", "Recommended for you"].forEach((title) =>
    ulLinksEl.appendChild(liGenEl(title))
  );

  navbarEl.append(ulLinksEl, logoDivEl, actionsEl);
  headerEl.appendChild(navbarEl);

  return headerEl;
};

const mobileFilterGenEl = () => {
  const sectionFilterEl = document.createElement("section");
  const selectDivEl = document.createElement("div");
  const selectEl = document.createElement("select");
  const categoryDefault = document.createElement("option");

  sectionFilterEl.className = "mobile-filter";
  selectDivEl.className = "select-input";

  categoryDefault.id = "all";
  categoryDefault.textContent = "Category";

  selectEl.id = "categorieMobileFilter";

  selectEl.appendChild(categoryDefault);
  selectDivEl.appendChild(selectEl);
  sectionFilterEl.appendChild(selectDivEl);

  return sectionFilterEl;
};

const heroGenEl = () => {
  const sectionHeroEl = document.createElement("section");
  const overlayEl = document.createElement("div");
  const heroBackImgEl = document.createElement("img");
  const heroWrapperEl = document.createElement("div");
  const heroInfoEl = document.createElement("div");
  const heroTitleEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const buttonEl = document.createElement("a");
  const heroSliderEl = document.createElement("div");
  const topRatedEl = document.createElement("div");
  const topTitleDivEl = document.createElement("div");
  const topTitleEl = document.createElement("h2");
  const dividerEl = document.createElement("div");

  sectionHeroEl.className = "hero";
  overlayEl.className = "overlay-hero";
  heroBackImgEl.className = "hero-back";
  heroWrapperEl.className = "hero-wrapper";
  heroInfoEl.className = "hero-info";
  heroTitleEl.className = "hero-title";
  buttonEl.className = "btn btn-watch";
  heroSliderEl.className = "hero-slider";
  topRatedEl.className = "hero-toprated";
  topTitleDivEl.className = "top-title";
  dividerEl.className = "divider";

  buttonEl.textContent = "Watch now";
  topTitleEl.textContent = "Top Rated";

  for (let i = 0; i < 5; i++) {
    const bulletEl = document.createElement("div");
    bulletEl.className = "slide-point";
    if (i === 0) bulletEl.classList.add("actual");
    bulletEl.id = i;
    heroSliderEl.appendChild(bulletEl);
  }

  topTitleDivEl.append(topTitleEl, dividerEl);
  topRatedEl.appendChild(topTitleDivEl);
  heroTitleEl.append(titleEl, buttonEl);
  heroInfoEl.appendChild(heroTitleEl);
  heroWrapperEl.append(heroInfoEl, heroSliderEl, topRatedEl);
  sectionHeroEl.append(overlayEl, heroBackImgEl, heroWrapperEl);

  return sectionHeroEl;
};

const liGenEl = (title) => {
  const liEl = document.createElement("li");

  if (title === "Home") liEl.className = "active";
  liEl.textContent = title;

  return liEl;
};

const movieGenEl = (movie, type) => {
  const topFilmEl = document.createElement("div");
  const infoFilmEl = document.createElement("div");
  const titleEl = document.createElement("h3");
  const descrEl = document.createElement("p");
  const imgEl = document.createElement("img");

  infoFilmEl.className = "info-film-hover";
  infoFilmEl.id = movie.id;

  if (window.innerWidth < 768) type = "poster";

  imgEl.src = `https://image.tmdb.org/t/p/w780/${
    type === "backdrop" ? movie.backdrop_path : movie.poster_path
  }`;

  imgEl.alt = movie.title;
  imgEl.id = movie.id;

  titleEl.textContent = movie.title;
  titleEl.id = movie.id;
  descrEl.textContent = movie.overview.substring(0, 70) + "...";
  descrEl.id = movie.id;
  infoFilmEl.append(titleEl, descrEl);

  topFilmEl.className = "film";
  topFilmEl.append(infoFilmEl, imgEl);

  return topFilmEl;
};

const filterSectionGenEl = () => {
  const sectionFilterEl = document.createElement("section");
  const titleSectionEl = document.createElement("h4");
  const filterCategoryEl = document.createElement("div");
  const selectCategory = document.createElement("select");
  const categoryDefault = document.createElement("option");
  const filterYearEl = document.createElement("div");
  const selectYear = document.createElement("select");
  const yearDefault = document.createElement("option");
  const filterAzEl = document.createElement("div");
  const selectAz = document.createElement("select");
  const azDefault = document.createElement("option");
  const filterRatingEl = document.createElement("div");
  const filterRating = document.createElement("input");

  sectionFilterEl.className = "filter-section";
  filterCategoryEl.className = "filter category";
  filterYearEl.className = "filter";
  filterAzEl.className = "filter";
  filterRatingEl.className = "rating-input";

  titleSectionEl.textContent = "Sort by";

  selectCategory.id = "categorieDesktopFilter";
  selectYear.id = "yearFilter";
  selectAz.id = "azFilter";
  filterRating.id = "ratingFilter";

  filterRating.type = "range";

  categoryDefault.textContent = "Categories";
  yearDefault.textContent = "Year";
  azDefault.textContent = "A-z";

  categoryDefault.value = "all";
  yearDefault.value = "all";
  azDefault.value = "all";

  filterRatingEl.appendChild(filterRating);
  selectAz.appendChild(azDefault);
  filterAzEl.appendChild(selectAz);
  selectYear.appendChild(yearDefault);
  filterYearEl.appendChild(selectYear);
  selectCategory.appendChild(categoryDefault);
  filterCategoryEl.appendChild(selectCategory);
  sectionFilterEl.append(
    titleSectionEl,
    filterCategoryEl,
    filterYearEl,
    filterAzEl,
    filterRatingEl
  );

  return sectionFilterEl;
};

const listsFilmContainerGenEl = (id) => {
  const listsFilmContainerEl = document.createElement("div");
  listsFilmContainerEl.className = "lists-film container";
  listsFilmContainerEl.id = `listsFilm-${id}`;
  return listsFilmContainerEl;
};

const bannerGenEl = (imageUrl) => {
  const sectionBannerEl = document.createElement("section");
  const bannerWrapperEl = document.createElement("div");
  const infoDivEl = document.createElement("div");
  const titleEl = document.createElement("h2");
  const btnEl = document.createElement("a");
  const overlayDivEl = document.createElement("div");
  const backImgEl = document.createElement("img");

  sectionBannerEl.className = "banner container";
  bannerWrapperEl.className = "banner-wrapper";
  infoDivEl.className = "info-banner";
  btnEl.className = "btn btn-watch";
  overlayDivEl.className = "overlay-hero";

  titleEl.textContent = "Passa a premium";
  btnEl.textContent = "Cambia piano";

  backImgEl.src = imageUrl;

  infoDivEl.append(titleEl, btnEl);
  bannerWrapperEl.append(infoDivEl, overlayDivEl, backImgEl);
  sectionBannerEl.appendChild(bannerWrapperEl);

  return sectionBannerEl;
};

const filteredFilmsGenEl = () => {
  const containerEl = document.createElement("div");
  const listsFilmContainerEl = document.createElement("div");

  containerEl.className = "container";
  containerEl.id = "filteredFilmsContainer";
  containerEl.style = "display: none";
  listsFilmContainerEl.className = "filtered-films";

  containerEl.appendChild(listsFilmContainerEl);
  return containerEl;
};

const loaderGenEl = () => {
  const containerEl = document.createElement("container");
  const loaderEl = document.createElement("span");

  containerEl.className = "container";
  loaderEl.className = "loader";

  containerEl.appendChild(loaderEl);

  return containerEl;
};

const starsGenEl = (vote_average) => {
  const iconName = "fa-solid fa-star";
  const textualRatingEl = document.createElement("p");
  const starsContainer = document.createElement("div");

  const rating = vote_average / 2;

  textualRatingEl.textContent = rating.toFixed(2);

  starsContainer.classList = "stars";

  for (let i = 0; i < parseInt(rating); i++) {
    const starGoldEl = document.createElement("i");
    starGoldEl.className = iconName + " gold";
    starsContainer.appendChild(starGoldEl);
  }

  for (let i = 0; i < 5 - parseInt(rating); i++) {
    const starEl = document.createElement("i");
    starEl.className = iconName;
    starsContainer.appendChild(starEl);
  }

  starsContainer.appendChild(textualRatingEl);

  return starsContainer;
};

const modalGenEl = (film) => {
  const modalContainerEl = document.createElement("div");
  const modalWrapperEl = document.createElement("div");
  const backButtonEl = document.createElement("div");
  const overlayEl = document.createElement("div");
  const filmTrailerDivEl = document.createElement("div");
  const trailerVideoEl = document.createElement("iframe");
  const filmCardDivEl = document.createElement("div");
  const filmInfoDivEl = document.createElement("div");
  const filmTitleEl = document.createElement("h2");
  const filmInfoEl = document.createElement("p");
  const filmDescriptionEl = document.createElement("p");
  const buttonPlayEl = document.createElement("a");

  modalContainerEl.className = "modal";
  modalWrapperEl.className = "modal-wrapper";
  backButtonEl.className = "back-button";
  overlayEl.className = "overlay-black";
  filmTrailerDivEl.className = "film-trailer";
  filmCardDivEl.className = "film-card";
  filmInfoDivEl.className = "film-info";
  buttonPlayEl.className = "btn btn-start";

  trailerVideoEl.src = `https://www.youtube.com/embed/${film.trailer}?autoplay=1&mute=1`;
  trailerVideoEl.height = "100%";

  const hours = Math.floor(film.runtime / 60);
  const minutes = film.runtime % 60;

  backButtonEl.textContent = "<";
  filmTitleEl.textContent = film.title;
  filmInfoEl.textContent = `${new Date(film.release_date).getFullYear()} - ${
    film.genres
  } - ${hours}o ${minutes}m`;
  filmDescriptionEl.textContent = film.overview;
  buttonPlayEl.textContent = "Riproduci";

  filmInfoDivEl.append(
    filmTitleEl,
    filmInfoEl,
    starsGenEl(film.vote_average),
    filmDescriptionEl,
    buttonPlayEl
  );
  filmCardDivEl.appendChild(filmInfoDivEl);
  filmTrailerDivEl.appendChild(trailerVideoEl);
  modalWrapperEl.append(
    backButtonEl,
    overlayEl,
    filmTrailerDivEl,
    filmCardDivEl
  );
  modalContainerEl.appendChild(modalWrapperEl);

  return modalContainerEl;
};

const footerGenEl = () => {
  const footerEl = document.createElement("footer");
  const footerWrapperEl = document.createElement("div");

  //Elementi mobile
  const iconHomeEl = document.createElement("i");
  const iconSavedEl = document.createElement("i");
  const iconNewsEl = document.createElement("i");
  const iconProfileEl = document.createElement("i");

  //Elementi desktop
  const logoImgEl = document.createElement("img");
  const infoEl = document.createElement("a");
  const copyEl = document.createElement("small");

  footerEl.className = "footer";
  footerWrapperEl.className = "footer-wrapper";

  iconHomeEl.className = "fa-solid fa-house active";
  iconSavedEl.className = "fa-solid fa-bookmark";
  iconNewsEl.className = "fa-solid fa-bell";
  iconProfileEl.className = "fa-solid fa-user";

  logoImgEl.src = "./assets/whiteLogo.svg";

  infoEl.textContent = "Termini e condizioni";
  infoEl.href = "#";
  copyEl.textContent = "©1996-2024 Amazon.com";

  footerWrapperEl.append(
    iconHomeEl,
    iconSavedEl,
    iconNewsEl,
    iconProfileEl,
    logoImgEl,
    infoEl,
    copyEl
  );
  footerEl.appendChild(footerWrapperEl);

  return footerEl;
};

export {
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
};
