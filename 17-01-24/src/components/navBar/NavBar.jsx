import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderNav}>
        <img src="https://img.logoipsum.com/292.svg" alt="" />
        <ul className={styles.Navigation}>
          <li>
            <Link className={styles.LinkNav} to={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.LinkNav} to={`/about`}>
              About us
            </Link>
          </li>
          <li>
            <Link className={styles.LinkNav} to={`/contacts`}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
