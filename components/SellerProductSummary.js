import styles from "../styles/SellerProductSummary.module.css";
import Image from "next/image";
import SellerProductSummaryAccordion from "./SellerProductSummaryAccordion";

export default function SellerProductDetailInfos({ section, setSection }) {
  const countryOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const cityOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const districtOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  return (
    <div className={styles.sellerProductSummaryWrapper}>
      <SellerProductSummaryAccordion />
      <SellerProductSummaryAccordion />
      <SellerProductSummaryAccordion />
      <SellerProductSummaryAccordion />
      <SellerProductSummaryAccordion />
      <div className={styles.sellerProductSummaryBtns}>
        <button
          onClick={() => {
            setSection("evrakYukleme");
          }}
          className={styles.prevBtn}
        >
          <Image
            quality={65}
            src="/prevIcon.svg"
            alt="timer"
            width="5"
            height="9"
          />
          <p>GERİ DÖN</p>
        </button>
        <div className={styles.sellerProductSummaryBtnRight}>
          <button className={styles.sellerProductSummaryBtn}>BİTİR</button>
          <button className={styles.sellerProductSummaryBtn}>
            YENİ ÜRÜN EKLE
          </button>
        </div>
      </div>
    </div>
  );
}
