import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumb, Checkbox } from "semantic-ui-react";
import styles from "../../../styles/ProductList.module.css";
import Image from "next/image";
import { Dropdown } from "semantic-ui-react";
import ProductCard from "../../../components/ProductCard";
import ProductSliderCard from "../../../components/ProductSliderCard";
import { Modal } from "semantic-ui-react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const options = [
  { key: 1, text: "Varsayılan", value: 1 },
  { key: 2, text: "En Çok Satılanlar", value: 2 },
  { key: 3, text: "Ucuzdan Pahalıya", value: 3 },
  { key: 4, text: "Pahalıdan Ucuza", value: 4 },
];

const products = [
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi2",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi3",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi4",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi5",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi6",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi7",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi8",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi9",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi10",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi11",
    price: "30,08 TL",
  },
  {
    title: "Beyorganik",
    imgSrc:
      "https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg",
    subTitle: "Organik Pilavlık Bulgur Köy Tipi12",
    price: "30,08 TL",
  },
];

export default function urunler() {
  const [productsState, setProductsState] = useState(products);

  const [modalOpen, setModalOpen] = useState(false);

  const [slideIndex, setSlideIndex] = useState(0);

  const [openAccordion, setOpenAccordion] = useState(false);
  const openAccordionClick = () => {
    setOpenAccordion(!openAccordion);
  };

  const [openAccordion2, setOpenAccordion2] = useState(false);
  const openAccordionClick2 = () => {
    setOpenAccordion2(!openAccordion2);
  };

  const [openAccordion3, setOpenAccordion3] = useState(false);
  const openAccordionClick3 = () => {
    setOpenAccordion3(!openAccordion3);
  };

  const [openAccordion4, setOpenAccordion4] = useState(false);
  const openAccordionClick4 = () => {
    setOpenAccordion4(!openAccordion4);
  };

  const router = useRouter();
  const page = router.query.category;
  const pageTitle = page ? page.replace("-", " ") : null;

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.prodBreadCrumb}>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section>
            <Link href="/organik-gida">
              <a>Organik Gıda</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Kuru Gıdalar</Breadcrumb.Section>
        </Breadcrumb>
      </div>

      <div className={styles.headerBannerProduct}>
        <Image
          quality={65}
          layout="fill"
          src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618598437/pexels-david-jakab-959079_ounxbk.jpg"
        />
        <p>
          200 TL VE ÜZERİ ALIŞVERİŞE <br />
          <span>KARGO BEDAVA</span>
        </p>
      </div>
      <main className={styles.productListMainContainer}>
        <div className={styles.prodTopContainer}>
          <h2>Kuru Gıdalar</h2>
          <Dropdown
            defaultValue={1}
            className="productsSortDropdown"
            options={options}
            selection
          />
        </div>
        <div className={styles.prodBottomContainer}>
          <div className={styles.filterContainer}>
            <h6>Filtreler</h6>
            <div className={styles.filterAccordion}>
              <h6 onClick={openAccordionClick}>
                Markalar<span>{openAccordion ? "-" : "+"}</span>
              </h6>
              <div
                className={
                  openAccordion
                    ? styles.filterAccordionInner
                    : styles.filterAccordionInnerClose
                }
              >
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
              </div>
            </div>
            <div className={styles.filterAccordion}>
              <h6 onClick={openAccordionClick2}>
                Birim<span>{openAccordion2 ? "-" : "+"}</span>
              </h6>
              <div
                className={
                  openAccordion2
                    ? styles.filterAccordionInner
                    : styles.filterAccordionInnerClose
                }
              >
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
              </div>
            </div>
            <div className={styles.filterAccordion}>
              <h6 onClick={openAccordionClick3}>
                Fiyat<span>{openAccordion3 ? "-" : "+"}</span>
              </h6>
              <div
                className={
                  openAccordion3
                    ? styles.filterAccordionInner
                    : styles.filterAccordionInnerClose
                }
              >
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
              </div>
            </div>
            <div className={styles.filterAccordion}>
              <h6 onClick={openAccordionClick4}>
                Renkler<span>{openAccordion4 ? "-" : "+"}</span>
              </h6>
              <div
                className={
                  openAccordion4
                    ? styles.filterAccordionInner
                    : styles.filterAccordionInnerClose
                }
              >
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
                <div className={styles.filterAccordionInnerPacks}>
                  <label>50₺ - 100₺</label>
                  <Checkbox className="filterCheckBoxs" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productsContainer}>
            {productsState.map((productState, index) => (
              <ProductCard
                customSlideIndex={setSlideIndex}
                modalOpen={setModalOpen}
                indexNo={index}
                key={index}
                productInfos={productState}
              />
            ))}
            <p className={styles.counterDetail}>
              30 üründen 12 tanesi gösteriliyor.
            </p>
            <button className={styles.loadMoreProdBtn}>DAHA FAZLA</button>
            <div
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={styles.goTopBtn}
            >
              <i className="fas fa-chevron-up"></i>
            </div>
          </div>
        </div>
        <Modal
          onClose={() => setModalOpen(false)}
          onOpen={() => setModalOpen(true)}
          open={modalOpen}
          closeIcon
          className="productsModal"
        >
          <div className={styles.swiperModalProduct}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              className="productAllSwiper"
              navigation
              allowTouchMove={false}
              initialSlide={slideIndex}
            >
              {productsState.map((productState, index) => (
                <SwiperSlide key={index}>
                  <ProductSliderCard productInfos={productState} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Modal>
      </main>
    </Layout>
  );
}
