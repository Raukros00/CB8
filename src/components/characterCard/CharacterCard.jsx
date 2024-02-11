import { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const CharacterCard = ({ imageUrl, backgroundColor, setData, data, width }) => {
  const onHandleClick = () => {
    setData(data);
  };

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <div className={styles.BackCard} style={{ background: backgroundColor }}>
        <div className={styles.Char}>
          <Image
            src={imageUrl}
            alt="CharacterCard"
            width={width}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
