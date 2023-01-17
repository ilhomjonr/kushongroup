import Link from "next/link";
import styles from "./hero.module.css";
import "animate.css";
import { useContext } from "react";
import { ServicesContext } from "../../../contexts/ServicesContext";
import { useRouter } from "next/router";
import { TranslationsContext } from "../../../contexts/TranslationsContext";

export const MainHero = () => {
  const { locale } = useRouter();
  const { translations } = useContext(TranslationsContext);
  const { services } = useContext(ServicesContext);

  return (
    <section className={styles.hero}>
      <div className={styles.hero_inner}>
        <h1
          className={`${styles.hero_title} animate__animated animate__fadeInUp animate__delay-1s`}
        >
          Kushon Group Holding
        </h1>
        <nav className={styles.hero_services}>
          <Link href={`/building`} className={styles.service}>
            {translations.building}
          </Link>
          {services.map((service: any) => {
            if (locale === "ru") {
              return (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className={styles.service}
                >
                  {service.title.ru}
                </Link>
              );
            } else if (locale === "en") {
              return (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className={styles.service}
                >
                  {service.title.en}
                </Link>
              );
            } else if (locale === "uz") {
              return (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className={styles.service}
                >
                  {service.title.uz}
                </Link>
              );
            }
          })}
        </nav>
      </div>
    </section>
  );
};
