import styles from '../styles/HomePageTopSlider.module.css'
import Image from 'next/image'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const sliderInfos = [1, 2, 3]
export default function HomePageTopSlider() {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView={1}
                className="homePageTopSwiper"
                navigation
                pagination={{ clickable: true }}
            >
                {sliderInfos.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.sliderBox}>
                            <div className={styles.sliderBoxImgContainer}>
                                <Image
                                    layout="fill"
                                    src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618598437/pexels-david-jakab-959079_ounxbk.jpg"
                                    alt="homepagetopsliderImg"
                                />
                            </div>
                            <div className={styles.sliderTexts}>
                                <p className={styles.mainTitle}>Lorem Ipsum dolor</p>
                                <p className={styles.subTitle}>Lorem Ipsum dolor</p>
                                <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
                                <button className={styles.discoverBtn}><p>KEŞFET</p></button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


