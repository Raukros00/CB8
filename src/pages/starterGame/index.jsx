import { useEffect, useState } from "react";
import { GET_HTTP } from "../api/utils";
import { useRouter } from "next/router";
import styles from "@/styles/StarterGame.module.scss";
import Image from "next/image";
import MainLayout from "@/layouts/mainLayout";
import backGame from "../../../public/game/backGame.gif";
import ItemsList from "@/components/itemsList";

export default function StarterGame() {
  const [pokemon, setPokemon] = useState({});
  const [food, setFood] = useState([]);
  const [foodToEat, setFoodToEat] = useState("");
  const [isJumping, setIsJumping] = useState(false);

  const rotuer = useRouter();

  useEffect(() => {
    const fetchStarter = async () => {
      const foodArray = [];

      foodArray.push(await GET_HTTP("item/128"));
      foodArray.push(await GET_HTTP("item/129"));
      foodArray.push(await GET_HTTP("item/130"));
      setFood(foodArray);
    };

    if (rotuer.query.name) return;

    const userData = JSON.parse(localStorage.getItem("userData"));
    setPokemon(userData.starter);
    fetchStarter();
  }, []);

  useEffect(() => {
    const fetchStarter = async () => {
      const pokemon = await GET_HTTP(`pokemon/${rotuer.query.name}`);
      setPokemon(pokemon);
    };
    fetchStarter();
  }, [rotuer.query.params]);

  const handleJump = (foodImg) => {
    setIsJumping(true);
    setFoodToEat(foodImg);
    setTimeout(() => {
      setIsJumping(false);
      setFoodToEat("");
    }, 1000);
  };

  const handleCatching = () => {
    setIsCatching(true);
  };

  return (
    <MainLayout logoActive={false}>
      <div className={styles.Game}>
        <div className={styles.BackgroundGame}>
          <Image src={backGame} />
          {Object.keys(pokemon).length > 0 && (
            <div className={styles.Starter}>
              <Image
                className={isJumping ? styles.Jumping : ""}
                src={pokemon.sprites.other.showdown.front_default}
                width={150}
                height={200}
              />
              {foodToEat && (
                <Image
                  className={foodToEat ? styles.Eat : ""}
                  src={foodToEat}
                  width={50}
                  height={50}
                />
              )}
            </div>
          )}

          <ItemsList items={food} handleClick={handleJump} />
        </div>
      </div>
    </MainLayout>
  );
}
