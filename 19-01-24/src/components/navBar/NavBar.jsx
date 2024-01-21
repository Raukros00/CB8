import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Wrapper}>
        <div className={styles.Logo}>
          <img src="https://img.logoipsum.com/247.svg" alt="" />
        </div>
        <ul className={styles.Pages}>
          <Link to="/">Home</Link>
          <Link to="privacy">Privacy</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
