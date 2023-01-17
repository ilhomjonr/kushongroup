import styles from "./about.module.css";
import mainStyles from "../../../styles/building.module.css";
import bino from "../../../public/media/tower.png";
import Image from "next/image";

export const BuildingAbout = () => {
  return (
    <section className={styles.about_section}>
      <div className={`box ${styles.about_inner}`}>
        <div className={styles.about_content_side}>
          <div className={styles.about_titles}>
            <h2 className={mainStyles.section_title} style={{ color: "white" }}>
              О компании
            </h2>
            <p className="p">
              Компания-застройщика занимается возведением жилых многоквартирных
              домов с 2020 года. В своей работе застройщик использует
              современные строительные материалы, которые он объединяет с
              международными стандартами и способами строительства, благодаря
              чему каждый проект может похвастаться надежностью и безопасностью.
            </p>
          </div>
          <div className={styles.about_stats_container}>
            <div className={styles.about_stats_div}>
              <p className={styles.about_stats_number}>10+</p>
              <p className="p">Количество зданий</p>
            </div>
            <div className={styles.about_stats_div}>
              <p className={styles.about_stats_number}>2460+</p>
              <p className="p">Квартир переданы населению</p>
            </div>
          </div>
        </div>
        <div className={styles.tower_side}>
          <Image src={bino} alt="bino" className={styles.tower} />
        </div>
      </div>
    </section>
  );
};
