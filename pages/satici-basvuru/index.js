import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import SellerApplicationPage from "../../components/SellerApplicationPage";
import styles from "../../styles/SellerApplicationPage.module.css";
import Link from "next/link";

import { useState } from "react";
import { Breadcrumb } from "semantic-ui-react";

export default function SaticiBasvuru() {
  const [section, setSection] = useState("firmaBilgileri");
  return (
    <Layout>
      <Head>
        <title>Satıcı Başvuru</title>
      </Head>
      <div className="myAccBread">
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Satıcı Başvuru</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <>
        <ul className={styles.sellerApplicationNavbar}>
          <li
            className={
              section === "firmaBilgileri" ? styles.activeSection : null
            }
            onClick={() => setSection("firmaBilgileri")}
          >
            Firma Bilgileri
          </li>
          <li
            className={
              section === "urunDetayBilgileri" ? styles.activeSection : null
            }
            onClick={() => setSection("urunDetayBilgileri")}
          >
            Ürün Detay Bilgileri
          </li>
          {/* <li
                        className={section === "evrakYukleme" ? styles.activeSection : null}
                        onClick={() => setSection("evrakYukleme")}>Evrak Yükleme</li> */}
          <li
            className={section === "urunOzeti" ? styles.activeSection : null}
            onClick={() => setSection("urunOzeti")}
          >
            Ürün Özeti
          </li>
        </ul>
        <SellerApplicationPage section={section} setSection={setSection} />
      </>
    </Layout>
  );
}
