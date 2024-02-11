import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pokemonColor } from "../api/utils";
import Link from "next/link";
import styles from "../../styles/Pokedex.module.scss";
import MainLayout from "@/layouts/mainLayout";
import TypeTags from "@/components/typeTags";
import {
  FaHeartPulse,
  FaBolt,
  FaShield,
  FaPersonRunning,
} from "react-icons/fa6";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [collectionText, setCollectionText] = useState("");
  const [actionCatch, setActionCatch] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);

        if (localStorage.getItem("userCollection") === null) {
          setCollectionText("Catch it!");
          setActionCatch(`/starterGame/${data.name}`);
          return;
        }

        const userCollection = JSON.parse(
          localStorage.getItem("userCollection")
        );

        const isPokemonAlreadyAdded = userCollection.some(
          (pokemon) => pokemon.name === data.name
        );
        if (isPokemonAlreadyAdded) {
          setCollectionText("Already in collection");
          setActionCatch("/");
        } else {
          setCollectionText("Catch it!");
          setActionCatch(`/starterGame/${data.name}`);
        }
      });
  }, [router.query.name]);

  return (
    <>
      <MainLayout logoActive={false}>
        {pokemonData.sprites ? (
          <div
            style={{
              backgroundColor: pokemonColor(pokemonData.types[0].type.name),
            }}
            className={styles.Pokedex}
          >
            <h1 className={styles.Name}>{pokemonData.name}</h1>
            <div className={styles.PokemonInfo}>
              <img
                className={styles.image}
                src={pokemonData.sprites.other.showdown.front_default}
                alt=""
              />

              <div className={styles.BackPokemon}>
                <div className={styles.HeadStats}>
                  <h4 className={styles.About}>About</h4>
                  <div className={styles.Types}>
                    <TypeTags types={pokemonData.types} />
                  </div>
                </div>

                <ul className={styles.Stats}>
                  <li className={styles.stat}>
                    <FaHeartPulse className={styles.HP__icon} />
                    <p className={styles.Stat__name}>
                      {pokemonData.stats[0].stat.name}
                    </p>
                    <p className={styles.Stat__value}>
                      {pokemonData.stats[0].base_stat}
                    </p>
                  </li>
                  <li className={styles.stat}>
                    <FaBolt className={styles.Attack__icon} />
                    <p className={styles.Stat__name}>
                      {pokemonData.stats[1].stat.name}
                    </p>
                    <p className={styles.Stat__value}>
                      {pokemonData.stats[1].base_stat}
                    </p>
                  </li>
                  <li className={styles.stat}>
                    <FaShield className={styles.Shield__icon} />
                    <p className={styles.Stat__name}>
                      {pokemonData.stats[2].stat.name}
                    </p>
                    <p className={styles.Stat__value}>
                      {pokemonData.stats[2].base_stat}
                    </p>
                  </li>
                  <li className={styles.stat}>
                    <FaPersonRunning className={styles.Speed__icon} />
                    <p className={styles.Stat__name}>
                      {pokemonData.stats[5].stat.name}
                    </p>
                    <p className={styles.Stat__value}>
                      {pokemonData.stats[5].base_stat}
                    </p>
                  </li>
                </ul>

                <div className={styles.CatchGuide}>
                  <h5 className={styles.CatchTitle}>
                    Where to catch {pokemonData.name}
                  </h5>
                  <p className={styles.Guide}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus eos dolorem modi labore tenetur placeat, vero eius
                    inventore ex illo?
                  </p>
                </div>

                <Link href={actionCatch} className={styles.AddToCollectionBtn}>
                  {collectionText}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className={styles.notFound}>
            {router.query.name + " non trovato"}
          </p>
        )}
      </MainLayout>
    </>
  );
}
