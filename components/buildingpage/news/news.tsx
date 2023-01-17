import Link from "next/link";
import mainStyles from "../../../styles/building.module.css";
import styles from "./news.module.css";
import jk1 from "../../../public/media/jk1.png";
import jk2 from "../../../public/media/jk2.png";
import jk3 from "../../../public/media/jk3.png";
import Image from "next/image";

type Props = {
  title: string | any;
};

export const News = ({ title }: Props) => {
  const newsArray = [
    {
      id: 1,
      image: jk1,
      date: "11.09.2022",
      title: "Старт продаж Kushon TJM",
    },
    {
      id: 2,
      image: jk2,
      date: "11.09.2022",
      title: "Старт продаж Kushon TJM",
    },
    {
      id: 3,
      image: jk3,
      date: "11.09.2022",
      title: "Старт продаж Kushon TJM",
    },
  ];

  return (
    <section className="section">
      <div className={`box`}>
        <h2 className={mainStyles.section_title}>{title}</h2>
        <div className={styles.news_container}>
          {newsArray.map((news) => {
            return <NewsDiv key={news.id} news={news} />;
          })}
        </div>
      </div>
    </section>
  );
};

const NewsDiv = ({ news }: any) => {
  return (
    <Link href={"/building/news/dynamic"} className={styles.news}>
      <div className={styles.news_image}>
        <Image src={news.image} alt={news.title} priority={true} />
      </div>
      <div className={styles.news_content}>
        <p className={styles.news_date}>{news.date}</p>
        <p className={styles.news_title}>{news.title}</p>
      </div>
    </Link>
  );
};
