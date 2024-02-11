import MainLayout from "@/layouts/mainLayout";
import styles from "../../styles/Info.module.scss";
import { useEffect, useState } from "react";
export default function Info() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUsername(userData.username);
  }, []);

  return (
    <MainLayout>
      <div className={styles.Container}>
        <h1>Info of my project</h1>
        <h3>Hi {username}</h3>
        <p>
          My name is Alessandro, this web app was developed in react and sass
          with next.js, the data is provided by PokeApi API, the project was
          done in one week for the 8th coding bootcamp of Edgemony.
        </p>
      </div>
    </MainLayout>
  );
}
