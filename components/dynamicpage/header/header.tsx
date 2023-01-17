import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/TranslationsContext";
import logo from "../../../public/media/gold-logo.png";
import styles from "./header.module.css";

export const DynamicPageHeader = () => {
  const { translations } = useContext(TranslationsContext);
  return (
    <header className={styles.header}>
      <div className={`dynamic_box ${styles.header_inner}`}>
        <div className={styles.small}>
          <div className={styles.logo_div}>
            <Image src={logo} alt="logo" className="logo" />
          </div>
          <Link href={"/"} className={`backholding ${styles.holding_text}`}>
            {translations.backholding}
          </Link>
        </div>
        <nav className={styles.header_nav}>
          <p className="p" role={"button"}>
            {translations.main}
          </p>
          <p className="p" role={"button"}>
            Сервисы
          </p>
          <p className="p" role={"button"}>
            {translations.about}
          </p>
          <p className="p" role={"button"}>
            {translations.contact}
          </p>
        </nav>
        <button className={styles.menu_btn}>Menu</button>
      </div>
    </header>
  );
};
