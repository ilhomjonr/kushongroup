import styles from "./hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Parallax, Navigation } from "swiper";
import jk1 from "../../../public/media/jk1.png";
import jk2 from "../../../public/media/jk2.png";
import jk3 from "../../../public/media/jk3.png";
import Image from "next/image";
import { useRef } from "react";
import { chevron } from "../../../public/icons";

export const BuildingHero = () => {
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  const slides = [
    { id: 1, title: "Kushon Building", desc: "Slide desc", image: jk3 },
    { id: 2, title: "Kushon Rent", desc: "Slide desc", image: jk2 },
    { id: 3, title: "Kushon Holding", desc: "Slide desc", image: jk1 },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.hero_inner}>
        <Swiper
          modules={[Autoplay, Parallax, Navigation]}
          className={styles.hero_swiper}
          parallax={true}
          autoplay={{ delay: 2000 }}
          loop={true}
          speed={1600}
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevBtn.current;
            swiper.params.navigation.nextEl = nextBtn.current;
          }}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id} className={styles.slide}>
                <div className={`box ${styles.slide_inner}`}>
                  <p
                    className={styles.swiper_title}
                    data-swiper-parallax="-400"
                  >
                    {slide.title}
                  </p>
                  <p className="p" data-swiper-parallax="-200">
                    {slide.desc} {slide.id}
                  </p>
                </div>
                <Image src={slide.image} alt={slide.title} priority={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.absolute_btn_container}>
          <div className={`box ${styles.buttons_container}`}>
            <div className={styles.swiper_buttons}>
              <button
                style={{ transform: "rotate(180deg)" }}
                ref={prevBtn}
                className={styles.swiper_btn}
              >
                {chevron}
              </button>
              <button ref={nextBtn} className={styles.swiper_btn}>
                {chevron}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
