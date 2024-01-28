import { useEffect, useState } from "react";
import styles from "../../styles/Auguri.module.css";
import Confetti from "react-confetti";
import InputColor from "@/components/inputColor";

export default function Auguri() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("rgb(149, 191, 255)");

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <div>
      <Confetti width={width} height={height} colors={[color]} />
      <div className={styles.Container}>
        <h1>Auguri di buon non compleanno!</h1>
        <InputColor color={color} setColor={setColor} />
      </div>
    </div>
  );
}
