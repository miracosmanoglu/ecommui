import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import MobileFooter from "./MobileFooter"

export default function Footer() {
    return (
        <>
            <footer className={styles.footerContainer}>
                <div className={styles.footerInner}>
                    <div className={styles.footerLogo}>
                        <h1>LOGO</h1>
                    </div>

                    <div className={styles.footerArticles}>
                        <div>
                            <h3 className={styles.footerHeaders}>MÜŞTERİ HİZMETLERİ</h3>
                            <ul className={styles.footerLists}>
                                <Link href="/">
                                    <a>
                                        <li>
                                            İLETİŞİM
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            ÖDEMELER
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/sikca-sorular-sorular">
                                    <a>
                                        <li>
                                            SIKÇA SORULAN SORULAR
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            ÜYELİK SÖZLEŞMESİ
                                    </li>
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a>
                                        <li>
                                            SİTE HARİTASI
                                    </li>
                                    </a>
                                </Link>
                            </ul>
                        </div>
                        <div className={styles.footerSocial}>
                            <Link href="https://facebook.com/" passHref={true}>
                                <a><i className="fab fa-facebook-square"></i></a>
                            </Link>
                            <Link href="https://facebook.com/" passHref={true}>
                                <a><i className="fab fa-instagram"></i></a>
                            </Link>
                            <Link href="https://facebook.com/" passHref={true}>
                                <a><i className="fab fa-youtube"></i></a>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.footerArticles}>
                        <div>
                            <h3 className={styles.footerHeaders}>HAKKIMIZA</h3>
                            <ul className={styles.footerLists}>
                                <Link href="/">
                                    <a>
                                        <li>
                                            TARİHÇE
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            MARKALAR
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            KURUMSAL SATIŞ
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            İNSAN KAYNAKLARI
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            MÜŞTERİ MEMNUNİYETİ
                                    </li>
                                    </a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footerArticles}>
                        <div>
                            <h3 className={styles.footerHeaders}>ÜRÜNLER</h3>
                            <ul className={styles.footerLists}>
                                <Link href="/">
                                    <a>
                                        <li>
                                            EL YAPIMI
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            YEREL ÜRÜNLER
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            ORGANİK GIDA
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            TAKI
                                    </li>
                                    </a>
                                </Link>
                            </ul>
                        </div>

                        <div>
                            <h3 className={styles.footerHeaders}>HESABIM</h3>
                            <ul className={styles.footerLists}>
                                <Link href="/">
                                    <a>
                                        <li>
                                            ÜYE GİRİŞİ
                                    </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <li>
                                            ÜYE OL
                                    </li>
                                    </a>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.footerNews}>
                        <div className={styles.footerNewsHeader}>
                            <h4>HABER BÜLTENİNE KAYDOLUN</h4>
                            <p>Teklifler, özel indirimler  ve yeni ürünlerden önce senin haberin olsun.</p>
                        </div>

                        <form className={styles.footerSubForm}>
                            <input required type='email' placeholder="E-Mail Adresiniz"></input>
                            <button>GÖNDER</button>
                        </form>
                    </div>

                </div>

            </footer>
            <MobileFooter />
        </>
    )
}
