import Link from "next/link";
import { useContext } from "react";
import { TranslationsContext } from "../../contexts/TranslationsContext";
import styles from "./intro.module.css";

type Props = {
  color: string;
  title: string | any;
  page: string | any;
  parent?: string | any;
  mainpage: { url: string };
};

export const IntroSection = ({
  color,
  title,
  page,
  parent,
  mainpage,
}: Props) => {
  return (
    <section style={{ backgroundColor: color }} className={styles.intro}>
      <div className={`box ${styles.intro_inner}`}>
        <h1 className={styles.page_title}>{title}</h1>
        <LocationBar page={page} parent={parent} mainpage={mainpage} />
      </div>
    </section>
  );
};

type LocationBarProps = {
  page: string | any;
  parent?: string | any;
  mainpage: any;
};

const LocationBar = ({ page, parent, mainpage }: LocationBarProps) => {
  const { translations } = useContext(TranslationsContext);

  return (
    <nav className={styles.locationbar}>
      <Link href={mainpage.url} className={styles.locationbar_node}>
        {translations.main}
      </Link>
      <span className={styles.locationbar_node}>/</span>
      {parent && (
        <>
          <p className={styles.locationbar_node}>{parent}</p>
          <span className={styles.locationbar_node}>/</span>
        </>
      )}
      <p className={`${styles.locationbar_node} ${styles.last_node}`}>{page}</p>
    </nav>
  );
};
