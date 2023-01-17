import { plus } from "../../../public/icons";
import styles from "./stats.module.css";

export const MainStatistics = () => {
  return (
    <section className={styles.stats_section}>
      <div className={`box ${styles.stats_inner}`}>
        <div className={styles.stats_div}>
          <div className={styles.stats_top}>
            <p className={styles.stats_number}>10</p>
            {plus}
          </div>
          <p className="p">Количество зданий</p>
        </div>
        <div className={styles.stats_div}>
          <div className={styles.stats_top}>
            <p className={styles.stats_number}>2460</p>
            {plus}
          </div>
          <p className="p">Количество зданий</p>
        </div>
        <div className={styles.stats_div}>
          <div className={styles.stats_top}>
            <p className={styles.stats_number}>32</p>
            {plus}
          </div>
          <p className="p">Количество зданий</p>
        </div>
        <div className={styles.stats_div}>
          <div className={styles.stats_top}>
            <p className={styles.stats_number}>24</p>
            {plus}
          </div>
          <p className="p">Количество зданий</p>
        </div>
      </div>
    </section>
  );
};
