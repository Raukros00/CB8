/** Utility */

const createEl = (tag) => document.createElement(tag);
const classEl = (el, className) => el.classList.add(className);

/** End utility */

/** Start Esercizio1 **/

const section = document.querySelector("#hero-section");

//Creo prima l'html
const divHero = createEl("div");
const divHeroWrapper = createEl("div");
const divHeroText = createEl("div");
const titleHero = createEl("h2");
const paragraphHero = createEl("p");
const buttonHero = createEl("button");

//Aggiungo il contenuto
titleHero.textContent = "Il mondo dell'arte è pieno di meraviglie";
paragraphHero.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque exercitationem, eaque quidem vitae, beatae laborum ut magni quae pariatur dicta saepe. Necessitatibus incidunt nostrum ea eveniet iste quibusdam? Ipsa, molestiae!";
buttonHero.textContent = "Sparisci!";

//Assegno le classi css
classEl(divHero, "hero");
classEl(divHeroWrapper, "hero-wrapper");
classEl(divHeroText, "hero-text");
classEl(buttonHero, "btn");

//Appendo gli elementi partendo dall'interno verso l'esterno (dal div più interno fino al main)
divHeroText.append(titleHero, paragraphHero, buttonHero);
divHeroWrapper.appendChild(divHeroText);
divHero.appendChild(divHeroWrapper);
section.appendChild(divHero);

/** End Esercizio1 **/

/** Start Esercizio2 **/

const container = createEl("div");
classEl(container, "container");

const buttonOnHero = createEl("button");
classEl(buttonOnHero, "btn");
buttonOnHero.textContent = "Riattiva Hero";

container.appendChild(buttonOnHero);

const showAndHideHero = () => {
  if (!divHero.classList.contains("hidden")) {
    classEl(divHero, "hidden");
    section.appendChild(container);

    //Utilizzo il timeout per aspettare la fine dell'animazione e togliere l'hero
    setTimeout(function () {
      divHero.style.display = "none";
    }, 1600);
  } else {
    divHero.classList.remove("hidden");
    divHero.style.display = "flex";
    container.remove();
  }
};

buttonHero.addEventListener("click", () => showAndHideHero());
buttonOnHero.addEventListener("click", () => showAndHideHero());

/** End */

/** Start Esercizio3 **/

const gallery = document.querySelector("#gallery");

const img1 = {
  id: 1,
  imgUrl: "https://picsum.photos/600/300?random=1",
  altText: "Lorem picsum random 1",
};
const img2 = {
  id: 2,
  imgUrl: "https://picsum.photos/600/300?random=2",
  altText: "Lorem picsum random 1",
};
const img3 = {
  id: 3,
  imgUrl: "https://picsum.photos/600/300?random=3",
  altText: "Lorem picsum random 1",
  class: "grey-scale",
};

/**
 *
 *  imageGenerator è una funzione pura in quanto data una variabile, qualunque valore abbia,
 *  produrrà sempre un risultato senza side effect.
 *  y=f(x)
 *
 */

const imageGenerator = (img) => {
  const image = createEl("img");
  image.setAttribute("id", img.id);
  image.setAttribute("src", img.imgUrl);
  if (img.class) image.setAttribute("class", img.class);

  return image;
};

const galleryItem1 = createEl("div");
classEl(galleryItem1, "gallery-item");
galleryItem1.appendChild(imageGenerator(img1));

const galleryItem2 = createEl("div");
classEl(galleryItem2, "gallery-item");
galleryItem2.appendChild(imageGenerator(img2));

const galleryItem3 = createEl("div");
classEl(galleryItem3, "gallery-item");
galleryItem3.appendChild(imageGenerator(img3));

gallery.append(galleryItem1, galleryItem2, galleryItem3);

/** End **/

/** Start Esercizio4 **/

const imageList = [
  {
    id: 6,
    imgUrl: "https://picsum.photos/600/300?random=6",
    altText: "Immagine 1",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/600/300?random=7",
    altText: "Immagine 2",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/600/300?random=8",
    altText: "Immagine 3",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/600/300?random=9",
    altText: "Immagine 4",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/600/300?random=10",
    altText: "Immagine 5",
  },
  {
    id: 11,
    imgUrl: "https://picsum.photos/600/300?random=11",
    altText: "Immagine 6",
  },
  {
    id: 12,
    imgUrl: "https://picsum.photos/600/300?random=12",
    altText: "Immagine 7",
  },
  {
    id: 13,
    imgUrl: "https://picsum.photos/600/300?random=13",
    altText: "Immagine 8",
  },
  {
    id: 14,
    imgUrl: "https://picsum.photos/600/300?random=14",
    altText: "Immagine 9",
  },
  {
    id: 15,
    imgUrl: "https://picsum.photos/600/300?random=15",
    altText: "Immagine 10",
  },
  {
    id: 16,
    imgUrl: "https://picsum.photos/600/300?random=16",
    altText: "Immagine 11",
  },
  {
    id: 17,
    imgUrl: "https://picsum.photos/600/300?random=17",
    altText: "Immagine 12",
  },
];

const galleryMore = document.querySelector("#more");

document.querySelector(".btn-more").addEventListener("click", () => {
  imageList.forEach((el) => {
    const galleryItem = createEl("div");
    classEl(galleryItem, "gallery-item");
    galleryItem.appendChild(imageGenerator(el));
    galleryMore.appendChild(galleryItem);
  });
});

/** End **/
