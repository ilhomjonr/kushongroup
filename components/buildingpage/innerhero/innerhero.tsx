import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import styles from "./innerhero.module.css";
import jk1 from "../../../public/media/jk1.png";
import jk2 from "../../../public/media/jk2.png";
import jk3 from "../../../public/media/jk3.png";
import Image from "next/image";
import { useRef } from "react";
import { arrowRight } from "../../../public/icons";

export const InnerHero = () => {
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  const sliders = [
    { id: 1, image: jk1 },
    { id: 2, image: jk2 },
    { id: 3, image: jk3 },
  ];

  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, Navigation]}
        className={styles.hero_swiper}
        loop={true}
        speed={1600}
        autoplay={{ delay: 2000 }}
        navigation={{
          prevEl: prevBtn.current,
          nextEl: nextBtn.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevBtn.current;
          swiper.params.navigation.nextEl = nextBtn.current;
        }}
      >
        {sliders.map((slider) => {
          return (
            <SwiperSlide className={styles.hero_slider} key={slider.id}>
              <Image src={slider.image} alt="hero image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.hero_swiper_absolute}>
        <div className={`box ${styles.hero_swiper_buttons_container}`}>
          <button ref={prevBtn} style={{ transform: "rotate(180deg)" }}>
            {arrowRight}
          </button>
          <button ref={nextBtn}>{arrowRight}</button>
        </div>
      </div>
    </section>
  );
};
