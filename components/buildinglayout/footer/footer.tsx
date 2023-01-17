import Image from "next/image";
import { facebook, instagram, telegram } from "../../../public/icons";
import styles from "./footer.module.css";
import logo from "../../../public/media/white-logo.png";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  translations: any;
  isContactPage: boolean;
};

export const Footer = ({ translations, isContactPage }: Props) => {
  const SMLink = styled.a`
    width: 28px;
    height: 28px;
    color: var(--white);
    transition: 0.3s;
  `;

  return (
    <footer
      style={{ marginTop: isContactPage ? "0px" : "" }}
      className={styles.footer}
    >
      <div className={`box ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          <div className={styles.footer_top_logo}>
            <Link href={"/building"}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </Link>
            <div className={styles.footer_top_col}>
              <p className="p">Связаться с нами:</p>
              <a href={`tel: +998 99 121 28 21`} aria-label="telephone">
                +998 99 121 28 21
              </a>
            </div>
          </div>
          <a
            className={styles.join_tg}
            href={"#"}
            aria-label="telegram"
            target="_blank"
            rel="noreferrer"
          >
            {telegram} Написать в телеграм
          </a>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_nav}>
            <div className={styles.footer_nav_div}>
              <p className={styles.footer_nav_title}>Нашa компания</p>
              <nav className={styles.footer_nav_container}>
                <p className="p">
                  Группа компаний KUSHON © 2020 ООО KUSHON GROUP Development.
                  Информация на сайте предоставлена в ознакомительных целях. Для
                  получения более точной информации обратитесь к менеджерам
                  компании
                </p>
              </nav>
            </div>
            <div className={styles.footer_nav_div}>
              <p className={styles.footer_nav_title}>Жилые комплексы</p>
              <nav className={styles.footer_nav_container}>
                <Link href="#" className="p">
                  Kushon TJM
                </Link>
                <Link href="#" className="p">
                  Связаться с нами:
                </Link>
                <Link href="#" className="p">
                  Kushon TJM
                </Link>
              </nav>
            </div>
            <div className={styles.footer_nav_div}>
              <p className={styles.footer_nav_title}>Kompaniya</p>
              <nav className={styles.footer_nav_container}>
                <Link href={"/building"} className="p">
                  {translations.main}
                </Link>
                <Link href={"/building/about"} className="p">
                  {translations.about}
                </Link>
                <Link href={"/building/contact"} className="p">
                  {translations.contact}
                </Link>
              </nav>
            </div>
            <div className={styles.footer_nav_div}>
              <p className={styles.footer_nav_title}>Адрес:</p>
              <nav className={styles.footer_nav_container}>
                <p className="p">
                  Кибрайский район, город Салор, ул. Чарогон 246
                </p>
                <div className={styles.footer_top_col}>
                  <p className="p">Связаться с нами:</p>
                  <a href={`tel: +998 99 121 28 21`} aria-label="telephone">
                    +998 99 121 28 21
                  </a>
                </div>
                <div className={styles.footer_nav_div_inner}>
                  <p className={styles.footer_nav_title_inner}>Соц. сети:</p>
                  <nav className={styles.social_media}>
                    <SMLink
                      href={"#"}
                      aria-label="telegram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {telegram}
                    </SMLink>
                    <SMLink
                      href={"#"}
                      aria-label="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {instagram}
                    </SMLink>
                    <SMLink
                      href={"#"}
                      aria-label="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {facebook}
                    </SMLink>
                  </nav>
                </div>
              </nav>
            </div>
          </div>
          <p className="p">
            Сайт разработал:{" "}
            <a
              href="https://ndc.uz/"
              aria-label="ndc"
              target={"_blank"}
              rel="noreferrer"
              className={styles.ndc}
            >
              NDC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
