import React from "react";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Popup } from "semantic-ui-react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbar() {
  const [modalOpenInfo, setModalOpenInfo] = useState(false);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setModalOpenInfo(true);
  };
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarTopSide}>
        <div className={styles.navbarTopInner}>
          <ul className={styles.navbarTopLeft}>
            <li>
              <span style={{ marginRight: 7 }}>EN</span>{" "}
            </li>
            <Image
              quality={65}
              src="/stick.svg"
              alt="arrow"
              width="1"
              height="35"
            />
            <li>
              <Link href="/sepetim">
                <a>SHOP</a>
              </Link>
            </li>
            <Image
              quality={65}
              src="/stick.svg"
              alt="arrow"
              width="1"
              height="35"
            />
            <li>
              <Link href="/sikca-sorulan-sorular">
                <a>SSS</a>
              </Link>
            </li>
            <Image
              quality={65}
              src="/stick.svg"
              alt="arrow"
              width="1"
              height="35"
            />
            <div className={styles.navbarTopLeftSocial}>
              <Link href="https://facebook.com/" passHref={true}>
                <a>
                  <i className="fab fa-facebook-square"></i>
                </a>
              </Link>
              <Link href="https://facebook.com/" passHref={true}>
                <a>
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
              <Link href="https://facebook.com/" passHref={true}>
                <a>
                  <i className="fab fa-youtube"></i>
                </a>
              </Link>
            </div>
          </ul>
          <ul className={styles.navbarTopRight}>
            <li>
              <Link href="/satici-basvuru">
                <a>Satıcı Başvuru</a>
              </Link>
            </li>
            <Image
              quality={65}
              src="/stick.svg"
              alt="arrow"
              width="1"
              height="35"
            />
            <li>
              <Link href="/iletisim">
                <a>Yardım&Destek</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.navbarCenter}>
        <div className={styles.navbarCenterTop}>
          <div className={styles.navbarLogo}>
            <Link href="/">
              <a>
                <h1>LOGO</h1>
              </a>
            </Link>
          </div>
          <div className={styles.navbarSearch}>
            <Image
              quality={65}
              src="/search.svg"
              alt="arrow"
              width="23"
              height="23"
            />
            <form onSubmit={handleSubmitSearch}>
              <input
                required
                placeholder="Search"
                className={styles.navbarSearchInput}
              ></input>
            </form>
          </div>
          <div className={styles.navbarCenterLinks}>
            <Link href="/bize-katil">
              <a>
                <Image
                  quality={65}
                  src="/usericon.svg"
                  alt="arrow"
                  width="21,6"
                  height="23"
                />
              </a>
            </Link>
            <Link href="/hesap">
              <a>
                <Image
                  quality={65}
                  src="/hearticon.svg"
                  alt="arrow"
                  width="25,91"
                  height="23"
                />
              </a>
            </Link>
            <Popup
              flowing
              on="click"
              className="navbarPopupBask"
              pinned
              position="bottom right"
              trigger={
                <div className={styles.navbarCenterLinksBask}>
                  <span className={styles.basketCount}>2</span>
                  <Image
                    quality={65}
                    src="/basketicon.svg"
                    alt="arrow"
                    width="25,49"
                    height="23"
                  />
                </div>
              }
            >
              <div className={styles.navbarBasketContainer}>
                <strong className={styles.navbarBasketContainerHead}>
                  Sepetim <span>/ 2 Ürün</span>
                </strong>
                <div className={styles.navbarBasketItems}>
                  <div className={styles.navbarBasketItemImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.navbarBasketItemInfo}>
                    <strong>30,08 TL</strong>
                    <h5>Organik Pilavlık Bulgur Köy Tipi</h5>
                    <span>Adet: 1</span>
                  </div>
                  <div className={styles.navbarBasketItemDel}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="/deleteBasItem.svg"
                    />
                  </div>
                </div>
                <div className={styles.navbarBasketItems}>
                  <div className={styles.navbarBasketItemImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.navbarBasketItemInfo}>
                    <strong>30,08 TL</strong>
                    <h5>Organik Pilavlık Bulgur Köy Tipi</h5>
                    <span>Adet: 1</span>
                  </div>
                  <div className={styles.navbarBasketItemDel}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="/deleteBasItem.svg"
                    />
                  </div>
                </div>
                <div className={styles.navbarBasketShipCon}>
                  <div className={styles.navbarBasketShipPrice}>
                    <p>Toplam Fiyat</p>
                    <strong>60,16 TL</strong>
                  </div>
                  <Link href="/sepetim">
                    <a>
                      <button className={styles.navbarBasketBuyBtn}>
                        SATIN AL
                      </button>
                    </a>
                  </Link>
                  <button className={styles.navbarBasketCloseBtn}>
                    Alışverişe devam et
                  </button>
                </div>
              </div>
            </Popup>
            <div
              onClick={() => setHamMenuOpen(!hamMenuOpen)}
              className={styles.hamIcon}
            >
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbarBottomSide}>
        <div className={styles.navbarBottomSideInner}>
          <ul>
            <li>
              <Link href="/organik-gida">
                <a>EL YAPIMI</a>
              </Link>
            </li>
            <li>
              <Link href="/organik-gida">
                <a>YEREL ÜRÜNLER</a>
              </Link>
            </li>
            <li>
              <Link href="/organik-gida">
                <a>ORGANİK GIDA</a>
              </Link>
            </li>
            <Popup
              flowing
              hoverable
              className="navbarPopup"
              pinned
              position="bottom left"
              trigger={
                <li>
                  <Link href="/organik-gida">
                    <a>TAKI</a>
                  </Link>
                </li>
              }
            >
              <ul className={styles.popupLinks}>
                <Link href="/">
                  <a>
                    <li>LOREM İPSUM</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>LOREM İPSUM</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>LOREM İPSUM</li>
                  </a>
                </Link>
              </ul>
            </Popup>
          </ul>
        </div>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setModalOpenInfo(false);
        }}
      >
        <div
          className={
            modalOpenInfo
              ? styles.searchResults
              : `${styles.searchResults} ${styles.searchResultsClose}`
          }
        >
          <div className={styles.searchResultsLeft}>
            <div className={styles.searchResultsLeftTop}>
              <ul>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
              </ul>
            </div>
            <h5>Satıcılar</h5>
            <div className={styles.searchResultsLeftBottom}>
              <ul>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>

                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Lorem İpsum Dolor</li>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.searchResultsRight}>
            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/">
              <a>
                <div className={styles.searchResultsCard}>
                  <div className={styles.srCardImage}>
                    <Image
                      quality={65}
                      width={70}
                      height={70}
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                    />
                  </div>
                  <div className={styles.resultProductInfo}>
                    <p>Beyorganik</p>
                    <p>Pilavlık Bulgur Köy Tipi </p>
                    <p>
                      <span>60,16 TL</span> 30,08 TL
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </OutsideClickHandler>
      <div
        className={
          hamMenuOpen
            ? styles.hamMenuInnerContainer
            : `${styles.hamMenuInnerContainer} ${styles.hamMenuInnerContainerClose}`
        }
      >
        <div className={styles.hamMenuInner}>
          <ul className={styles.hamMenuInnerLinks}>
            <li>
              <Link href="/organik-gida">
                <a>EL YAPIMI</a>
              </Link>
            </li>
            <li>
              <Link href="/organik-gida">
                <a>YEREL ÜRÜNLER</a>
              </Link>
            </li>
            <li>
              <Link href="/organik-gida">
                <a>ORGANİK GIDA</a>
              </Link>
            </li>
            <li>
              <Link href="/organik-gida">
                <a>TAKI</a>
              </Link>
            </li>
          </ul>

          <form className={styles.mobileSearchNavbar}>
            <input placeholder="Ara..."></input>
          </form>
          <div className={styles.navMobULink}>
            <ul>
              <li>
                <Link href="/">
                  <a>EN</a>
                </Link>
              </li>
              <li>
                <Link href="/sikca-sorulan-sorular">
                  <a>SSS</a>
                </Link>
              </li>
              <li>
                <Link href="/iletisim">
                  <a>DESTEK</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.navMobULinkBottom}>
            <div>
              <Link href="https://facebook.com/" passHref={true}>
                <a>
                  <i className="fab fa-facebook-square"></i>
                </a>
              </Link>
              <Link href="https://facebook.com/" passHref={true}>
                <a>
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
              <Link href="https://facebook.com/" passHref={true}>
                <a>
                  <i className="fab fa-youtube"></i>
                </a>
              </Link>
            </div>
            <Link href="/satici-basvuru">
              <a>Satıcı Başvuru</a>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
