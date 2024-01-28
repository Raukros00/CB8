import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className={styles.Container}>
      <div>
        <Link className={styles.Page} href={"/auguri"}>
          Happy birthday!
        </Link>
      </div>
      <div className={styles.Divider}>|</div>
      <div>
        <Link className={styles.Page} href={"/draggablePage"}>
          Draggable
        </Link>
      </div>
    </div>
  );
}
