import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { HomeLayout } from "../../components/homelayout/homelayout";
import { IntroSection } from "../../components/intro/intro";
import { MainBlogs } from "../../components/mainpage/blogs/blogs";
import styles from "../../styles/home.module.css";
import blogImage from "../../public/media/blog1.png";

export default function BlogInnerPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Kushon | {slug}</title>
      </Head>
      <HomeLayout>
        <IntroSection
          color={"#001935"}
          title={"Наши Блоги"}
          page={
            "Строительство, аренда автомобилей и многое другое в блоге, принадлежащем кушон холдинг"
          }
          parent={"Блог"}
        />
        <section className={styles.section}>
          <div className={`miniBox ${styles.section_inner}`}>
            <p className={styles.blog_title}>
              Строительство, аренда автомобилей и многое другое в блоге,
              принадлежащем кушон холдинг
            </p>
            <div className={styles.blog_img}>
              <Image src={blogImage} alt="blog image" />
            </div>
            <div className={styles.blog_texts}>
              <p className="p">
                Строительство — создание (возведение) зданий и сооружений (в том
                числе на месте сносимых объектов капитального строительства).
              </p>
              <p className="p">
                Процесс строительства включает в себя все организационные,
                изыскательские, проектные, строительно-монтажные и
                пусконаладочные работы, связанные с созданием, изменением или
                сносом объекта, а также взаимодействие с компетентными органами
                по поводу производства таких работ.
              </p>
              <p className="p">
                Результатом строительства считается возведённое здание
                (сооружение) с внутренней отделкой, действующими
                инженерно-технологическими системами и полным комплектом
                документации, предусмотренным законом.
              </p>
              <p className="p">
                Здания — объемные строительные системы, имеющие надземную и
                (или) подземную части, включающие в себя помещения, сети
                инженерно-технического обеспечения и системы
                инженерно-технического обеспечения и предназначенные для
                проживания и (или) деятельности людей, размещения производства,
                хранения продукции или содержания животных.
              </p>
              <p className="p">
                Hаземную, надземную и (или) подземную части, состоящие из
                несущих, а в отдельных случаях и ограждающих строительных
                конструкций и предназначенные для выполнения производственных
                процессов различного вида, хранения продукции, временного
                пребывания людей, перемещения людей и грузов
              </p>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
        <MainBlogs title={"Полезные Блоги"} />
      </HomeLayout>
    </>
  );
}
