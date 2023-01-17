import mainStyles from "../../../styles/dynamic.module.css";
import styles from "./contact.module.css";

export const DynamicPageContacts = () => {
  return (
    <section className={styles.contact_section}>
      <div className={`dynamic_box ${styles.contact_container}`}>
        <div className={styles.contact_inner}>
          <h2 className={mainStyles.section_title}>Свяжется с нами</h2>
        </div>
      </div>
    </section>
  );
};
