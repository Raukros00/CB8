import styles from "./index.module.scss";
import TypeTags from "../typeTags";

const StatsList = ({ stats }) => {
  return (
    <ul className={styles.Stats}>
      {Object.entries(stats).map(([key, value]) => (
        <li className={styles.Stat} key={key}>
          <span>{key}: </span>{" "}
          {key === "Types" ? <TypeTags types={value} /> : value}
        </li>
      ))}
    </ul>
  );
};

export default StatsList;
