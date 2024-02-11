import { useEffect, useState } from "react";
import MainLayout from "@/layouts/mainLayout";
import TextInput from "@/components/textInput";
import CharacterCard from "@/components/characterCard";
import styles from "../../styles/NewPlayer.module.scss";
import maleTrainer from "../../../public/trainers/maleTrainer.webp";
import femaleTrainer from "../../../public/trainers/femaleTrainer.webp";
import { GET_HTTP, pokemonColor } from "../api/utils";
import { useRouter } from "next/router";

export default function NewPlayer() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [tempGender, setTempGender] = useState("M");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [startersData, setStartersData] = useState([]);
  const [starter, setStarter] = useState({});

  const router = useRouter();
  const startersName = ["bulbasaur", "charmander", "squirtle"];

  const textInputSettings = {
    classForm: styles.UsernameForm,
    classInput: styles.TextInput,
    classSubmit: styles.Submit,
    placeholder: "Inserisci il tuo nome",
    submitText: "Continua",
    setText: setUsername,
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) router.push("/");
  }, []);

  useEffect(() => {
    setWelcomeMessage(
      tempGender === "M" ? "Benvenuto allenatore!" : "Benvenuta allenatrice!"
    );
  }, [tempGender]);

  useEffect(() => {
    if (gender.length === 0 || username !== "") return;
    async function fetchStarter() {
      startersName.map(async (starterName) => {
        const starterData = await GET_HTTP(`pokemon/${starterName}`);
        setStartersData((prev) => [...prev, starterData]);
      });
    }
    fetchStarter();
  }, [gender]);

  const onHandleGenderChange = () => setGender(tempGender);

  const onHandleConfirmData = () => {
    const userData = {
      username: username,
      gender: gender,
      starter: starter,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    router.push("/tutorial");
  };

  return (
    <MainLayout navActive={false}>
      <div className={styles.NewPlayer}>
        {gender === "" && (
          <div className={styles.Characters}>
            <h3>{welcomeMessage}</h3>
            <div className={styles.Cards}>
              <CharacterCard
                imageUrl={maleTrainer}
                backgroundColor={
                  tempGender === "M"
                    ? "rgba(89, 111, 174, 0.8)"
                    : "rgba(89, 111, 174, 0.2)"
                }
                setData={setTempGender}
                data={"M"}
              />
              <CharacterCard
                imageUrl={femaleTrainer}
                backgroundColor={
                  tempGender === "F"
                    ? "rgba(192, 46, 82, 0.8)"
                    : "rgba(192, 46, 82, 0.2)"
                }
                setData={setTempGender}
                data={"F"}
              />
            </div>
            <button onClick={onHandleGenderChange} className={styles.Submit}>
              Seleziona
            </button>
          </div>
        )}

        {gender !== "" && username === "" && (
          <div className={styles.UsernameSection}>
            <h3>Come ti chiami?</h3>
            <TextInput settings={textInputSettings} />
          </div>
        )}

        {gender !== "" && username !== "" && (
          <div className={styles.Characters}>
            <h3>Scegli il tuo starter</h3>
            <div className={styles.Cards}>
              {Object.keys(starter).length > 0 && (
                <>
                  <CharacterCard
                    imageUrl={starter.sprites.other.showdown.front_default}
                    width={100}
                  />

                  <div>
                    <h4>Pokemon Information:</h4>
                    <p>
                      Name:{" "}
                      {starter.name.charAt(0).toUpperCase() +
                        starter.name.slice(1)}
                    </p>
                    <p>Base Experience: {starter.base_experience}</p>
                    <p>
                      Abilities:{" "}
                      {starter.abilities
                        .map((ability) => ability.ability.name)
                        .join(", ")}
                    </p>
                    <p>
                      Types:{" "}
                      {starter.types.map((type) => type.type.name).join(", ")}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className={styles.Cards}>
              {startersData.map((starter, key) => (
                <CharacterCard
                  key={key}
                  imageUrl={starter.sprites.other.home.front_default}
                  backgroundColor={pokemonColor(starter.types[0].type.name)}
                  setData={setStarter}
                  data={starter}
                  width={110}
                />
              ))}
            </div>
            {Object.keys(starter).length > 0 && (
              <button
                onClick={onHandleConfirmData}
                className={styles.Submit}
                style={{
                  backgroundColor: pokemonColor(starter.types[0].type.name),
                }}
              >
                Conferma
              </button>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
