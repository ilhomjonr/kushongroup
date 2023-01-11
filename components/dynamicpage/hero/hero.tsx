import styles from "./hero.module.css";
import Image from "next/image";
import background from "../../../public/media/blog1.png";

export const DynamicPageHero = () => {
  return (
    <section className={styles.hero}>
      <div className={`dynamic_box ${styles.hero_inner}`}>Hero</div>
      <Image src={background} alt="background" />
    </section>
  );
};
