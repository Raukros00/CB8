import Link from "next/link";
import styles from "./index.module.scss";
import { FaHouseChimney, FaGamepad, FaCircleInfo } from "react-icons/fa6";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pokemonColor } from "@/pages/api/utils";
import { useRouter } from "next/router";

const MobileNav = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setColor(pokemonColor(JSON.parse(userData).starter.types[0].type.name));
    }
  }, []);

  return (
    <div className={styles.MobileNav}>
      <div className={styles.Wrapper}>
        <ul className={styles.Navigation}>
          <li>
            <Link
              style={pathName === "/" ? { color: color } : { color: "#000" }}
              href="/"
            >
              <FaHouseChimney />
            </Link>
          </li>
          <li>
            <Link
              style={
                pathName?.includes("/pokedex")
                  ? { color: color }
                  : { color: "#000" }
              }
              href="/pokedex"
            >
              <MdOutlineCatchingPokemon />
            </Link>
          </li>
          <li>
            <Link
              style={
                pathName === "/starterGame" && !router.query.name
                  ? { color: color }
                  : { color: "#000" }
              }
              href="/starterGame"
            >
              <FaGamepad />
            </Link>
          </li>
          <li>
            <Link
              style={
                pathName === "/info" ? { color: color } : { color: "#000" }
              }
              href="/info"
            >
              <FaCircleInfo />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
