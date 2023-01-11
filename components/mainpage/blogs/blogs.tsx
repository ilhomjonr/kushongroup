import mainStyles from "../../../styles/home.module.css";
import styles from "./blogs.module.css";
import blog1 from "../../../public/media/blog1.png";
import blog2 from "../../../public/media/blog2.png";
import blog3 from "../../../public/media/blog3.png";
import blog4 from "../../../public/media/blog4.png";
import blog5 from "../../../public/media/about_img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string | any;
};

export const MainBlogs = ({ title }: Props) => {
  const testBlogs = [
    {
      id: 1,
      title:
        "Строительство, аренда автомобилей и многое другое в блоге, принадлежащем кушон холдинг",
      image: blog1,
      date: "05.01.2023",
      slug: "birinchi-blog",
    },
    {
      id: 2,
      title:
        "Строительство, аренда автомобилей и многое другое в блоге, принадлежащем кушон холдинг",
      image: blog2,
      date: "27.09.2022",
      slug: "ikkinchi-blog",
    },
    {
      id: 3,
      title:
        "Строительство, аренда автомобилей и многое другое в блоге, принадлежащем кушон холдинг",
      image: blog3,
      date: "08.03.2018",
      slug: "uchinchi-blog",
    },
    {
      id: 4,
      title:
        "Строительство, аренда автомобилей и многое другое в блоге, принадлежащем кушон холдинг",
      image: blog4,
      date: "19.08.2018",
      slug: "to'rtinchi-blog",
    },
    {
      id: 5,
      title:
        "Строительство, аренда автомобилей и многое другое в блоге, принадлежащем кушон холдинг",
      image: blog5,
      date: "11.12.2020",
      slug: "beshinchi-blog",
    },
  ];

  return (
    <section className="section">
      <div className={`box ${styles.blogs_inner}`}>
        <div className={styles.top_div}>
          <h3 className={mainStyles.section_title}>{title}</h3>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className={styles.blogs_swiper}
        >
          {testBlogs.map((blog) => {
            return (
              <SwiperSlide key={blog.id}>
                <Link href={`/blog/${blog.slug}`} className={styles.blog}>
                  <div className={styles.blog_content}>
                    <p className={styles.blog_date}>{blog.date}</p>
                    <p className={styles.blog_title}>{blog.title}</p>
                  </div>
                  <div className={styles.blog_img}>
                    <Image src={blog.image} alt={blog.title} priority />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
