import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, Dropdown } from "semantic-ui-react";
import styles from "../styles/ContactPage.module.css";

const options = [
  { key: 1, text: "Varsayılan", value: 1 },
  { key: 2, text: "En Çok Satılanlar", value: 2 },
  { key: 3, text: "Ucuzdan Pahalıya", value: 3 },
  { key: 4, text: "Pahalıdan Ucuza", value: 4 },
];

export default function iletisim() {
  const [openCustServ, setOpenCustServ] = useState(false);
  return (
    <Layout>
      <Head>
        <title>İletişim</title>
      </Head>
      <div className={styles.contactBreadcrumb}>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>İletişim</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <div className={styles.contactHead}>
        <div>
          <h2>İLETİŞİM</h2>
        </div>
        <div className={styles.contactHeadImg}>
          <Image
            quality={65}
            width={1280}
            height={250}
            layout="fixed"
            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618596751/Wr0lKb_ndyjzk.png"
          />
        </div>
      </div>
      <main className={styles.contactMain}>
        <div className={styles.contactConUs}>
          <h4>Bize Ulaşın</h4>
          <span className={styles.contactConUsSpan}>
            Yardıma mı ihtiyacınız var?
          </span>
          <div className={styles.contactConUsIcon}>
            <i className="fas fa-phone-alt"></i>0 (850) 123 45 67
          </div>
          <div className={styles.contactConUsIcon}>
            <i className="far fa-envelope"></i>Bize E-Posta Gönder
          </div>
          <div className={styles.contactConUsIcon}>
            <i className="far fa-comment-alt"></i>Canlı Destek
          </div>
        </div>
        <div className={styles.contactFormContainer}>
          <h2>İLETİŞİM</h2>
          <p className={styles.contactFormContainerDesc}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>

          <div className={styles.contactForm}>
            <form>
              <div className={styles.contactFormIL}>
                <label>* İsim, Soyisim</label>
                <input></input>
              </div>
              <div className={styles.contactFormIL}>
                <label>* E-Posta</label>
                <input></input>
              </div>
              <div className={styles.contactFormIL}>
                <label>Telefon</label>
                <input></input>
              </div>
              <div className={styles.contactFormIL}>
                <label>Size Nasıl Yardımcı Olabiliriz?</label>
                <Dropdown
                  defaultValue={1}
                  className="contactDropdown"
                  options={options}
                  selection
                />
              </div>
              <div className={styles.contactFormIL}>
                <label>Mesaj</label>
                <textarea></textarea>
              </div>
              <button className={styles.contactFormBtn}>GÖNDER</button>
            </form>
          </div>
        </div>
      </main>
      <div className={styles.customerSupport}>
        {openCustServ ? (
          <div className={styles.customerSupportChat}>
            <h6 onClick={() => setOpenCustServ(!openCustServ)}>
              Canlı Destek <span>-</span>
            </h6>
            <div className={styles.customerSupportChatForm}>
              <p style={{ fontSize: "13px" }}>
                Sohbet etmeyi çok isteriz! Haftanın 7 günü, 09:00 - 19:00
                buradayız. Mesaj bırakın, tekrar çevrimiçi olduğumuzda sizinle
                iletişime geçelim.
              </p>
              <form>
                <div className={styles.contactFormIL}>
                  <label>* İsim, Soyisim</label>
                  <input></input>
                </div>
                <div className={styles.contactFormIL}>
                  <label>* E-Posta</label>
                  <input></input>
                </div>
                <div className={styles.contactFormIL}>
                  <label>Mesaj</label>
                  <textarea></textarea>
                </div>
                <div className={styles.contactFormILCustomer}>
                  <button className={styles.contactFormBtn}>GÖNDER</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setOpenCustServ(!openCustServ)}
            className={styles.customerSupportJoin}
          >
            <i className="far fa-comment-alt"></i>{" "}
            <span>Canlı Destek - Kapalı</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
