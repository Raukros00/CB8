import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET_HTTP } from "../api/utils";
import { FaSearch } from "react-icons/fa";
import MainLayout from "@/layouts/mainLayout";
import PokemonList from "@/components/pokemonList";
import TextInput from "@/components/textInput";
import styles from "../../styles/Pokedex.module.scss";
import Carousel from "@/components/carousel";
import TypeTags from "@/components/typeTags";

export default function Pokedex() {
  const router = useRouter();
  const [classicPokemonList, setClassicPokemonList] = useState([]);
  const [newPokemonList, setNewPokemonList] = useState([]);
  const [typesList, setTypesList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startFetch = async () => {
      const classicPokemonList = await GET_HTTP("pokemon/?limit=9");
      setClassicPokemonList(classicPokemonList.results);

      const newPokemonList = await GET_HTTP("pokemon/?limit=27&offset=160");
      setNewPokemonList(newPokemonList.results);

      const typesList = await GET_HTTP("type");
      setTypesList(typesList.results);
    };

    startFetch();
  }, []);

  const onHandleSearch = (pokemonName) => {
    router.push(`/pokedex/${pokemonName.toLowerCase()}`);
  };

  const onHandleFilter = async (type) => {
    setFilteredPokemonList([]);
    setIsLoading(true);

    const filteredPokemon = await GET_HTTP(`type/${type}`);
    const pokemonList = [];

    for (let i = 0; i < 30; i++) {
      const pokemonTemp = await GET_HTTP(
        `pokemon/${filteredPokemon.pokemon[i].pokemon.name}`
      );
      pokemonList.push(pokemonTemp);
    }
    setIsLoading(false);
    setFilteredPokemonList(pokemonList);
  };

  const textInputSettings = {
    classForm: styles.SearchBox,
    classInput: styles.SearchInput,
    classSubmit: styles.SearchButton,
    placeholder: "Search for a Pokémon",
    submitText: <FaSearch />,
    setText: onHandleSearch,
  };

  console.log(filteredPokemonList);
  return (
    <MainLayout>
      <div className={styles.Container}>
        <TextInput settings={textInputSettings} />

        <Carousel>
          {typesList.length > 0 && (
            <TypeTags types={typesList} onHandleClick={onHandleFilter} />
          )}
        </Carousel>

        {isLoading && <div class="pokemonLoader"></div>}

        {filteredPokemonList.length > 0 && (
          <PokemonList
            title="Filtered pokémon"
            pokemonList={filteredPokemonList}
          />
        )}

        <PokemonList
          title="The timeless classic"
          pokemonList={classicPokemonList}
        />
        <PokemonList title="Some other pokémon" pokemonList={newPokemonList} />
        <div className={styles.FixNav}></div>
      </div>
    </MainLayout>
  );
}
