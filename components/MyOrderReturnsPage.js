import styles from "../styles/MyOrderReturnsPage.module.css";
import Image from "next/image";
import { useState } from "react";
import { Dropdown, Modal, Rating } from "semantic-ui-react";

export default function MyOrderReturnsPage() {
  const orderReturnSort = [
    { value: 1, text: "Tüm İadelerim" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const [orderDetail, setOrderDetail] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.orderReturnsPageWrapper}>
      <div className={styles.mainTitleWrapper}>
        <p className={styles.mainTitle}>İadelerim</p>
        <Dropdown
          selection
          name="orderSort"
          className="orderDropdown"
          options={orderReturnSort}
          placeholder="Tüm İadelerim"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>

      <div className={styles.orderReturnsWrapper}>
        <p className={styles.subTitle}>Toplam 3 adet iade</p>
        <div className={styles.orderReturnsCard}>
          <p className={styles.orderReturnDateInfo}>03.10.2020</p>
          <div className={styles.orderReturnCardLeft}>
            <p className={styles.orderReturnStatus}>
              <span>
                Sipariş Kodu: <b>MNPRSQT1234</b>
              </span>
              <span>Ürün iade alındı.</span>
            </p>
            <div className={styles.orderReturnInfo}>
              <div className={styles.orderReturnImg}>
                <Image
                  quality={65}
                  layout="fill"
                  src="/orderDetailImg.svg"
                  alt="orderDetailImg"
                />
              </div>
              <div className={styles.orderReturnText}>
                <b>Clear Chunky High Heel Boots</b>
                <p>1 Adet / Krem / 37</p>
                <p>
                  <b>Satıcı:</b> Flo
                </p>
                <p>
                  <b>İade Nedeni:</b> Ürünü iade etmek istiyorum.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.orderReturnCardRight}>
            <p className={styles.orderReturnPrice}>
              Fiyat: <b>89,99 TL</b>
            </p>
            <Modal
              closeIcon
              onClose={() => {
                setOpen(false);
              }}
              className={styles.orderRatingModal}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <button className={styles.orderReturnButton}>
                  ÜRÜNÜ DEĞERLENDİR
                </button>
              }
            >
              <>
                <div className={styles.orderRatingInfoWrapper}>
                  <div className={styles.orderRatingImg}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="/orderDetailImg.svg"
                      alt="orderDetailImg"
                    />
                  </div>
                  <div className={styles.orderRatingInfoTexts}>
                    <p className={styles.orderRatingTitle}>
                      Clear Chunky High Heel Boots
                    </p>
                    <p className={styles.orderRatingContent}>Ürünün içeriği</p>
                  </div>
                </div>
                <p className={styles.orderRatingStarText}>Değerlendir</p>
                <Rating
                  className={styles.orderRatingStars}
                  maxRating={5}
                  clearable
                />
                <p className={styles.desc}>Yorumunuz</p>
                <textarea className={styles.orderRatingTextArea} />
                <p className={styles.orderRatingTextAreaSize}>2500</p>
                <p className={styles.orderRatingCriterion}>
                  Yorum Yayınlanma Kriterleri{" "}
                  <Image
                    onClick={() => setOrderDetail(true)}
                    src="/nextIcon.svg"
                    alt="next"
                    width="5"
                    height="8.5"
                  />
                </p>
                <label className={styles.readLabel} htmlFor="readandunderstand">
                  <input
                    id="readandunderstand"
                    type="checkbox"
                    // onClick={(e) => {
                    //   setReadandunderstand(!readandunderstand);
                    // }}
                  />
                  <p className={styles.readText}>İsmimi Göster</p>
                </label>
                <label className={styles.readLabel} htmlFor="readandunderstand">
                  <input
                    id="readandunderstand"
                    type="checkbox"
                    // onClick={(e) => {
                    //   setReadandunderstand(!readandunderstand);
                    // }}
                  />
                  <p className={styles.readText}>
                    Yorum eklemek için <b>kullanıcı sözleşmesini</b> kabul
                    ediyorum.
                  </p>
                </label>
                <button
                  onClick={() => setOpen(false)}
                  className={styles.orderRatingBtn}
                >
                  YORUM YAP
                </button>
              </>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
