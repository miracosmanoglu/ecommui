import styles from "../styles/MyOrdersPage.module.css";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "semantic-ui-react";

export default function MyOrdersPage() {
  const orderSortOptions = [
    { value: 1, text: "Tüm Siparişlerim" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const [orderDetail, setOrderDetail] = useState(false);

  return (
    <div className={styles.orderPageWrapper}>
      <div className={styles.mainTitleWrapper}>
        <p className={styles.mainTitle}>Siparişlerim</p>
        {orderDetail === false ? (
          <Dropdown
            selection
            name="orderSort"
            className="orderDropdown"
            options={orderSortOptions}
            placeholder="Tüm Siparişlerim"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        ) : (
          <p
            onClick={() => setOrderDetail(false)}
            className={styles.mainTitleLogOut}
          >
            Tüm Siparişlerime Geri Dön
          </p>
        )}
      </div>

      {orderDetail === false ? (
        <>
          <p className={styles.orderCountText}>Toplam 4 adet sipariş</p>
          <div
            className={styles.orderWrapper}
            onClick={() => setOrderDetail(true)}
          >
            <p className={styles.orderDate}>03.10.2020</p>
            <div className={styles.orderLeft}>
              <p className={styles.orderCode}>
                Sipariş Kodu: <b>MNPRSQT1234</b>
              </p>
              <p className={styles.orderStatus}>Kargo Teslim Edildi</p>
            </div>
            <div className={styles.orderRight}>
              <p>
                Toplam: <b>250,98 TL</b>
              </p>
              <Image
                quality={65}
                src="/nextIcon.svg"
                alt="next"
                width="5"
                height="8.5"
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.orderDetailWrapper}>
          <p className={styles.subTitle}>
            <Image
              quality={65}
              src="/infoIcon.svg"
              alt="next"
              width="20"
              height="20"
            />
            Kargo firmalarının çalışma yoğunluğuna bağlı olarak,
            alışverişlerinizin teslimat süreleri değişkenlik gösterebilir.
            Anlayışınız için teşekkür ederiz.
          </p>
          <div className={styles.orderDetailCard}>
            <p className={styles.orderDetailDateInfo}>
              03.10.2020 tarihinde kargoya verilen siparişleriniz
            </p>
            <div className={styles.orderDetailCardLeft}>
              <p className={styles.orderDetailStatus}>
                Sipariş Durumu: <span>Teslim Edildi</span>
              </p>
              <p className={styles.orderDetailCompany}>
                Kargo Firması: <b>Aras Kargo</b>
              </p>
              <div className={styles.orderDetailInfo}>
                <div className={styles.orderDetailImg}>
                  <Image
                    quality={65}
                    layout="fill"
                    src="/orderDetailImg.svg"
                    alt="orderDetailImg"
                  />
                </div>
                <div className={styles.orderDetailText}>
                  <b>Clear Chunky High Heel Boots</b>
                  <p>1 Adet / Krem / 37</p>
                  <p>
                    <b>Satıcı:</b> Flo
                  </p>
                  <b>89,99 TL</b>
                </div>
              </div>
            </div>
            <div className={styles.orderDetailCardRight}>
              <button className={styles.orderDetailButton}>
                TESLİMAT BİLGİLERİ
              </button>
              <button className={styles.orderDetailButton}>FATURA</button>
            </div>
          </div>
          <div className={styles.orderSummaryWrappper}>
            <p className={styles.orderSummaryTitle}>Sipariş Detayı</p>
            <div className={styles.orderSummaryTop}>
              <div className={styles.orderSummaryTexts}>
                <b>Sipariş Kodu</b>
                <p>MNPRSQT1234</p>
              </div>
              <div className={styles.orderSummaryTexts}>
                <b>Sipariş Özeti</b>
                <p>2 Teslimat, 2 Ürün</p>
              </div>
              <div className={styles.orderSummaryTexts}>
                <b>Siparişin Verildiği Tarih</b>
                <p>03.10.2020</p>
              </div>
            </div>
            <div className={styles.orderSummaryBottom}>
              <div className={styles.orderSummaryTexts}>
                <b>Ödeme Bilgileri</b>
                <p>
                  <Image
                    quality={65}
                    className={styles.orderSummaryCardImg}
                    src="/orderCard.svg"
                    alt="mastercard"
                    width="20"
                    height="15"
                  />
                  ****8674 / Tek Çekim
                </p>
              </div>
              <div className={styles.orderSummaryTexts}>
                <b>Teslimat Adresi</b>
                <p>Lorem İpsum Dolor Sit Amet</p>
                <p>Lorem İpsum Dolor Sit Amet</p>
              </div>
              <div className={styles.orderSummaryTexts}>
                <b>Sipariş Özeti</b>
                <p>
                  Toplam Sipariş Tutarı:<b>279,98 TL</b>
                </p>
                <p>
                  Gönderim Ücreti:<b>8,99 TL</b>
                </p>
                <p>
                  Sipariş İndirimi:<b>37,99 TL</b>
                </p>
                <p>
                  Toplam:<b>250,98 TL</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
