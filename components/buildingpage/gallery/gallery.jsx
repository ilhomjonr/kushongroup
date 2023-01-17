import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { FreeMode, Navigation, Thumbs } from "swiper";
import mainStyles from "../../../styles/building.module.css";
import styles from "./gallery.module.css";
import jk1 from "../../../public/media/jk1.png";
import jk2 from "../../../public/media/jk2.png";
import jk3 from "../../../public/media/jk3.png";
import Image from "next/image";
import { useRouter } from "next/router";

export const BuildingGallery = ({ title }) => {
  const { pathname } = useRouter();
  const [isInner, setIsInner] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (pathname === "/building/about") {
      setIsInner(false);
    }
  }, [pathname]);

  return (
    <section className={isInner ? styles.gallery_section : styles.gallery}>
      {title && (
        <div className={`box ${styles.title_div}`}>
          <h2 className={mainStyles.section_title}>{title}</h2>
        </div>
      )}
      <Swiper
        slidesPerView={"auto"}
        breakpoints={{
          320: { slidesPerView: 1 },
          1200: { slidesPerView: 1.2 },
        }}
        spaceBetween={24}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        loop={true}
        className={styles.gallery_swiper}
        speed={1200}
      >
        <SwiperSlide className={styles.gallery_swiper_slide}>
          <Image src={jk1} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className={styles.gallery_swiper_slide}>
          <Image src={jk2} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className={styles.gallery_swiper_slide}>
          <Image src={jk3} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className={styles.gallery_swiper_slide}>
          <Image src={jk1} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className={styles.gallery_swiper_slide}>
          <Image src={jk2} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className={styles.gallery_swiper_slide}>
          <Image src={jk3} alt="swiper" />
        </SwiperSlide>
      </Swiper>
      <div className={`box`}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={16}
          slidesPerView={"auto"}
          breakpoints={{
            320: { slidesPerView: 3 },
            580: { slidesPerView: 4 },
            880: { slidesPerView: 6 },
            1200: { slidesPerView: 8 },
          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.gallery_thumbs_swiper}
          loop={true}
          speed={600}
        >
          <SwiperSlide className={styles.gallery_thumbs_slide}>
            <Image src={jk1} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide className={styles.gallery_thumbs_slide}>
            <Image src={jk2} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide className={styles.gallery_thumbs_slide}>
            <Image src={jk3} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide className={styles.gallery_thumbs_slide}>
            <Image src={jk1} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide className={styles.gallery_thumbs_slide}>
            <Image src={jk2} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide className={styles.gallery_thumbs_slide}>
            <Image src={jk3} alt="swiper" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
