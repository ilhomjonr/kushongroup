import { useState } from "react";
import { IMaskInput } from "react-imask";
import styles from "./form.module.css";
import girl from "../../../public/media/form_girl.png";
import Image from "next/image";
import { telegram } from "../../../public/icons";

export const Form = () => {
  return (
    <section className="section">
      <div style={{ backgroundColor: "var(--green)" }}>
        <div className={`box ${styles.form_inner}`}>
          <div className={styles.info_side}>
            <Image className={styles.form_img} src={girl} alt="form image" />
            <div className={styles.info_container}>
              <div className={styles.info_top}>
                <div className={styles.info_top_titles}>
                  <p className={styles.tipa_h2}>Висола Жахонгирова</p>
                  <p className="p">Менеджер по продажам</p>
                </div>
                <a
                  href="#"
                  target={"_blank"}
                  rel="noreferrer"
                  className={styles.tg_link}
                >
                  Написать в Telegram
                  {telegram}
                </a>
              </div>
              <div className={styles.info_bottom}>
                <a
                  href="mailto: info@kushon.com"
                  target={"_blank"}
                  rel="noreferrer"
                  className={styles.p}
                >
                  info@kushon.com
                </a>
                <a
                  href="tel: +000 00 000 00 00"
                  target={"_blank"}
                  rel="noreferrer"
                  className={styles.p}
                >
                  +998 91 234 56 78
                </a>
              </div>
            </div>
          </div>
          <div className={styles.form_side}>
            <div className={styles.form_titles}>
              <h2 className="h2">Связатся с нами</h2>
              <p className="p">
                Обращайтесь в офис продаж и получите подробную консультацию по
                вопросам.
              </p>
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="Имя" required />
              <IMaskInput mask={"+000 (00) 000 00 00"} unmask={true} />
              <button type="submit">Отправка</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
