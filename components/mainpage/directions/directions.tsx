import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/TranslationsContext";
import mainStyles from "../../../styles/home.module.css";
import styles from "./directions.module.css";

export const MainDirections = () => {
  const { translations } = useContext(TranslationsContext);
  return (
    <section className="section">
      <div className={`box`}>
        <div className={styles.titles_div}>
          <h3 className={mainStyles.section_title}>
            {translations.destination}
          </h3>
          <p className="p">{translations.destinationdesc}</p>
        </div>
      </div>
    </section>
  );
};
