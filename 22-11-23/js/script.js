const imagesWrapperEl = document.querySelector(".images-wrapper");

const PICSUM = "https://picsum.photos/v2/list";

const onImagesGet = async (END_POINT) => {
  const res = await fetch(END_POINT);
  const data = await res.json();
  return data;
};

const createCard = (image) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h4");

  cardEl.className = "card";

  imgEl.src = image.download_url;
  imgEl.alt = "Photo by " + image.author;

  titleEl.textContent = image.author;

  cardEl.append(imgEl, titleEl);

  return cardEl;
};

/** Esercizio1 **/
onImagesGet(PICSUM).then((imageList) => {
  imageList.map((img) => console.log(img.download_url));
});

/** Esercizio2 **/

const staticObject = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

imagesWrapperEl.appendChild(createCard(staticObject));

/** Esercizio Avanzato */
onImagesGet(PICSUM).then((imageList) => {
  imageList.map((img) => imagesWrapperEl.appendChild(createCard(img)));
});
