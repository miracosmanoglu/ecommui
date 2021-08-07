
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/ProductsOrganic.module.css";
import Link from "next/link";
import { Breadcrumb } from "semantic-ui-react";
import Layout from "../../../components/Layout/Layout";

export default function organikgida({ categoriesData }) {
  return (
    <Layout>
      <Head>
        <title>Organik Gıdalar</title>
      </Head>
      <main className={styles.productsMainContainer}>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Organik Gıda</Breadcrumb.Section>
        </Breadcrumb>
        <h1>ORGANİK GIDA</h1>
        <div className={styles.parent}>
          <div className={styles.div1}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[0].name}-${categoriesData[0].id}`}
            >
              <a>
                <Image
                  priority
                  quality={50}
                  layout="fill"
                  src="https://i.hizliresim.com/DXk8kj.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductText} style={{ width: "250px" }}>
                  {categoriesData[0].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div2}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[1].name}-${categoriesData[1].id}`}
            >
              <a>
                <Image
                  priority
                  quality={50}
                  layout="fill"
                  src="https://i.hizliresim.com/SU1tr2.png"
                  alt="homepagetopsliderImg"
                />
                <p
                  className={styles.divProductText}
                  style={{ right: "10px", bottom: "10px" }}
                >
                  {categoriesData[1].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div3}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[2].name}-${categoriesData[2].id}`}
            >
              <a>
                <Image
                  priority
                  quality={50}
                  layout="fill"
                  src="https://i.hizliresim.com/bh2mYz.png"
                  alt="homepagetopsliderImg"
                />
                <p
                  className={styles.divProductText}
                  style={{ right: "10px", bottom: "10px" }}
                >
                  {categoriesData[2].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div4}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[3].name}-${categoriesData[3].id}`}
            >
              <a>
                <Image
                  priority
                  quality={50}
                  layout="fill"
                  src="https://i.hizliresim.com/XjuOCX.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductText}>
                  {categoriesData[3].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div5}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[4].name}-${categoriesData[4].id}`}
            >
              <a>
                <Image
                  priority
                  quality={50}
                  layout="fill"
                  src="https://i.hizliresim.com/KrcWjx.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductText}>
                  {categoriesData[4].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div6}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[5].name}-${categoriesData[5].id}`}
            >
              <a>
                <Image
                  priority
                  quality={50}
                  layout="fill"
                  src="https://i.hizliresim.com/eshUad.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductText} style={{ left: "18px" }}>
                  {categoriesData[5].name}
                </p>
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.parentm}>
          <div className={styles.div1m}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[0].name}-${categoriesData[0].id}`}
            >
              <a>
                <Image
                  quality={50}
                  priority
                  layout="fill"
                  src="https://i.hizliresim.com/DXk8kj.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductTextm}>
                  {categoriesData[0].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div2m}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[1].name}-${categoriesData[1].id}`}
            >
              <a>
                <Image
                  quality={50}
                  priority
                  layout="fill"
                  src="https://i.hizliresim.com/eshUad.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductTextm} style={{ left: "18px" }}>
                  {categoriesData[1].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div3m}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[2].name}-${categoriesData[2].id}`}
            >
              <a>
                <Image
                  quality={50}
                  priority
                  layout="fill"
                  src="https://i.hizliresim.com/DXk8kj.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductTextm}>
                  {categoriesData[2].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div4m}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[3].name}-${categoriesData[3].id}`}
            >
              <a>
                <Image
                  quality={50}
                  priority
                  layout="fill"
                  src="https://i.hizliresim.com/eshUad.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductTextm} style={{ left: "18px" }}>
                  {categoriesData[3].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div5m}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[4].name}-${categoriesData[4].id}`}
            >
              <a>
                <Image
                  quality={50}
                  priority
                  layout="fill"
                  src="https://i.hizliresim.com/DXk8kj.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductTextm}>
                  {categoriesData[4].name}
                </p>
              </a>
            </Link>
          </div>

          <div className={styles.div6m}>
            <Link
              href={`/magaza/organik-gida/${categoriesData[5].name}-${categoriesData[5].id}`}
            >
              <a>
                <Image
                  quality={50}
                  priority
                  layout="fill"
                  src="https://i.hizliresim.com/eshUad.png"
                  alt="homepagetopsliderImg"
                />
                <p className={styles.divProductTextm} style={{ left: "18px" }}>
                  {categoriesData[5].name}
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_APP_API_URL + `/categories`, {
    method: "GET",
    headers: { Authorization: `${context.req.cookies.jwt}` },
  });
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      categoriesData: data,
    },
  };
}
