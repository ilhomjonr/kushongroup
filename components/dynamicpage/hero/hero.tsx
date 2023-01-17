import styles from "./hero.module.css";
import Image from "next/image";
import background from "../../../public/media/blog1.png";

type Props = {
  service: any;
};

export const DynamicPageHero = ({ service }: Props) => {
  return (
    <section className={styles.hero}>
      <div className={`dynamic_box ${styles.hero_inner}`}>Hero</div>
      <Image
        src={service.lg_img}
        alt="background"
        priority
        width={1000}
        height={1000}
        quality={100}
      />
    </section>
  );
};
