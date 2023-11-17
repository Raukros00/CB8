const createEl = (el) => document.createElement(el);
const addClass = (el, className) => el.classList.add(className);

const createPopUp = (title, text) => {
  const popUpArea = createEl("div");
  const popUp = createEl("div");
  const titlePopup = createEl("h2");
  const textPopup = createEl("p");
  const buttonArea = createEl("div");
  const btnConfirm = createEl("a");
  const btnCancel = createEl("a");

  addClass(popUpArea, "popup-area");
  addClass(popUp, "popup");
  addClass(titlePopup, "popup-title");
  addClass(textPopup, "popup-text");
  addClass(buttonArea, "button-area");
  addClass(btnConfirm, "btn");
  addClass(btnConfirm, "confirm");
  addClass(btnCancel, "btn");
  addClass(btnCancel, "cancel");

  titlePopup.textContent = title;
  textPopup.textContent = text;

  btnConfirm.textContent = "Conferma";
  btnCancel.textContent = "Annulla";

  buttonArea.append(btnConfirm, btnCancel);
  popUp.append(titlePopup, textPopup, buttonArea);
  popUpArea.appendChild(popUp);

  return popUpArea;
};

setTimeout(() => {
  const popup = createPopUp(
    "Conferma la tua età",
    "Ciao utente per accedere a questa pagina devi essere maggiorenne, confermi di aver raggiunto la maggior età?"
  );

  document.body.prepend(popup);

  const confirmBtn = document.querySelector(".confirm");
  const cancelBtn = document.querySelector(".cancel");

  confirmBtn.addEventListener("click", () => popup.remove());
  cancelBtn.addEventListener(
    "click",
    () => (window.location.href = "https://google.com")
  );
}, 3500);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const filteredProducts = data.products.filter(
      (product) => product.price < 50
    );
    console.log(filteredProducts);
  });
