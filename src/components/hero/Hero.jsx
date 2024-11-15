import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

import carusel1 from "../../assets/carusel1.png";

function Carousel() {
  return (
    <div className="maxContainer">
      <div className="hero">
        <div className="hero__content container">
          <div className="hero__text">
            <h2>Скидка 15% на все подвесные светильники</h2>
            <span>до 5 февраля</span>
          </div>
          <div className="hero__carousel">
            <Swiper
              navigation={true}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="carousel"
            >
              <SwiperSlide>
                <img className="carousel__img" src={carusel1} alt="Carousel Slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="carousel__img" src={carusel1} alt="Carousel Slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="carousel__img" src={carusel1} alt="Carousel Slide" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
