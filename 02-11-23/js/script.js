/** ESERCIZIO 1 **/

function getTemperatureStatus(temperature) {
  if (temperature >= 25) return "calda";
  else if (temperature >= 15 && temperature < 25) return "mite";
  else if (temperature < 15) return "fredda";
}

const temperature = parseInt(prompt("Inserisci una temperatura"));

if (!isNaN(temperature))
  console.log("La temperatura è", getTemperatureStatus(temperature));
else console.log("Il valore inserito non è un numero!");

/** END ESERSCIZIO 1 **/

/** ESERCIZIO 2 **/

const me = {
  name: "Alessandro",
  surname: "Dominici",
  age: 23,
  city: "Palermo",
  contacts: {
    email: "alessandrodomi00@gmail.com",
    telephone: "+393803841206",
  },
  toString: function () {
    return `Ciao, mi chiamo ${this.name} ${this.surname}, ho ${this.age} e sono di ${this.city}, la mia email è ${this.contacts.email} e il mio telefono è ${this.contacts.telephone}`;
  },
};

console.log(me.toString());

/** END ESERCIZIO 2 */

/** ESERCIZIO 3 */

const favorites = [];

function addFavorite(favorite) {
  favorites.push(favorite);
}

function printFavorites() {
  for (let favorite of favorites) console.log(`-${favorite}`);
}

function deleteFavorite(favorite) {
  const indexToDelete = favorites.indexOf(favorite);

  if (indexToDelete !== -1) {
    favorites.splice(indexToDelete, 1);
    console.log("Elemento eliminato!");
  } else {
    console.log("L'elemento non è stato trovato!");
  }
}

addFavorite("John Mayer");
addFavorite("Jimi Hendrix");
addFavorite("David Gilmour");

printFavorites();

deleteFavorite("Jimi Hendrix");

/** END ESERCIZIO 3 */
