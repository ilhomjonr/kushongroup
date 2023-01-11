import { plus } from "../../../public/icons";
import mainStyles from "../../../styles/home.module.css";
import styles from "./aboutstats.module.css";

export const AboutStats = () => {
  return (
    <section className={styles.stats_section}>
      <div className={`box ${styles.stats_inner}`}>
        <div>
          <h3 className={mainStyles.section_title}>Познакомьтесь с нами</h3>
          <div className={styles.about_texts_div}>
            <p className="p">
              Строительство — создание (возведение) зданий и сооружений (в том
              числе на месте сносимых объектов капитального строительства)
              Процесс строительства включает в себя все организационные,
              изыскательские, проектные, строительно-монтажные и пусконаладочные
              работы, связанные с созданием, изменением или сносом объекта, а
              также взаимодействие с компетентными органами по поводу
              производства таких работ.
            </p>
            <p className="p">
              Результатом строительства считается возведённое здание
              (сооружение) с внутренней отделкой, действующими
              инженерно-технологическими системами и полным комплектом
              документации, предусмотренным законом.
            </p>
            <p className="p">
              Здания — объемные строительные системы, имеющие надземную и (или)
              подземную части, включающие в себя помещения, сети
              инженерно-технического обеспечения и системы
              инженерно-технического обеспечения и предназначенные для
              проживания и (или) деятельности людей, размещения производства,
              хранения продукции или содержания животных.
            </p>
          </div>
        </div>
        <div className={styles.stats_container}>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>10</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              Количество зданий
            </p>
          </div>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>32</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              Дома переданы населению
            </p>
          </div>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>24</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              Дома переданы населению
            </p>
          </div>
          <div className={styles.stats_div}>
            <div className={styles.stats_number}>
              <p>2460</p>
              {plus}
            </div>
            <p style={{ color: "#5D5D5F" }} className="p">
              Дома переданы населению
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
