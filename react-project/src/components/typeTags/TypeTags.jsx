import { pokemonColor } from "@/pages/api/utils";
import styles from "./index.module.scss";

const TypeTags = ({ types, onHandleClick = "" }) => {
  return (
    <div className={styles.Types}>
      {types.map((type, key) => (
        <div
          key={key}
          className={styles.Tag}
          style={{
            backgroundColor: pokemonColor(
              type?.type?.name || type?.name || type
            ),
          }}
          onClick={
            onHandleClick
              ? () => onHandleClick(type?.type?.name || type?.name || type)
              : null
          }
        >
          <img
            className={styles.Icon}
            key={key}
            src={`/pokemonTypes/${type?.type?.name || type?.name || type}.svg`}
            alt={type?.type?.name || type?.name || type}
          />
          <p>{type?.type?.name || type?.name || type}</p>
        </div>
      ))}
    </div>
  );
};

export default TypeTags;
