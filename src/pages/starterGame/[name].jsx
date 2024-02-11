import { useEffect, useState } from "react";
import { GET_HTTP, capitalize } from "../api/utils";
import { useRouter } from "next/router";
import styles from "@/styles/StarterGame.module.scss";
import Image from "next/image";
import MainLayout from "@/layouts/mainLayout";
import backGame from "../../../public/game/backGame.gif";
import ItemsList from "@/components/itemsList";
import Popup from "@/components/popup";

export default function PokemonCapture() {
  const [items, setItems] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [pokeball, setPokeball] = useState("");
  const [itemAction, setItemAction] = useState("");
  const [pokemonAction, setPokemonAction] = useState("");
  const [popUpVisible, setPopUpVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchStarter = async () => {
      const itemsArray = [];

      itemsArray.push(await GET_HTTP("item/1"));
      itemsArray.push(await GET_HTTP("item/2"));
      itemsArray.push(await GET_HTTP("item/3"));

      setItems(itemsArray);
    };

    fetchStarter();
  }, []);

  useEffect(() => {
    const fetchStarter = async () => {
      const pokemon = await GET_HTTP(`pokemon/${router.query.name}`);
      setPokemon(pokemon);
    };
    fetchStarter();
  }, [router.query.params]);

  const handleCatching = (pokeball) => {
    setPokeball(pokeball);
    setItemAction(styles.Throw);
    setTimeout(() => {
      setPokemonAction(styles.Catching);
    }, 800);

    setTimeout(() => {
      setItemAction(styles.Shake);
    }, 1500);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 2);

      if (randomNumber === 1) {
        setItemAction("");
        setPopUpVisible(true);
      } else {
        setPokeball("");
        setItemAction("");
        setPokemonAction("");
      }
    }, 2800);
  };

  const handleConfirmPopUp = () => {
    const userCollection =
      JSON.parse(localStorage.getItem("userCollection")) || [];

    userCollection.push(pokemon);
    localStorage.setItem("userCollection", JSON.stringify(userCollection));
    router.push("/");
  };

  return (
    <MainLayout logoActive={false}>
      {popUpVisible && (
        <Popup
          text={`You caught ${capitalize(pokemon.name)}!`}
          confirmText={"Add to collection"}
          handleConfirm={handleConfirmPopUp}
        />
      )}
      <div className={styles.Game}>
        <div className={styles.BackgroundGame}>
          <Image src={backGame} />
          {Object.keys(pokemon).length > 0 && (
            <div className={styles.Starter}>
              <Image
                className={pokemonAction}
                src={pokemon.sprites.other.showdown.front_default}
                width={150}
                height={800}
              />
              {pokeball && (
                <Image
                  className={itemAction}
                  src={pokeball}
                  width={50}
                  height={50}
                />
              )}
            </div>
          )}

          {items.length > 0 && (
            <ItemsList items={items} handleClick={handleCatching} />
          )}
        </div>
      </div>
    </MainLayout>
  );
}
