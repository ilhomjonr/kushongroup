import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/TranslationsContext";
import { plus } from "../../../public/icons";
import mainStyles from "../../../styles/home.module.css";
import styles from "./aboutstats.module.css";

export const AboutStats = () => {
  const { translations } = useContext(TranslationsContext);
  return (
    <section className={styles.stats_section}>
      <div className={`box ${styles.stats_inner}`}>
        <div>
          <h3 className={mainStyles.section_title}>{translations.knowus}</h3>
          <div className={styles.about_texts_div}>
            <p className="p">{translations.knowusp}</p>
            <p className="p">{translations.knowusp2}</p>
            <p className="p">{translations.knowusp3}</p>
          </div>
        </div>
        <div className={styles.stats_container}>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>10</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              {translations.buildingnu}
            </p>
          </div>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>32</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              {translations.buildingsold}
            </p>
          </div>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>24</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              {translations.buildingsold}
            </p>
          </div>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>2460</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              {translations.buildingsold}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
