import mainStyles from "../../../styles/Building.module.css";
import styles from "./nearestplaces.module.css";
import { useRef } from "react";
import { arrowRight } from "../../../public/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import jk1 from "../../../public/media/jk1.png";
import jk2 from "../../../public/media/jk2.png";
import jk3 from "../../../public/media/jk3.png";

export const NearestPlaces = () => {
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  const partners = [
    {
      id: 1,
      image: jk1,
      place: "Метро станция",
    },
    {
      id: 2,
      image: jk2,
      place: "Метро станция",
    },
    {
      id: 3,
      image: jk3,
      place: "Метро станция",
    },
    {
      id: 4,
      image: jk1,
      place: "Метро станция",
    },
    {
      id: 5,
      image: jk2,
      place: "Метро станция",
    },
    {
      id: 6,
      image: jk3,
      place: "Метро станция",
    },
    {
      id: 7,
      image: jk1,
      place: "Метро станция",
    },
    {
      id: 8,
      image: jk2,
      place: "Метро станция",
    },
  ];

  return (
    <section className={styles.nearestplaces_section}>
      <div className={`box`}>
        <div className={styles.partners_top}>
          <h2 className={mainStyles.inner_title}>Места по близости</h2>
          <div className={styles.swiper_buttons}>
            <button
              ref={prevBtn}
              aria-label="prev"
              className={styles.swiper_btn}
              style={{ transform: "rotate(180deg)" }}
            >
              {arrowRight}
            </button>
            <span></span>
            <button
              ref={nextBtn}
              aria-label="next"
              className={styles.swiper_btn}
            >
              {arrowRight}
            </button>
          </div>
        </div>
        <Swiper
          className={styles.partners_swiper}
          modules={[Autoplay, Navigation]}
          loop={true}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1.6,
            },
            580: {
              slidesPerView: 2.2,
            },
            880: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={24}
          speed={1600}
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current,
          }}
          autoplay={{ delay: 2000 }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevBtn.current;
            swiper.params.navigation.nextEl = nextBtn.current;
          }}
        >
          {partners.map((partner) => {
            return (
              <SwiperSlide key={partner.id} className={styles.partners_slide}>
                <div className={styles.partners_slide_img}>
                  <Image src={partner.image} alt="partner" />
                </div>
                <p className="p">{partner.place}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
