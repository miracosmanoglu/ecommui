import React from 'react'
import styles from '../styles/HomePageBottomSlider.module.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePageBottomSlider({ perView }) {

    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView={perView}
                spaceBetween={0}
                className="homePageBottomSwiper"
                navigation
            >
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                quality={65}
                                layout='fill'
                                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                                alt="homepagebottomsliderImg"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                quality={65}
                                layout='fill'
                                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                                alt="homepagebottomsliderImg2"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Sarı Mercimek</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                quality={65}
                                layout='fill'
                                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                                alt="homepagebottomsliderImg3"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Börülce</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                quality={65}
                                layout='fill'
                                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                                alt="homepagebottomsliderImg"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                quality={65}
                                layout='fill'
                                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                                alt="homepagebottomsliderImg2"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.sliderBox}>
                        <div className={styles.sliderBoxImgContainer}>
                            <Image
                                quality={65}
                                layout='fill'
                                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                                alt="homepagebottomsliderImg3"
                            />
                        </div>
                        <div className={styles.sliderTexts}>
                            <p className={styles.mainTitle}>Beyorganik</p>
                            <p className={styles.subTitle}>Organik Pilavlık Bulgur Köy Tipi</p>
                            <p className={styles.price}>30,08 TL</p>
                            <button className={styles.addBtn}><p>SEPETE EKLE</p></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
