import { useState } from "react";
import styles from "./index.module.css";

const InputColor = ({ color, setColor }) => {
  const [text, setText] = useState("");

  const onHandleInput = (e) => setText(e.target.value.toLowerCase());

  const onChangeColor = (e) => {
    e.preventDefault();
    var s = new Option().style;
    s.color = text;

    if (s.color !== text.toLowerCase()) return;

    setColor(text);
  };

  return (
    <form onSubmit={onChangeColor}>
      <input
        className={styles.InputColor}
        onChange={onHandleInput}
        type="text"
        value={text}
        placeholder="Colore dei coriandoli"
      />
      <input className={styles.InputSubmit} type="submit" value="Cambia" />
    </form>
  );
};

export default InputColor;
