import Pokemon from "../pokemon";
import styles from "./index.module.scss";

const Carousel = ({ children }) => {
  return <div className={styles.PokemonCarousel}>{children}</div>;
};

export default Carousel;
