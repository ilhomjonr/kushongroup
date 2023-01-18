import { useContext } from "react";
import { IMaskInput } from "react-imask";
import { TranslationsContext } from "../../../contexts/TranslationsContext";
import mainStyles from "../../../styles/home.module.css";
import styles from "./map.module.css";

export const MainMap = () => {
  const { translations } = useContext(TranslationsContext);
  return (
    <section className={`section`}>
      <div className={`box ${styles.map_inner}`}>
        <div className={styles.map_content}>
          <div className={styles.map_titles}>
            <h3
              className={`${mainStyles.section_title} ${styles.section_title}`}
            >
              {translations.contacthe}
            </h3>
            <p className={`p`}>{translations.contactdesc}</p>
          </div>
          <form className={styles.form}>
            <input
              type="text"
              placeholder={translations.contactname}
              required
            />
            <div>
              <span>+998</span>
              <IMaskInput mask={"(00) 000 00 00"} />
            </div>
            <input type="text" placeholder={translations.contactmessage} />
            <button type="submit">{translations.contactsubmit}</button>
          </form>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.6576971343!2d69.2093272937321!3d41.282576225585736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1673332634425!5m2!1suz!2s"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
