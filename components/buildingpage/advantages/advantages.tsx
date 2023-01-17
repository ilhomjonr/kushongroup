import { location } from "../../../public/icons";
import mainStyles from "../../../styles/Building.module.css";
import styles from "./advantages.module.css";

export const BuildingAdvantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Видеонаблюдение",
      icon: location,
    },
    {
      id: 2,
      title: "Интернет",
      icon: location,
    },
    {
      id: 3,
      title: "Парковка",
      icon: location,
    },
    {
      id: 4,
      title: "Детская площадка",
      icon: location,
    },
  ];

  return (
    <section className={styles.advantages_section}>
      <div className={`box ${styles.advantages_inner}`}>
        <div className={styles.advantages_titles_div}>
          <h2 className={mainStyles.inner_title}>Особенности проекта</h2>
          <p className="p">
            Компания предлагает широкий выбор квартир совершенно разной
            планировки, от однокомнатной квартиры в 57 кв.м, до двухэтажного
            пентхауса в 300 кв.м. К каждой квартире подведены все инженерные
            коммуникации, также будут установлен металлические двери, немецкие
            окна, и современные отопительные системы.
          </p>
        </div>
        <div className={styles.advantages_container}>
          {advantages.map((advantage) => {
            return <SingleAdvantage key={advantage.id} advantage={advantage} />;
          })}
        </div>
      </div>
    </section>
  );
};

const SingleAdvantage = ({ advantage }: any) => {
  return (
    <div className={styles.single_advantage}>
      {advantage.icon} <p>{advantage.title}</p>
    </div>
  );
};
