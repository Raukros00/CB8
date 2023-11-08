/** START ESERCIZIO 1 **/

const sum = (numOne, numTwo, numThree) => numOne + numTwo + numThree;

const sub = (numOne, numTwo, numThree) => numOne - numTwo - numThree;

const mul = (numOne, numTwo, numThree) => numOne * numTwo * numThree;

const div = (numOne, numTwo, numThree) => {
  if (numTwo === 0 || numThree === 0) return NaN;
  return numOne / numTwo / numThree;
};

const calculator = (op, numOne, numTwo, numThree) => {
  const result = op(numOne, numTwo, numThree);

  if (isNaN(result)) return "La divisione per 0 non è possibile!";
  else return result;
};

let temp;
let flag = false;
let results = "";

let numbers = [];

for (let i = 0; i < 3; i++) {
  while (!flag) {
    temp = parseInt(prompt(`Inserisci il valore n.${i + 1}:`));
    if (!isNaN(temp)) flag = true;
    else alert("Devi inserire un numero!");
  }
  numbers.push(temp);
  flag = false;
}

results += "SUM: " + calculator(sum, ...numbers);
results += "\nSUB: " + calculator(sub, ...numbers);
results += "\nMUL: " + calculator(mul, ...numbers);
results += "\nDIV: " + calculator(div, ...numbers);

console.log(results);

/** END ESERCIZIO 1 **/

/** START ESERCIZIO 2 **/

const cart = [
  {
    id: 1,
    name: "Iphone 15",
    prezzo: "€2000",
    urlImg: "https://placehold.co/600x400",
    colori: ["nero", "grigio", "bianco"],
    description: "lorem ipsum",
  },
  {
    id: 2,
    name: "Xiaomi 12",
    prezzo: "1500",
    urlImg: "https://placehold.co/600x400",
    colori: ["nero", "grigio", "bianco", "rosso", "oro"],
    description: "lorem ipsum",
  },
  {
    id: 3,
    name: "Samsung S22",
    prezzo: "€1900",
    urlImg: "https://placehold.co/600x400",
    colori: ["nero", "grigio", "oro", "argento"],
    description: "lorem ipsum",
  },
];

console.log("====> FOREACH");

cart.forEach((product) => {
  console.log(`${product.name} è disponibile nei seguenti colori:`);
  product.colori.forEach((color, index) => console.log(`${index}.${color}`));
});

console.log("====> MAP");

const cartLog = cart.map((product) => {
  return (
    `${product.name} è disponibile nei seguenti colori: ` +
    product.colori.map((color) => `${color}`) +
    `\n`
  );
});

//Trasformo il risultato del map in string perché map restituisce un nuovo array
console.log(cartLog.toString());

/**
 *
 *  DOMANDA TEORICA:
 *
 *  FOREACH: Scorre gli elementi presenti nell'array ed esegue la callback sui singoli, il suo
 *  valore di ritorno è sempre undefined.
 *
 *  MAP: Scorre anche esso gli elementi presenti nell'array eseguendone la callback, ma il suo
 *  valore di ritorno è un nuovo array contenente i valori restituiti dalla callback.
 *
 */

/** END ESERCIZIO 2 **/

/** START ESERCIZIO 3 **/

const numbersOne = [4, 2, 9, 6, 1, 5, 3, 7, 8, 0];
const numbersTwo = [7, 1, 9, 0, 4, 5, 3, 2, 8, 6];

const transformAndFilter = (numbersOne, numbersTwo) => {
  const transformedArrayOne = numbersOne.map((number) => number * 2);
  const transformerArrayTwo = numbersTwo.map((number) => number + 5);

  const transformedAndFilteredOne = transformedArrayOne.filter(
    (number) => number > 10
  );
  const transformedAndFilteredTwo = transformerArrayTwo.filter(
    (number) => number % 2 === 0
  );

  return [transformedAndFilteredOne, transformedAndFilteredTwo];
};

//Faccio il destructuring dell'array restituito
const [transformedAndFilteredOne, transformedAndFilteredTwo] =
  transformAndFilter(numbersOne, numbersTwo);

console.log(
  "Array1:",
  transformedAndFilteredOne,
  "\nArray2:",
  transformedAndFilteredTwo
);

/** END ESERCIZIO 3 **/
