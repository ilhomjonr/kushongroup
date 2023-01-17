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
import { useContext } from "react";
import { ServicesContext } from "../../../contexts/ServicesContext";
import { useRouter } from "next/router";
import { TranslationsContext } from "../../../contexts/TranslationsContext";
import styled from "styled-components";

export const DynamicPageFooter = () => {
  const router = useRouter();
  const { translations } = useContext(TranslationsContext);
  const { services } = useContext(ServicesContext);

  const SMLink = styled.a`
    width: 28px;
    height: 28px;
    color: var(--white);
    transition: 0.3s;
  `;

  const Logo = styled.div`
    display: inline-block;
    width: 88px;
    height: 88px;
    cursor: pointer;
    object-fit: contain;
  `;

  return (
    <footer className={styles.footer}>
      <div className={`dynamic_box ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          <div className={styles.footer_inner_first}>
            <Link href={"/"}>
              <Logo>
                <Image src={logo} alt="logo" />
              </Logo>
            </Link>
            <p className="p">
              «Darkhan Avenue» — это экстравагантный, современный жилой комплекс
              в Ташкенте, состоящий из двух десятиэтажных домов, с необычайной
              красивой архитектурой.
            </p>
            <nav className={styles.social_media}>
              <SMLink
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.sm_icon}
                aria-label={"telegram"}
              >
                {telegram}
              </SMLink>
              <SMLink
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.sm_icon}
                aria-label={"instagram"}
              >
                {instagram}
              </SMLink>
              <SMLink
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.sm_icon}
                aria-label={"facebook"}
              >
                {facebook}
              </SMLink>
            </nav>
          </div>
          <div className={styles.footer_inner_container}>
            <div className={styles.footer_inner_div}>
              <p className={styles.footer_inner_title}>Наши сервисы</p>
              <nav className={styles.footer_nav}>
                <Link href={"#"}>Rent car</Link>
                {services.map((service: any) => {
                  if (router.locale === "ru") {
                    return (
                      <Link key={service.id} href={`/${service.slug}`}>
                        {service.title.ru}
                      </Link>
                    );
                  } else if (router.locale === "en") {
                    return (
                      <Link key={service.id} href={`/${service.slug}`}>
                        {service.title.en}
                      </Link>
                    );
                  } else if (router.locale === "uz") {
                    return (
                      <Link key={service.id} href={`/${service.slug}`}>
                        {service.title.uz}
                      </Link>
                    );
                  }
                })}
              </nav>
            </div>
            <div className={styles.footer_inner_div}>
              <p className={styles.footer_inner_title}>Компания</p>
              <nav className={styles.footer_nav}>
                <Link href={"/"}>{translations.main}</Link>
                <Link href={"/about"}>{translations.about}</Link>
                <Link href={"/contact"}>{translations.contact}</Link>
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
        <div className={styles.footer_bottom}>
          <p className="p">
            Сайт разработал{" "}
            <span className={styles.ndc}>
              <a href="https://ndc.uz/" target={"_blank"} rel={"noreferrer"}>
                NDC
              </a>
            </span>
          </p>
          <p className="p">
            Дизайн разработал{" "}
            <span className={styles.ndc}>
              <a
                href="https://www.instagram.com/mazmoon_group/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Mazmoon
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
