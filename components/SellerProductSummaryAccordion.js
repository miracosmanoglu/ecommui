import styles from "../styles/SellerProductSummary.module.css";
import Image from "next/image";
import { useState } from "react";

export default function SellerProductSummaryAccordion() {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className={styles.sellerProductSummaryAccordion}>
      {accordion ? (
        <p
          onClick={() => setAccordion(!accordion)}
          className={styles.sellerProductSummaryAccordionTitle}
        >
          <b>Perde</b>
          <Image
            quality={65}
            src="/arrowdown.svg"
            alt="arrow"
            width="9"
            height="9"
          />
        </p>
      ) : (
        <p
          onClick={() => setAccordion(!accordion)}
          className={styles.sellerProductSummaryAccordionTitle}
        >
          Perde
          <Image
            quality={65}
            src="/nextIcon.svg"
            alt="arrow"
            width="5"
            height="9"
          />
        </p>
      )}
      <div
        className={
          accordion
            ? styles.sellerProductSummaryAccordionInner
            : styles.sellerProductSummaryAccordionClose
        }
      >
        <p className={styles.desc}>Barkod: 45677888854, 25 TL - 10 Stok</p>
        <p className={styles.desc}>
          Ev & Mobilya {">"} Ev Tekstili {">"} Perde {">"}{" "}
        </p>
        <p className={styles.descTitle}>Genel Ürün Bilgileri</p>
        <p style={{ paddingLeft: "3px" }} className={styles.desc}>
          <b>Marka:</b> Addax
        </p>
        <p style={{ paddingLeft: "3px" }} className={styles.desc}>
          <b>Model Kodu:</b> 23454Perde
        </p>
        <p style={{ paddingLeft: "3px" }} className={styles.desc}>
          <b>Yaş Grubu:</b> Yetişkin
        </p>
        <p style={{ paddingLeft: "3px" }} className={styles.desc}>
          <b>Cinsiyet:</b> Unisex
        </p>
        <p style={{ paddingLeft: "3px" }} className={styles.desc}>
          <b>Ek Özellik:</b>Promosyon Paketi
        </p>
      </div>
    </div>
  );
}
