/** Utility **/

const createEl = (elemento) => document.createElement(elemento);
const addClass = (elemento, classe) => elemento.classList.add(classe);

const createIcon = (iconName) => {
  const icon = createEl("i");
  addClass(icon, "bi");
  addClass(icon, iconName);
  return icon;
};

/** End Utility **/

/** Creazione Header **/

const header = createEl("header");
const headerWrapper = createEl("div");
const parHeader = createEl("p");
const navHeader = createEl("nav");
const ulNavHeader = createEl("ul");
const iconSearchHeader = createEl("li");
const iconCartHeader = createEl("li");

addClass(header, "container");
addClass(headerWrapper, "header-wrapper");
addClass(navHeader, "icon-nav");
addClass(ulNavHeader, "icons-wrapper");
addClass(iconSearchHeader, "icon");
addClass(iconCartHeader, "icon");

parHeader.innerText = "Find your \n best robot"; //ContentText non legge \n

iconCartHeader.appendChild(createIcon("bi-cart"));
iconSearchHeader.appendChild(createIcon("bi-search"));
ulNavHeader.append(iconSearchHeader, iconCartHeader);
headerWrapper.append(parHeader, ulNavHeader);
header.appendChild(headerWrapper);

document.body.appendChild(header);

/** End Header **/

/** Creazione Category */

const categoryContainer = createEl("section");
const categoryWrapper = createEl("div");
const categoryItemOne = createEl("div");
const categoryDescrOne = createEl("p");
const categoryItemTwo = createEl("div");
const categoryDescrTwo = createEl("p");
const categoryItemThree = createEl("div");
const categoryDescrThree = createEl("p");
const categoryItemFour = createEl("div");
const categoryDescrFour = createEl("p");

addClass(categoryContainer, "container");
addClass(categoryWrapper, "category-wrapper");
addClass(categoryItemOne, "category-item");
addClass(categoryItemOne, "active");
addClass(categoryItemTwo, "category-item");
addClass(categoryItemThree, "category-item");
addClass(categoryItemFour, "category-item");

categoryDescrOne.textContent = "All";
categoryDescrTwo.textContent = "Off";
categoryDescrThree.textContent = "All";
categoryDescrFour.textContent = "All";

categoryItemFour.append(createIcon("bi-cart"), categoryDescrFour);
categoryItemThree.append(createIcon("bi-cart"), categoryDescrThree);
categoryItemTwo.append(createIcon("bi-cart"), categoryDescrTwo);
categoryItemOne.append(createIcon("bi-cart"), categoryDescrOne);

categoryWrapper.append(
  categoryItemOne,
  categoryItemTwo,
  categoryItemThree,
  categoryItemFour
);

categoryContainer.appendChild(categoryWrapper);
document.body.appendChild(categoryContainer);

/** End Category **/

/** Section Title **/

const titleContainer = createEl("div");
const titleWrapper = createEl("div");
const title = createEl("h4");

addClass(titleContainer, "container");
addClass(titleWrapper, "title-wrapper");
addClass(title, "section-title");

title.textContent = "Recommended For you";

titleWrapper.appendChild(title);
titleContainer.appendChild(titleWrapper);

document.body.appendChild(titleContainer);

/** End Title **/

/** Products **/

const robots = [
  {
    id: 1,
    price: 200,
    description: "Il robot ingegnere",
    imgUrl: "https://robohash.org/alessandro",
    alt: "Immagine robot alessandro",
    fav: true,
  },
  {
    id: 2,
    price: 200,
    description: "Il robot designer",
    imgUrl: "https://robohash.org/elena",
    alt: "Immagine robot elena",
    fav: true,
  },
  {
    id: 3,
    price: 200,
    description: "Il robot idraulico",
    imgUrl: "https://robohash.org/luigi",
    alt: "Immagine robot luigi",
    fav: false,
  },
  {
    id: 4,
    price: 200,
    description: "Il robot idraulico",
    imgUrl: "https://robohash.org/mario",
    alt: "Immagine robot idraulico",
    fav: false,
  },
];

const roboProdGen = (robo) => {
  const productDiv = createEl("div");
  const productImg = createEl("img");
  const productInfo = createEl("div");
  const productText = createEl("div");
  const price = createEl("h5");
  const description = createEl("p");
  const iconPlus = createEl("div");
  const iconFav = createEl("div");

  addClass(productDiv, "product");
  addClass(productInfo, "product-info");
  addClass(productText, "product-text");
  addClass(iconPlus, "icon-plus");
  addClass(iconFav, "icon-heart");
  if (robo.fav) addClass(iconFav, "favourite");

  productImg.setAttribute("src", robo.imgUrl);
  productImg.setAttribute("alt", robo.alt);

  price.textContent = "€" + robo.price;
  description.textContent = robo.description;

  iconFav.appendChild(createIcon("bi-heart"));
  iconPlus.appendChild(createIcon("bi-plus"));

  productText.append(price, description);
  productInfo.append(productText, iconPlus);
  productDiv.append(productImg, productInfo, iconFav);

  return productDiv;
};

const productsSection = createEl("section");
const productsWrapper = createEl("div");

addClass(productsSection, "container");
addClass(productsWrapper, "products-wrapper");

robots.map((robot) => productsWrapper.appendChild(roboProdGen(robot)));
productsSection.appendChild(productsWrapper);

document.body.appendChild(productsSection);

//Simulo un 404 quindi dati non recuperati
categoryItemTwo.addEventListener("click", () => {
  while (productsWrapper.firstChild) {
    productsWrapper.removeChild(productsWrapper.firstChild);
  }

  categoryItemOne.classList.remove("active");
  addClass(categoryItemTwo, "active");

  try {
    robots404.map((robot) => productsWrapper.appendChild(roboProdGen(robot)));
  } catch (error) {
    if (error.name === "ReferenceError") {
      const errorContainer = createEl("div");
      const errorTitle = createEl("h4");

      addClass(errorContainer, "container");
      addClass(errorTitle, "error-title");

      errorTitle.textContent = "Server non raggiungibile!";

      errorContainer.appendChild(errorTitle);
      productsWrapper.appendChild(errorContainer);
    }
  }
});

categoryItemOne.addEventListener("click", () => {
  categoryItemTwo.classList.remove("active");
  addClass(categoryItemOne, "active");

  while (productsWrapper.firstChild) {
    productsWrapper.removeChild(productsWrapper.firstChild);
  }

  robots.map((robot) => productsWrapper.appendChild(roboProdGen(robot)));
  productsSection.appendChild(productsWrapper);
});

/** End Products */

/** Footer */

const footer = createEl("footer");
const mainNav = createEl("nav");
const ulMainNav = createEl("ul");
const pageOne = createEl("li");
const pageTwo = createEl("li");
const pageThree = createEl("li");
const pageFour = createEl("li");

addClass(mainNav, "main-nav");
addClass(pageOne, "nav-icon");
addClass(pageOne, "active");
addClass(pageTwo, "nav-icon");
addClass(pageThree, "nav-icon");
addClass(pageFour, "nav-icon");

pageFour.appendChild(createIcon("bi-person"));
pageThree.appendChild(createIcon("bi-cart"));
pageTwo.appendChild(createIcon("bi-heart"));
pageOne.appendChild(createIcon("bi-search"));

ulMainNav.append(pageOne, pageTwo, pageThree, pageFour);
mainNav.appendChild(ulMainNav);
footer.appendChild(mainNav);

document.body.appendChild(footer);

/** End Footer */
