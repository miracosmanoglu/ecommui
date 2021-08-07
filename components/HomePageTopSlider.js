import styles from '../styles/HomePageTopSlider.module.css'
import Image from 'next/image'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePageTopSlider({ sliderInfos }) {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView={1}
                className="homePageTopSwiper"
                navigation
                pagination={{ clickable: true }}
            >
                {sliderInfos ? sliderInfos.sliderContentList.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className={styles.sliderBox}>
                            <div className={styles.sliderBoxImgContainer}>
                                <Image
                                    layout='fill'
                                    quality={65}
                                    priority
                                    src={`${slide.media}`}
                                    alt="homepagetopsliderImg"
                                />
                            </div>
                            <div className={styles.sliderTexts}>
                                <p className={styles.mainTitle}>Lorem Ipsum dolor</p>
                                <p className={styles.subTitle}>Lorem Ipsum dolor</p>
                                <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <button className={styles.discoverBtn}><p>KEŞFET</p></button>
                            </div>
                        </div>
                    </SwiperSlide>
                )) : null}
            </Swiper>
        </div>
    )
}


