import React, { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/ProductSliderCard.module.css'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Link from 'next/link'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function ProductSliderCard({ productInfos }) {

    const [counter, setCounter] = useState(1)
    return (
        <div className={styles.productSliderCardContainer}>
            <div className={styles.productSliderContainer}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    className="productImageSwiper"
                    navigation
                >
                    <SwiperSlide>
                        <div className={styles.sliderImageContainer}>
                            <Image
                                quality={50}
                                layout='fill'
                                src={`${productInfos.thumbnailFileUrl}`}
                                alt="homepagebottomsliderImg"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.sliderInfoContainer}>
                <h2>Beyorganik</h2>
                <h3>{productInfos.name}</h3>
                <p className={styles.productCode}><strong>Ürün Kodu:</strong> 123456789 <span>|</span> <strong>Stok Durumu:</strong> Stokta Var</p>
                <div className={styles.productPriceCon}>
                    <div className={styles.prodcutPriceBlock}>
                        <div className={styles.prodcutPriceDisc}>
                            %50
                            <span>İNDİRİM</span>
                        </div>
                        <div className={styles.prodcutShipPrice}>
                            <span>{productInfos.price}</span>
                            {productInfos.discountedPrice}
                    </div>
                    </div>
                    <button className={styles.productFavBtn}>
                        <Image quality={50} src="/hearticon.svg" alt="arrow" width="17" height="17" />
                    </button>
                </div>
                <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, </p>
                <div className={styles.basketProCont}>
                    <div className={styles.basketCounterBtn}>
                        <button onClick={() => {
                            counter === 1 ? setCounter(1) : setCounter(counter - 1)
                        }}>-</button> <span>{counter}</span> <button onClick={() => setCounter(counter + 1)}> + </button>
                    </div>
                    <button className={styles.addBasketSldBtn}>
                        SEPETE EKLE
                    </button>
                </div>
                <div className={styles.goDetailPageCon}>
                    <Link href='/'>
                        <a>
                            <span className={styles.goDetailPage}>
                                Detaylı İncele<i className="fas fa-chevron-right"></i>
                            </span>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    )
}
