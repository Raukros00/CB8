const BASE_URL = "https://pokeapi.co/api/v2/";

const GET_HTTP = async (endPoint, params = "") => {
  let url = "";

  if (params !== "") url = `${BASE_URL}${endPoint}/?`;
  else url = `${BASE_URL}${endPoint}`;

  Object.entries(params).map(([key, value]) => {
    url += `${key}=${value}&`;
  });

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const pokemonColor = (type) => {
  switch (type) {
    case "normal":
      return "#a8a878";
    case "fire":
      return "#ff7b00";
    case "water":
      return "#00c8ff";
    case "grass":
      return "#4fc85b";
    case "electric":
      return "#ffd700";
    case "ice":
      return "#98d8d8";
    case "fighting":
      return "#c03028";
    case "poison":
      return "#a040a0";
    case "ground":
      return "#e0c068";
    case "flying":
      return "#a890f0";
    case "psychic":
      return "#ff66b2";
    case "bug":
      return "#a8b820";
    case "rock":
      return "#b08f5e";
    case "ghost":
      return "#705898";
    case "dark":
      return "#705848";
    case "steel":
      return "#b8b8d0";
    case "dragon":
      return "#7038f8";
    case "fairy":
      return "#ee99ac";
    default:
      return "#808080";
  }
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { GET_HTTP, pokemonColor, capitalize };
