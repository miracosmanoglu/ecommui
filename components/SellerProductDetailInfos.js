import styles from "../styles/SellerProductDetailInfos.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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

  const [perView, setPerView] = useState(4);

  useEffect(() => {
    window.innerWidth < 1250 ? setPerView(3) : null;
    window.innerWidth < 800 ? setPerView(2) : null;
    window.innerWidth < 600 ? setPerView(1) : null;
  }, []);

  return (
    <div className={styles.sellerProductPageWrapper}>
      <p className={styles.mainTitle}>Kategori Seçiniz</p>
      <div className={styles.sellerProductCategoryWrapper}>
        <p className={styles.desc}>Kategori Seçiniz</p>
        <div className={styles.sellerProductCategorySwiper}>
          <Swiper
            slidesPerView={perView}
            spaceBetween={0}
            className="sellerProductCategorySwiper"
          >
            <SwiperSlide>
              <div className={styles.sellerProductCategorySlide}>
                <label className={styles.searchLabel}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Anahtar Kelime"
                  />
                  <Image
                    quality={65}
                    src="/searchIconMini.svg"
                    alt="arrow"
                    width="9"
                    height="9"
                  />
                </label>
                <div className={styles.sellerProductCategoryOptions}>
                  <p className={styles.sellerProductCategoryOption}>Aksesuar</p>
                  <p className={styles.sellerProductCategoryOption}>Ayakkabı</p>
                  <p className={styles.sellerProductCategoryOption}>Giyim</p>
                  <p className={styles.sellerProductCategoryOption}>
                    Ev & Mobilya
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sellerProductCategorySlide}>
                <label className={styles.searchLabel}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Anahtar Kelime"
                  />
                  <Image
                    quality={65}
                    src="/searchIconMini.svg"
                    alt="arrow"
                    width="9"
                    height="9"
                  />
                </label>
                <div className={styles.sellerProductCategoryOptions}>
                  <p className={styles.sellerProductCategoryOption}>Aksesuar</p>
                  <p className={styles.sellerProductCategoryOption}>Ayakkabı</p>
                  <p className={styles.sellerProductCategoryOption}>Giyim</p>
                  <p className={styles.sellerProductCategoryOption}>
                    Ev & Mobilya
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sellerProductCategorySlide}>
                <label className={styles.searchLabel}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Anahtar Kelime"
                  />
                  <Image
                    quality={65}
                    src="/searchIconMini.svg"
                    alt="arrow"
                    width="9"
                    height="9"
                  />
                </label>
                <div className={styles.sellerProductCategoryOptions}>
                  <p className={styles.sellerProductCategoryOption}>Aksesuar</p>
                  <p className={styles.sellerProductCategoryOption}>Ayakkabı</p>
                  <p className={styles.sellerProductCategoryOption}>Giyim</p>
                  <p className={styles.sellerProductCategoryOption}>
                    Ev & Mobilya
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sellerProductCategorySlide}>
                <label className={styles.searchLabel}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Anahtar Kelime"
                  />
                  <Image
                    quality={65}
                    src="/searchIconMini.svg"
                    alt="arrow"
                    width="9"
                    height="9"
                  />
                </label>
                <div className={styles.sellerProductCategoryOptions}>
                  <p className={styles.sellerProductCategoryOption}>Aksesuar</p>
                  <p className={styles.sellerProductCategoryOption}>Ayakkabı</p>
                  <p className={styles.sellerProductCategoryOption}>Giyim</p>
                  <p className={styles.sellerProductCategoryOption}>
                    Ev & Mobilya
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sellerProductCategorySlide}>
                <label className={styles.searchLabel}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Anahtar Kelime"
                  />
                  <Image
                    quality={65}
                    src="/searchIconMini.svg"
                    alt="arrow"
                    width="9"
                    height="9"
                  />
                </label>
                <div className={styles.sellerProductCategoryOptions}>
                  <p className={styles.sellerProductCategoryOption}>Aksesuar</p>
                  <p className={styles.sellerProductCategoryOption}>Ayakkabı</p>
                  <p className={styles.sellerProductCategoryOption}>Giyim</p>
                  <p className={styles.sellerProductCategoryOption}>
                    Ev & Mobilya
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.sellerProductCategorySlide}>
                <label className={styles.searchLabel}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Anahtar Kelime"
                  />
                  <Image
                    quality={65}
                    src="/searchIconMini.svg"
                    alt="arrow"
                    width="9"
                    height="9"
                  />
                </label>
                <div className={styles.sellerProductCategoryOptions}>
                  <p className={styles.sellerProductCategoryOption}>Aksesuar</p>
                  <p className={styles.sellerProductCategoryOption}>Ayakkabı</p>
                  <p className={styles.sellerProductCategoryOption}>Giyim</p>
                  <p className={styles.sellerProductCategoryOption}>
                    Ev & Mobilya
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                  <p className={styles.sellerProductCategoryOption}>
                    Teknoloji
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className={styles.desc}>
          <b>Seçilen:</b> Ev & Mobilya {">"} Ev Tekstili {">"} Perde {">"}{" "}
        </p>
      </div>
      <form className={styles.sellerProductDetailInfosForm}>
        <p className={styles.mainTitle}>ÜRÜN BİLGİLERİNİ GİRİNİZ</p>
        <p className={styles.desc}>Model Kodu</p>
        <Dropdown
          selection
          name="applicationType"
          className="compnayInfoDropdown"
          options={cityOptions}
          placeholder="Model Kodu"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <p className={styles.desc}>Marka</p>
        <Dropdown
          selection
          name="applicationType"
          className="compnayInfoDropdown"
          options={cityOptions}
          placeholder="Marka"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <p className={styles.desc}>Çap</p>
        <Dropdown
          selection
          name="applicationType"
          className="compnayInfoDropdown"
          options={cityOptions}
          placeholder="Çap"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <p className={styles.desc}>Renk</p>
        <Dropdown
          selection
          name="applicationType"
          className="compnayInfoDropdown"
          options={cityOptions}
          placeholder="Renk"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <p className={styles.mainTitle}>ÜRÜN ÖZELLİKLERİNİ GİRİNİZ</p>
        <p className={styles.desc}>Yaş Grubu</p>
        <Dropdown
          selection
          name="applicationType"
          className="compnayInfoDropdown"
          options={cityOptions}
          placeholder="Yaş Grubu"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <p className={styles.desc}>Cinsiyet</p>
        <Dropdown
          selection
          name="applicationType"
          className="compnayInfoDropdown"
          options={cityOptions}
          placeholder="Cinsiyet"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <p className={styles.desc}>Ek Özellik</p>
        <Dropdown
          selection
          name="applicationType"
          className="compnayInfoDropdown"
          options={cityOptions}
          placeholder="Ek Özellik"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />

        <div className={styles.SellerProductDetailInfosBtns}>
          <button
            onClick={() => {
              setSection("firmaBilgileri");
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
          <button
            onClick={() => {
              setSection("urunOzeti");
            }}
            className={styles.continueBtn}
          >
            DEVAM ET
          </button>
        </div>
      </form>
    </div>
  );
}
