import React from "react";
import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  customSlideIndex,
  indexNo,
  modalOpen,
  productInfos,
}) {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productIcons}>
        <button
          onClick={() => {
            modalOpen(true);
            customSlideIndex(indexNo);
          }}
        >
          <Image
            quality={65}
            src="/productSearchIcon.svg"
            alt="arrow"
            width="17"
            height="17"
          />
        </button>
        <button>
          <Image
            quality={65}
            src="/hearticon.svg"
            alt="arrow"
            width="17"
            height="17"
          />
        </button>
      </div>
      <Link href="/organik-gida/kuru-gidalar/1">
        <a>
          <div className={styles.productImage}>
            <Image
              quality={65}
              layout="fill"
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
              alt="homepagebottomsliderImg"
            />
          </div>
          <div className={styles.productInfo}>
            <h2>{productInfos.title}</h2>
            <h3>{productInfos.subTitle}</h3>
            <p>{productInfos.price}</p>
            <h2>{productInfos.name}</h2>
          </div>
        </a>
      </Link>
      <button className={styles.addBasketBtn}>SEPETE EKLE</button>
    </div>
  );
}
