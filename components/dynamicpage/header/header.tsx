import Image from "next/image";
import { facebook, instagram, telegram } from "../../../public/icons";
import logo from "../../../public/media/gold-logo.png";
import styles from "./header.module.css";

export const DynamicPageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`dynamic_box ${styles.header_inner}`}>
        <div className={styles.s}>
          <div className={styles.logo_div}>
            <Image src={logo} alt="logo" className="logo" />
          </div>
          <p></p>
        </div>
        <nav className={styles.header_nav}>
          <p className="p" role={"button"}>
            Главная
          </p>
          <p className="p" role={"button"}>
            Сервисы
          </p>
          <p className="p" role={"button"}>
            O холдинге
          </p>
          <p className="p" role={"button"}>
            Контакты
          </p>
        </nav>
      </div>
    </header>
  );
};
