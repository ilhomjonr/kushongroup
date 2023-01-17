import Image from "next/image";
import mainStyles from "../../../styles/home.module.css";
import styles from "./projects.module.css";
import projectImg from "../../../public/media/blog4.png";

export const AboutProjects = () => {
  return (
    <section className="section">
      <div className={`box ${styles.projects_inner}`}>
        <h3 className={mainStyles.section_title}>
          Нашe проект Kushon Building
        </h3>
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
  return (
    <div className={styles.project}>
      <p className={styles.project_title}>Кушон Жилой Комплекс</p>
      <Image src={projectImg} alt="project img" />
    </div>
  );
};
