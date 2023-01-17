import styles from "./header.module.css";
import logo from "../../../public/media/white-logo.png";
import logoBlack from "../../../public/media/black_logo.png";
import Link from "next/link";
import Image from "next/image";
import { chevronDown } from "../../../public/icons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";

type Props = {
  translations: any;
};

export const Header = ({ translations }: Props) => {
  const router = useRouter();
  const header = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const scrollMagic = () => {
    let top = window.pageYOffset;

    if (top >= 5) {
      header.current?.classList.add(styles.background);
      setIsScrolled(true);
    } else {
      header.current?.classList.remove(styles.background);
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollMagic);
    return () => {
      window.removeEventListener("scroll", scrollMagic);
    };
  }, [scrollMagic]);

  useEffect(() => {
    setIsMenu(false);
  }, [router.locale]);

  return (
    <header ref={header} className={styles.header}>
      <div className={`box ${styles.header_inner}`}>
        <div className={styles.lang_container}>
          <div
            className={styles.langChanger}
            onClick={() => setIsDropDown(!isDropDown)}
          >
            <p className={styles.currentLang}>{router.locale?.toUpperCase()}</p>{" "}
            <span className={isDropDown ? styles.rotate : styles.notrotate}>
              {chevronDown}
            </span>
            <nav
              className={
                isDropDown
                  ? `${styles.dropdown} ${styles.show}`
                  : styles.dropdown
              }
            >
              {router.locales?.map((singleLocale) => {
                return (
                  <Link
                    key={singleLocale}
                    href={router.asPath}
                    locale={singleLocale}
                    role={"button"}
                  >
                    {singleLocale.toUpperCase()}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <Link href={"/"}>
          {isScrolled ? (
            <Image src={logoBlack} alt="logo" className="logo" />
          ) : (
            <Image src={logo} alt="logo" className="logo" />
          )}
        </Link>
        <nav className={styles.header_nav}>
          <Link href={"/"} className="p">
            {translations.main}
          </Link>
          <Link href={"/about"} className="p">
            {translations.about}
          </Link>
          <Link href={"/contact"} className="p">
            {translations.contact}
          </Link>
        </nav>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};
