import React, { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import styles from "../../../../styles/ProductCommentDetail.module.css";
import {
  Breadcrumb,
  Dropdown,
  DropdownItem,
  Modal,
  Search,
} from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

const options = [
  { key: 1, text: "Önerilen Sıralama", value: 1 },
  { key: 2, text: "Eskiden Yeniye", value: 2 },
  { key: 3, text: "Ucuzdan Pahalıya", value: 3 },
  { key: 4, text: "Azalan Puan", value: 4 },
  { key: 5, text: "Artan Puan", value: 5 },
];

const optionsStar = [
  { key: 1, image: "/stars5.svg", value: 1 },
  { key: 2, image: "/stars4.svg", value: 2 },
  { key: 3, image: "/stars3.svg", value: 3 },
  { key: 4, image: "/stars2.svg", value: 4 },
  { key: 5, image: "/stars1.svg", value: 5 },
];

const allComments = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
  { value: 11 },
  { value: 12 },
  { value: 13 },
  { value: 14 },
  { value: 15 },
  { value: 16 },
  { value: 17 },
  { value: 18 },
  { value: 19 },
  { value: 20 },
];

export default function yorumlar() {
  const [comments, setComments] = useState(allComments);
  const [modalOpenTwo, setModalOpenTwo] = useState(false);
  const [modalOpenTwoInner, setModalOpenTwoInner] = useState(false);
  return (
    <Layout>
      <div className={styles.productCommentBreadCrumb}>
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
          <Breadcrumb.Section>
            <Link href="/organik-gida/kuru-gidalar">
              <a>Kuru Gıdalar</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>
            Organik Bulgur Köy Tipi
          </Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <main className={styles.productCommentMainContainer}>
        <div className={styles.productCommentProd}>
          <div className={styles.productCommentProdLeft}>
            <div className={styles.productCommentProdImg}>
              <Image
                quality={65}
                layout="fill"
                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                alt="homepagebottomsliderImg"
              />
            </div>
            <div className={styles.productCommentProdDet}>
              <h3>Beyorganik</h3>
              <h4>Pilavlık Bulgur Köy Tipi</h4>
              <span>60,16 TL</span>
              <strong>30,08 TL</strong>
            </div>
          </div>
          <div className={styles.productCommentProdRight}>
            <button className={styles.addBasketSldBtnCmtDetail}>
              SEPETE EKLE
            </button>
            <button className={styles.productFavBtnCmtDetail}>
              <Image
                quality={65}
                src="/hearticon.svg"
                alt="arrow"
                width="17"
                height="17"
              />
            </button>
          </div>
        </div>
        <div className={styles.commentDetsHeader}>
          <h4>Tüm Yorumlar</h4>
          <span>652 Değerlendirme | 377 Yorum</span>
        </div>
        <div className={styles.allRatingsContainerCD}>
          <div className={styles.allRatingsMinimalizeCD}>
            <strong>4.0</strong>
            <div className={styles.allRatingsStarsCD}>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/starIcon.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
              <div>
                <Image
                  quality={65}
                  width={20}
                  height={20}
                  src="/noFillStar.svg"
                  alt="homepagebottomsliderImg"
                />
              </div>
            </div>
          </div>
          <button className={styles.allRateBTN}>ÜRÜNÜ DEĞERLENDİR</button>
        </div>
        <div className={styles.commentFilter}>
          <Dropdown
            defaultValue={1}
            className="commentSortDrop"
            options={options}
            selection
          />
          <input
            className={styles.commentFilterInput}
            placeholder="Yorumlarda Ara..."
          ></input>
          <Dropdown
            placeholder="Filtrele"
            className="commentSortDropStar"
            options={optionsStar}
            selection
          />
        </div>
        <div className={styles.allCommentsContainerDet}>
          {comments.map((e, index) => (
            <div key={index} className={styles.commentCD}>
              <div className={styles.commentInfoCD}>
                <div className={styles.commentStarsCD}>
                  <Image
                    quality={65}
                    width={20}
                    height={20}
                    src="/starIcon.svg"
                    alt="homepagebottomsliderImg"
                  />
                  <Image
                    quality={65}
                    width={20}
                    height={20}
                    src="/starIcon.svg"
                    alt="homepagebottomsliderImg"
                  />
                  <Image
                    quality={65}
                    width={20}
                    height={20}
                    src="/starIcon.svg"
                    alt="homepagebottomsliderImg"
                  />
                  <Image
                    quality={65}
                    width={20}
                    height={20}
                    src="/starIcon.svg"
                    alt="homepagebottomsliderImg"
                  />
                  <Image
                    quality={65}
                    width={20}
                    height={20}
                    src="/starIcon.svg"
                    alt="homepagebottomsliderImg"
                  />
                </div>
                <span className={styles.commentDateCD}>1 Ocak 2021</span>
                <span className={styles.commenterNameCD}>Furkan Ç.</span>
                <div className={styles.commentFavCD}>
                  <span>Yardımcı oldu mu?</span>
                  <button>
                    <Image
                      quality={65}
                      src="/hearticon.svg"
                      alt="arrow"
                      width={10}
                      height={10}
                    />
                    <span>1</span>
                  </button>
                </div>
              </div>
              <p className={styles.commentTextCD}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <Modal
                onOpen={() => setModalOpenTwo(true)}
                onClose={() => setModalOpenTwo(false)}
                open={modalOpenTwo}
                className="commentRepModal"
                trigger={
                  <button className={styles.commentReportCD}>Şikayet Et</button>
                }
              >
                <div className={styles.reportCommentContainer}>
                  <h6>ŞİKAYET ET</h6>
                  <p>
                    Farklı ürüne ait olan, reklam içeren, başka kullanıcıların
                    haklarına saldırıda bulunan, müstehcen içerikli ya da yasal
                    olmayan içerik taşıyan yorumları yayınlamamaya dikkat
                    ediyoruz. Uygun olmadığını düşündüğünüz içerikleri "Şikayet
                    Et" butonu ile bize iletebilirsiniz.
                  </p>
                  <div className={styles.reportCommentContainerBtns}>
                    <button
                      onClick={() => setModalOpenTwo(false)}
                      className={styles.reportCommentContainerBtn1}
                    >
                      Vazgeç
                    </button>
                    <Modal
                      onOpen={() => setModalOpenTwoInner(true)}
                      onClose={() => setModalOpenTwoInner(false)}
                      open={modalOpenTwoInner}
                      className="commentRepModal"
                      trigger={
                        <button className={styles.reportCommentContainerBtn2}>
                          Şikayet Et
                        </button>
                      }
                    >
                      <div className={styles.reportCommentContainerDone}>
                        <h6>ŞİKAYETİNİZİ ALDIK</h6>
                        <p>Geri Bildiriminiz için teşekkürler</p>
                        <button
                          onClick={() => {
                            setModalOpenTwo(false);
                            setModalOpenTwoInner(false);
                          }}
                          className={styles.reportCommentContainerSub}
                        >
                          Tamam
                        </button>
                      </div>
                    </Modal>
                  </div>
                </div>
              </Modal>
            </div>
          ))}
          <div
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={styles.goTopBtnCommentCD}
          >
            <i className="fas fa-chevron-up"></i>
          </div>
        </div>
      </main>
    </Layout>
  );
}
