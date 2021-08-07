import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "semantic-ui-react";
import styles from "../styles/FaqPage.module.css";
import FaqAccordion from "../components/FaqAccordion";

export default function sikcasorulansorular() {
  return (
    <Layout>
      <Head>
        <title>Sıkça Sorulan Sorular</title>
      </Head>
      <div className={styles.faqBreadcrumb}>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Sıkça Sorulan Sorular</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <div className={styles.faqHead}>
        <div>
          <h2>SSS</h2>
        </div>
        <div className={styles.faqHeadImg}>
          <Image
            quality={65}
            width={1280}
            height={250}
            layout="fixed"
            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618596751/Wr0lKb_ndyjzk.png"
          />
        </div>
      </div>
      <main className={styles.faqMain}>
        <div className={styles.faqConUs}>
          <h4>Bize Ulaşın</h4>
          <span className={styles.faqConUsSpan}>
            Yardıma mı ihtiyacınız var?
          </span>
          <div className={styles.faqConUsIcon}>
            <i className="fas fa-phone-alt"></i>0 (850) 123 45 67
          </div>
          <div className={styles.faqConUsIcon}>
            <i className="far fa-envelope"></i>Bize E-Posta Gönder
          </div>
          <div className={styles.faqConUsIcon}>
            <i className="far fa-comment-alt"></i>Canlı Destek
          </div>
        </div>
        <div className={styles.faqContainer}>
          <h2>SIKÇA SORULAN SORULAR</h2>
          <p className={styles.faqContainerDesc}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
          <FaqAccordion />
          <FaqAccordion />
          <FaqAccordion />
          <FaqAccordion />
          <FaqAccordion />
          <FaqAccordion />
        </div>
      </main>
    </Layout>
  );
}
