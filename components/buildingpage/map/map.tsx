import mainStyles from "../../../styles/building.module.css";
import styles from "./map.module.css";
import map_bg from "../../../public/media/map_bg.png";
import Image from "next/image";

export const BuildingMap = () => {
  return (
    <section className={styles.map_section}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382597.95168228913!2d68.97843537984355!3d41.48159164141518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aee4b82c794c5b%3A0x6ee5eda02a7bf558!2sQibray%20tumani%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1671795642178!5m2!1suz!2s"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.absolute_map_container}>
        <div className={`box ${styles.map_box}`}>
          <div className={styles.map_content}>
            <div className={styles.map_titles_div}>
              <h2 className={mainStyles.inner_title}>Kомплекс картa</h2>
              <div className={styles.map_inner_container}>
                <div className={styles.map_inner_div}>
                  <p className={styles.map_mini_title}>Адрес</p>
                  <p className="p">
                    улица Осиё 1 жилой комплекс «Новомосковская» Ташкент, 100000
                  </p>
                </div>
                <div className={styles.map_inner_div}>
                  <p className={styles.map_mini_title}>
                    телефон администратора
                  </p>
                  <p className="p">+998 99 123 45 67</p>
                </div>
              </div>
            </div>
            <button>Посетить проект</button>
            <Image src={map_bg} alt="background" className={styles.map_bg} />
          </div>
        </div>
      </div>
    </section>
  );
};
