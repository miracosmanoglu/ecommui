import React from "react";
import styles from "../styles/MobileFooter.module.css";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
export default function MobileFooter() {
  const [accordion, setAccordion] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  return (
    <footer className={styles.footerContainerMobile}>
      <div className={styles.footerInnerMobile}>
        <div className={styles.footerLogoMobile}>
          <h1>LOGO</h1>
        </div>

        <div className={styles.footerArticlesMobile}>
          <div className={styles.footerArticlesAccordion}>
            {accordion ? (
              <h3
                onClick={() => setAccordion(!accordion)}
                className={styles.footerHeadersMobile}
              >
                <b>MÜŞTERİ HİZMETLERİ</b>
              </h3>
            ) : (
              <h3
                onClick={() => setAccordion(!accordion)}
                className={styles.footerHeadersMobile}
              >
                MÜŞTERİ HİZMETLERİ
              </h3>
            )}
            <ul
              className={
                accordion
                  ? styles.footerListsMobile
                  : styles.accordionInnerClose
              }
            >
              <Link href="/">
                <a>
                  <li>İLETİŞİM</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>ÖDEMELER</li>
                </a>
              </Link>
              <Link href="/sikca-sorulan-sorular">
                <a>
                  <li>SIKÇA SORULAN SORULAR</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>ÜYELİK SÖZLEŞMESİ</li>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <li>SİTE HARİTASI</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>

        <div className={styles.footerArticlesMobile}>
          <div>
            {accordion2 ? (
              <h3
                onClick={() => setAccordion2(!accordion2)}
                className={styles.footerHeadersMobile}
              >
                <b>HAKKIMIZDA</b>
              </h3>
            ) : (
              <h3
                onClick={() => setAccordion2(!accordion2)}
                className={styles.footerHeadersMobile}
              >
                HAKKIMIZDA
              </h3>
            )}

            <ul
              className={
                accordion2
                  ? styles.footerListsMobile
                  : styles.accordionInnerClose
              }
            >
              <Link href="/">
                <a>
                  <li>TARİHÇE</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>MARKALAR</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>KURUMSAL SATIŞ</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>İNSAN KAYNAKLARI</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>MÜŞTERİ MEMNUNİYETİ</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.footerArticlesMobile}>
          <div>
            {accordion3 ? (
              <h3
                onClick={() => setAccordion3(!accordion3)}
                className={styles.footerHeadersMobile}
              >
                <b>ÜRÜNLER</b>
              </h3>
            ) : (
              <h3
                onClick={() => setAccordion3(!accordion3)}
                className={styles.footerHeadersMobile}
              >
                ÜRÜNLER
              </h3>
            )}
            <ul
              className={
                accordion3
                  ? styles.footerListsMobile
                  : styles.accordionInnerClose
              }
            >
              <Link href="/">
                <a>
                  <li>EL YAPIMI</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>YEREL ÜRÜNLER</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>ORGANİK GIDA</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>TAKI</li>
                </a>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerHeadersMobile}>HESABIM</h3>
            <ul className={styles.footerListsMobile}>
              <Link href="/">
                <a>
                  <li>ÜYE GİRİŞİ</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>ÜYE OL</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>

        <div className={styles.footerNewsMobile}>
          <div className={styles.footerNewsHeaderMobile}>
            <h4>HABER BÜLTENİNE KAYDOLUN</h4>
            <p>
              Teklifler, özel indirimler ve yeni ürünlerden önce senin haberin
              olsun.
            </p>
          </div>

          <form className={styles.footerSubFormMobile}>
            <input required type="email" placeholder="E-Mail Adresiniz"></input>
            <button>GÖNDER</button>
          </form>
        </div>
        <div className={styles.footerSocialMobile}>
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
      </div>
    </footer>
  );
}
