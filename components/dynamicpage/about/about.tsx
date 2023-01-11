import styles from "./about.module.css";

export const DynamicPageAbout = () => {
  return (
    <section>
      <div className={`dynamic_box ${styles.about_inner}`}>About</div>
    </section>
  );
};
