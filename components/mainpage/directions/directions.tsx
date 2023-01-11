import mainStyles from "../../../styles/home.module.css";
import styles from "./directions.module.css";

export const MainDirections = () => {
  return (
    <section className="section">
      <div className={`box`}>
        <div className={styles.titles_div}>
          <h3 className={mainStyles.section_title}>Наши направления</h3>
          <p className="p">
            до двухэтажного пентхауса в 300 кв.м. К каждой квартире подведены
            все инженерные коммуникации, также будут установлен металлические
            двери, немецкие окна, и современные отопительные системы.
          </p>
        </div>
      </div>
    </section>
  );
};
