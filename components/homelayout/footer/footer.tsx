import styles from "./footer.module.css";
import logo from "../../../public/media/white-logo.png";
import Link from "next/link";
import {
  facebook,
  instagram,
  location,
  phone,
  telegram,
} from "../../../public/icons";
import Image from "next/image";

export const Footer = () => {
  const services = [
    {
      id: 1,
      title: "Charog'on house",
      slug: "charogon-house",
    },
    {
      id: 2,
      title: "Ремонт дома",
      slug: "remont-doma",
    },
    {
      id: 3,
      title: "Дизайн интерьера",
      slug: "dizayn-interyera",
    },
    {
      id: 4,
      title: "Производство",
      slug: "proizvodtsvo",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`box ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          <div className={styles.footer_inner_first}>
            <Link href={"/"}>
              <Image src={logo} alt="logo" className="logo" />
            </Link>
            <p className="p">
              «Darkhan Avenue» — это экстравагантный, современный жилой комплекс
              в Ташкенте, состоящий из двух десятиэтажных домов, с необычайной
              красивой архитектурой.
            </p>
            <nav className={styles.social_media}>
              <a
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.sm_icon}
                aria-label={"telegram"}
              >
                {telegram}
              </a>
              <a
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.sm_icon}
                aria-label={"instagram"}
              >
                {instagram}
              </a>
              <a
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.sm_icon}
                aria-label={"facebook"}
              >
                {facebook}
              </a>
            </nav>
          </div>
          <div className={styles.footer_inner_container}>
            <div className={styles.footer_inner_div}>
              <p className={styles.footer_inner_title}>Наши сервисы</p>
              <nav className={styles.footer_nav}>
                <Link href={"#"}>Rent car</Link>
                {services.map((service) => {
                  return (
                    <Link key={service.id} href={`/${service.slug}`}>
                      {service.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className={styles.footer_inner_div}>
              <p className={styles.footer_inner_title}>Компания</p>
              <nav className={styles.footer_nav}>
                <Link href={"/"}>Главная</Link>
                <Link href={"/about"}>O нас</Link>
                <Link href={"/contact"}>Контакты</Link>
              </nav>
            </div>
            <div className={styles.footer_inner_div}>
              <p className={styles.footer_inner_title}>Контакт</p>
              <nav className={styles.footer_nav}>
                <div className={styles.extra_inner_div}>
                  {phone}
                  <nav className={styles.extra_inner_nav}>
                    <a href="tel: +998 99 123 45 67">+998 99 123 45 67</a>
                    <a href="tel: +998 99 123 45 67">+998 99 123 45 67</a>
                  </nav>
                </div>
                <div className={styles.extra_inner_div}>
                  {location}
                  <nav className={styles.extra_inner_nav}>
                    <p>Кибрайский район, город Салор, ул. Чарогон 246</p>
                  </nav>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <p className="p">
          Сайт разработал{" "}
          <span className={styles.ndc}>
            <a href="https://ndc.uz/" target={"_blank"} rel={"noreferrer"}>
              NDC
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
