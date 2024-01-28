import styles from "../../styles/Draggable.module.css";
import Draggable from "react-draggable";

export default function DraggablePage() {
  return (
    <div className={styles.CardsContainer}>
      <Draggable>
        <div className={styles.Card}>
          <h1>Card 1</h1>
        </div>
      </Draggable>
      <Draggable>
        <div className={styles.Card}>
          <h1>Card 2</h1>
        </div>
      </Draggable>
      <Draggable>
        <div className={styles.Card}>
          <h1>Card 3</h1>
        </div>
      </Draggable>
      <Draggable>
        <div className={styles.Card}>
          <h1>Card 4</h1>
        </div>
      </Draggable>
    </div>
  );
}
