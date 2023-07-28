import { useRef } from "react";
import style from "./AppInterface.module.scss";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Achieve from "./Achieve/Achieve";
import download from "../../assets/download.svg";
import like from "../../assets/like.svg";
import star from "../../assets/star.svg";

const AppInterface = () => {
  const array = [1, 2, 3, 4, 5];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.head}>
          <h3>Checkout Our App Interface Look</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </span>
        </div>
        <div className={style.sliderWrapper}>
          <div
            ref={navigationPrevRef}
            className={style.prev + " " + style.navButton}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_52_717)">
                <path
                  d="M22.5584 25L32.8708 35.3125L29.925 38.2584L16.6667 25L29.925 11.7417L32.8708 14.6875L22.5584 25Z"
                  fill="#FFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_52_717">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            ref={navigationNextRef}
            className={style.next + " " + style.navButton}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="remix-icons/line/system/arrow-left-s-line"
                clip-path="url(#clip0_1003_582)"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M27.4416 25L17.1292 14.6875L20.075 11.7416L33.3333 25L20.075 38.2583L17.1292 35.3125L27.4416 25Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1003_582">
                  <rect
                    width="50"
                    height="50"
                    fill="white"
                    transform="translate(50 50) rotate(-180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={style.slider}>
            <Swiper
              initialSlide={5}
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectCoverflow,
              ]}
              slidesPerView={4}
              className="swiper_container"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              // breakpoints={{
              //   0: {
              //     slidesPerView: 1,
              //     spaceBetween: 5,
              //   },
              //   350: {
              //     slidesPerView: 2,
              //     spaceBetween: 5,
              //   },
              //   420: {
              //     slidesPerView: 2,
              //     spaceBetween: 5,
              //   },

              //   500: {
              //     slidesPerView: 3,
              //     spaceBetween: 5,
              //   },

              //   768: {
              //     slidesPerView: 5,
              //     spaceBetween: 5,
              //   },
              //   1024: {
              //     slidesPerView: 3,
              //     spaceBetween: 0,
              //   },
              // }}
              // install Swiper modules

              spaceBetween={0}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              // scrollbar={{ draggable: true }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {array.map((_, i) => (
                <SwiperSlide>
                  <img
                    className={style.sliderImg}
                    src={`./src/assets/slider/slide${i}.png`}
                    alt="img"
                  />
                </SwiperSlide>
              ))}
              {array.map((_, i) => (
                <SwiperSlide>
                  <img
                    className={style.sliderImg}
                    src={`./src/assets/slider/slide${i}.png`}
                    alt="slide_image"
                  />
                </SwiperSlide>
              ))}
              <div className="slider-controller">
                {/*  */}

                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
        <div className={style.download}>
          <div className={style.downloadLeft}>
            <div className={style.text}>
              <h4>Download App Now</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </span>
            </div>
            <div className={style.links}>
              <img src={`./src/assets/img/GooglePlay1.png`} alt="" />
              <img src={`./src/assets/img/AppStore1.png`} alt="" />
            </div>
            <div className={style.achievs}>
              <Achieve icon={download} name="DOWNLOAD" state="59865" />
              <Achieve icon={like} name="LIKE" state="59865" />
              <Achieve icon={star} name="5 STAR RATING" state="59865" />
            </div>
          </div>
          <div className={style.downloadImg}>
            <img src={`./src/assets/img/appInterfacePhone.png`} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInterface;
