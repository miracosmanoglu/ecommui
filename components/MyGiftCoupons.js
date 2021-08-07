import styles from "../styles/MyGiftCoupons.module.css";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "semantic-ui-react";

export default function MyGiftCoupons() {
  const couponSortOptions = [
    { value: 1, text: "Aktif Kuponlarım" },
    { value: 2, text: "02" },
  ];

  const [orderDetail, setOrderDetail] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.myGiftCouponsWrapper}>
      <div className={styles.mainTitleWrapper}>
        <p className={styles.mainTitle}>Hediye Kuponlarım</p>
        <Dropdown
          selection
          name="couponSort"
          className="couponDropdown"
          options={couponSortOptions}
          placeholder="Aktif Kuponlarım"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>

      <p className={styles.subTitle}>
        6 adet hediye kuponunuz bulunmamaktadır.
      </p>

      <div className={styles.couponCardsWrapper}>
        <div className={styles.couponCardWrapper}>
          <p className={styles.couponCardTitle}>
            GIDA KATEGORİLERİNDE GEÇERLİ 200 TL VE ÜZERİ ALIŞVERİŞLERDE{" "}
            <b>50 TL İNDİRİM</b>
          </p>
          <div className={styles.couponCardBottom}>
            <div className={styles.couponCardLeft}>
              <p className={styles.couponPrice}>
                50 TL<span>İNDİRİM</span>
              </p>
              <div className={styles.couponCardLeftTexts}>
                <p className={styles.couponCardDesc}>
                  <b>Başlangıç Tarihi:</b>21.11.2020
                </p>
                <p className={styles.couponCardDesc}>
                  <b>Bitiş Tarihi:</b>23.11.2020
                </p>
                <p className={styles.couponCardDesc}>
                  <b>Minimum Alışveriş Tutarı:</b>200 TL
                </p>
              </div>
            </div>
            <div className={styles.couponCardRight}>
              <button className={styles.couponCardRightBtn}>
                <Image
                  quality={65}
                  src="/timerIcon.svg"
                  alt="timer"
                  width="12.5"
                  height="12.5"
                />
                2 Gün Kaldı
              </button>
              <button className={styles.couponCardRightBtn}>
                ÜRÜNLERE GİT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
