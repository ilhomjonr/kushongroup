import Image from "next/image";
import mainStyles from "../../../styles/home.module.css";
import styles from "./projects.module.css";
import projectImg from "../../../public/media/blog4.png";
import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/TranslationsContext";

export const AboutProjects = () => {
  const { translations } = useContext(TranslationsContext);
  return (
    <section className="section">
      <div className={`box ${styles.projects_inner}`}>
        <h3 className={mainStyles.section_title}>{translations.ourprojects}</h3>
        <div className={styles.projects_container}>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const { translations } = useContext(TranslationsContext);

  return (
    <div className={styles.project}>
      <p className={styles.project_title}>{translations.prokom}</p>
      <Image src={projectImg} alt="project img" />
    </div>
  );
};
