import Image from "next/image";
import styles from "./index.module.scss";
import MobileNav from "@/components/mobileNav";
import Logo from "../../../public/pokemonLogo.svg";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MainLayout = ({ children, navActive = true, logoActive = true }) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("userData")) router.push("/newPlayer");
  }, []);

  return (
    <div className={styles.MainLayout}>
      {logoActive && <Image className={styles.Logo} src={Logo} alt="Logo" />}

      <div
        className={styles.Children}
        style={logoActive ? { marginTop: "60px" } : { marginTop: 0 }}
      >
        {children}
      </div>

      {navActive && <MobileNav />}
    </div>
  );
};

export default MainLayout;
