import mainStyles from "../../../styles/Home.module.css";
import styles from "./complex.module.css";
import Link from "next/link";
import Image from "next/image";
import { arrowUpRight } from "../../../public/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../pages/_app";

export const OurComplex = () => {
  const { locale } = useRouter();

  const [complexes, setComplexes] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/projects")
      .then((res) => {
        setComplexes(res.data.data.data);
      })
      .catch((err) => console.log(err));
  }, [locale]);

  return (
    <section className="section">
      <div className={`box`}>
        <h2 className={mainStyles.section_title}>Наши комлексы</h2>
        <div className={styles.complexes_container}>
          {complexes.map((complex: any) => {
            return (
              <Complex key={complex.id} complex={complex} locale={locale} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Complex = ({ complex, locale }: any) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (locale == "en") {
      setTitle(complex.title.en);
    } else if (locale == "ru") {
      setTitle(complex.title.ru);
    }
  }, []);

  return (
    <Link href={`building/${complex.slug}`} className={styles.complex}>
      hello
      <div className={styles.complex_inner}>
        <div className={styles.complex_top}>
          Yakkasaroy
          <p>Adres</p>
          <p>от 45 до 118 м²</p>
          <p>от Price м²</p>
        </div>
        <div className={styles.complex_bottom}>
          <p className="p">JK</p>
          <p className={styles.complex_title}>
            {title} {arrowUpRight}
          </p>
        </div>
      </div>
      <Image
        src={complex.images[0].lg_img}
        alt={complex.title}
        priority={true}
        width={100}
        height={100}
      />
    </Link>
  );
};
