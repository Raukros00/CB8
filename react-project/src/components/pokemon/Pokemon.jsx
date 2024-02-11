import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { capitalize, pokemonColor } from "@/pages/api/utils";
import styles from "./index.module.scss";

const Pokemon = ({ pokemonData }) => {
  const router = useRouter();
  const [pokemon, setPokemon] = useState({});
  const { types, sprites, name } = pokemon;

  const onHandleClick = () => {
    router.push(`/pokedex/${pokemon.name}`);
  };

  useEffect(() => {
    if (pokemonData.url) {
      fetch(pokemonData.url)
        .then((res) => res.json())
        .then((data) => setPokemon(data));
    } else {
      setPokemon(pokemonData);
    }
  }, []);

  return (
    pokemon.sprites && (
      <div
        className={styles.Pokemon}
        style={{ backgroundColor: pokemonColor(types[0].type.name) }}
        onClick={onHandleClick}
      >
        <img src={sprites.other.home.front_default} alt="" />
        <h3>{capitalize(name)}</h3>
      </div>
    )
  );
};

export default Pokemon;
