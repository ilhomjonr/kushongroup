import Link from "next/link";
import styles from "./intro.module.css";

type Props = {
  color: string;
  title: string | any;
  page: string | any;
  parent?: string | any;
};

export const IntroSection = ({ color, title, page, parent }: Props) => {
  return (
    <section style={{ backgroundColor: color }} className={styles.intro}>
      <div className={`box ${styles.intro_inner}`}>
        <h1 className={styles.page_title}>{title}</h1>
        <LocationBar page={page} parent={parent} />
      </div>
    </section>
  );
};

type LocationBarProps = {
  page: string | any;
  parent?: string | any;
};

const LocationBar = ({ page, parent }: LocationBarProps) => {
  return (
    <nav className={styles.locationbar}>
      <Link href={"/"} className={styles.locationbar_node}>
        Главная
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
