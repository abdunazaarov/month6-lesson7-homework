import "./Hero.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import carusel1 from "../../assets/carusel1.png"
import carusel2 from "../../assets/carusel2.png"
import carusel3 from "../../assets/carusel3.png"

function Carousel() {
    return (
        <div className="maxContainer">
            <div className="heroo maxContainer">
                <div className="container">
                    <div className="hero">
                        <div className="hero__text">
                            <h2>Скидка 15% на все подвесные светильники</h2>
                            <span>до 5 февраля</span>
                        </div>
                        <div className="hero__image">
                            <Swiper
                                navigation={true}
                                loop={true}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Navigation, Autoplay]}
                                className="carousel container">
                                <SwiperSlide><img className="carousel__img" src={carusel1} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="carousel__img" src={carusel1} alt="" /></SwiperSlide>
                                <SwiperSlide><img className="carousel__img" src={carusel1} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Carousel;
