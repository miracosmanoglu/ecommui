import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ProductCard({ customSlideIndex, indexNo, modalOpen, productInfos }) {

    const router = useRouter()
    const page = router.asPath

    return (
        <div className={styles.productContainer}>
            <div className={styles.productIcons}>
                <button onClick={() => {
                    modalOpen(true)
                    customSlideIndex(indexNo)
                }}>
                    <Image quality={50} src="/productSearchIcon.svg" alt="arrow" width="17" height="17" />
                </button>
                <button>
                    <Image quality={50} src="/hearticon.svg" alt="arrow" width="17" height="17" />
                </button>
            </div>
            <Link href={`${page}/${productInfos.id}`}>
                <a>
                    <div className={styles.productImage}>
                        <Image
                            quality={50}
                            layout='fill'
                            src="https://i.hizliresim.com/tgiImu.png"
                            alt="homepagebottomsliderImg"
                        />
                    </div>
                    <div className={styles.productInfo}>
                        {/* <h2>{productInfos.title}</h2>
                        <h3>{productInfos.subTitle}</h3>
                        */}
                        <h2>{productInfos.name}</h2>
                        <p>{productInfos.discountedPrice}</p>
                    </div>
                </a>
            </Link>
            <button className={styles.addBasketBtn}>SEPETE EKLE</button>
        </div>
    )
}