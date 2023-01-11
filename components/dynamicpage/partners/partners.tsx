import Image from "next/image";
import styles from "./partners.module.css";
import rasm from "../../../public/media/blog1.png";

export const DynamicPagePartners = () => {
  return (
    <section>
      <div className={`dynamic_box ${styles.partners_inner}`}>
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
      </div>
    </section>
  );
};

const Partner = () => {
  return (
    <div className={styles.partner}>
      <div className={styles.partner_img_box}>
        <Image src={rasm} alt="partner" />
      </div>
      <p className={styles.partner_text}>
        O&apos;ZBEKISTON RESPUBLIKASI QONUNCHILIK MA&apos;LUMOTLARI MILLIY
        BAZASI
      </p>
    </div>
  );
};
