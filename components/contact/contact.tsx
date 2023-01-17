import {
  contactArrow,
  contact_fb,
  contact_ig,
  contact_tg,
  contact_tw,
  telegram,
} from "../../public/icons";
import styles from "./contact.module.css";
import logo from "../../public/media/big_logo.png";
import Image from "next/image";

export const ContactComponent = () => {
  return (
    <section className={styles.contact_section}>
      <div className={`box ${styles.contact_form}`}>
        <div className={styles.contact_form_main}>
          <div className={styles.main_content}>
            <div className={styles.main_content_titles}>
              <p className={styles.contact_main_title}>
                Форма обратной связи {contactArrow}
              </p>
              <p style={{ color: "#5D5D5F" }} className="p">
                Мы искренне благодарны вам за вопросы, отзывы и предложения.
                Ваше сообщение будет направлено в отдел по работе с клиентами, и
                мы обязательно ответим вам в самое ближайшее время.
              </p>
            </div>
            <Image src={logo} alt="logo" />
          </div>
          <form className={styles.main_form}>
            <div className={styles.form_top}>
              <input type="text" placeholder="Имя *" required />
              <input type="text" placeholder="ТЕЛЕФОН *" />
              <input type="text" placeholder="СООБЩЕНИЕ *" required />
            </div>
            <div className={styles.form_bottom}>
              <button type="submit">Отправить сообщение</button>
            </div>
          </form>
        </div>
        <div className={styles.contact_form_aside}>
          <div className={styles.custom_container}>
            <p className={styles.custom_title}>Номер телефона</p>
            <div className={styles.custom_div}>
              <a href={`tel: +998 95 515 27 27`} className="p">
                +998 95 515 27 27
              </a>
              <a href={`tel: +998 95 515 27 27`} className="p">
                +998 95 515 27 27
              </a>
            </div>
          </div>
          <div className={styles.custom_container}>
            <p className={styles.custom_title}>Часы рабты</p>
            <div className={styles.custom_div}>
              <p className="p">Без выходных</p>
              <p className="p">09:00-22:00</p>
            </div>
          </div>
          <div className={styles.custom_container}>
            <p className={styles.custom_title}>Мы в мессенджерах</p>
            <div className={styles.custom_div}>
              <a
                href="#"
                target={"_blank"}
                rel="noreferrer"
                className={styles.big_link}
              >
                {contact_tg}
              </a>
              <a
                href="#"
                target={"_blank"}
                rel="noreferrer"
                className={styles.big_link}
              >
                {contact_ig}
              </a>
              <a
                href="#"
                target={"_blank"}
                rel="noreferrer"
                className={styles.big_link}
              >
                {contact_fb}
              </a>
              <a
                href="#"
                target={"_blank"}
                rel="noreferrer"
                className={styles.big_link}
              >
                {contact_tw}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact_location}>
        <div className={`box ${styles.contact_location_inner}`}>
          <div className={styles.location_content}>
            <p className={styles.contact_main_title}>Где мы находимся</p>
            <div className={styles.location_container}>
              <div className={styles.custom_container}>
                <p className={styles.custom_title}>Kushon Group Holding</p>
                <div className={styles.custom_div}>
                  <p className="p">
                    Кибрайский район, город Салор, ул. Чарогон 246
                  </p>
                </div>
              </div>
              <div className={styles.custom_container}>
                <p className={styles.custom_title}>Kushon Building</p>
                <div className={styles.custom_div}>
                  <p className="p">
                    Кибрайский район, город Салор, ул. Чарогон 246
                  </p>
                </div>
              </div>
              <div className={styles.custom_container}>
                <p className={styles.custom_title}>Rent Best Car</p>
                <div className={styles.custom_div}>
                  <p className="p">
                    Кибрайский район, город Салор, ул. Чарогон 246
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.6576971343!2d69.2093272937321!3d41.282576225585736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1673953699482!5m2!1suz!2s"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
