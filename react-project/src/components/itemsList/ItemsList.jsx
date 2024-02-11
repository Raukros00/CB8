import styles from "./index.module.scss";
import Image from "next/image";

const ItemsList = ({ items, handleClick }) => {
  return (
    <div className={styles.FoodList}>
      {items.length > 0 &&
        items.map((items, keys) => (
          <button
            className={styles.ActionBtn}
            onClick={() => handleClick(items.sprites.default)}
            key={keys}
          >
            <Image className={styles.item} src={items.sprites.default} width={50} height={50} />
          </button>
        ))}
    </div>
  );
};

export default ItemsList;
