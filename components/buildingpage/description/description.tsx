import mainStyles from "../../../styles/building.module.css";
import styles from "./description.module.css";

export const BuildingDescription = () => {
  const statistics = [
    {
      id: 1,
      title: "от 5,600,000 сум",
      desc: "Стоимость 1 м²",
    },
    {
      id: 2,
      title: "Metro Chilonzor",
      desc: "15 min. na avtomobile",
    },
    {
      id: 3,
      title: "от 45 до 118 м2",
      desc: "razmer pomesheniy",
    },
    {
      id: 4,
      title: "Eco Park",
      desc: "15 min. peshkom",
    },
  ];

  return (
    <section className={styles.description_section}>
      <div className={`box ${styles.description_inner}`}>
        <div className={styles.description_texts}>
          <h2 style={{ color: "white" }} className={mainStyles.inner_title}>
            Полное описание недвижимости
          </h2>
          <div className={styles.description_texts_container}>
            <p className="p">
              «Darkhan Avenue» — это экстравагантный, современный жилой комплекс
              в Ташкенте, состоящий из двух десятиэтажных домов, с необычайной
              красивой архитектурой. Комплекс расположен в элитном районе возле
              ТашМИ. В близи дома расположились разу 3 парка, Eko park, Central
              park и парк Ашхобод, а также, известные кафе и рестораны, банки,
              поликлиника, школа и детский сад.
            </p>
            <p className="p">
              Компания предлагает широкий выбор квартир совершенно разной
              планировки, от однокомнатной квартиры в 57 кв.м, до двухэтажного
              пентхауса в 300 кв.м. К каждой квартире подведены все инженерные
              коммуникации, также будут установлен металлические двери, немецкие
              окна, и современные отопительные системы.
            </p>
          </div>
        </div>
        <div className={styles.stats_container}>
          {statistics.map((stats) => {
            return <SingleStat key={stats.id} stats={stats} />;
          })}
        </div>
      </div>
    </section>
  );
};

const SingleStat = ({ stats }: any) => {
  return (
    <div className={styles.singlestat}>
      <p className={styles.singlestat_title}>{stats.title}</p>
      <p className="p">{stats.desc}</p>
    </div>
  );
};
