import styles from "../styles/MyFavoritesPage.module.css";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "semantic-ui-react";

export default function MyFavoritesPage() {
  const favoriteCardCount = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const [orderDetail, setOrderDetail] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.favoritesWrapper}>
      <p className={styles.mainTitle}>Favorilerim</p>

      <div className={styles.favoritesCardsWrapper}>
        <div className={styles.favoriteCardWrapper}>
          <div className={styles.favoriteCardLeft}>
            <div className={styles.favoriteCardLeftImg}>
              <Image
                quality={65}
                layout="fill"
                src="/orderDetailImg.svg"
                alt="orderDetailImg"
              />
            </div>
            <div className={styles.favoriteCardLeftTexts}>
              <p className={styles.favoriteCardDesc}>
                <b>Clear Chunky High Heel Boots</b>
              </p>
              <p className={styles.favoriteCardDesc}>Lorem Ipsum Dolor</p>
              <p className={styles.favoriteCardDesc}>Krem</p>
              <p className={styles.favoriteCardDesc}>
                <b>89,99 TL</b>
              </p>
              <div className={styles.favoriteCardLeftBtns}>
                <button className={styles.favoriteCardLeftBtn}>
                  Ürüne Git
                </button>
                <button className={styles.favoriteCardLeftBtn}>Kaldır</button>
              </div>
            </div>
          </div>
          <div className={styles.favoriteCardRight}>
            <Dropdown
              selection
              name="favoriteCardCount"
              className="favoriteCardDropdown"
              options={favoriteCardCount}
              placeholder="Adet"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <button className={styles.favoriteCardRightBtn}>SEPETE EKLE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
