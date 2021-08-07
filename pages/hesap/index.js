import Head from "next/head";
import Layout from "../../components/Layout/Layout";
// import styles from '../styles/Home.module.css'
import AccountLeftSide from "../../components/AccountLeftSide";
import MyAccountInfoPage from "../../components/MyAccountInfoPage";
import MyAddressInfoPage from "../../components/MyAddressInfoPage";
import MySavedCard from "../../components/MySavedCard";
import MyOrdersPage from "../../components/MyOrdersPage";
import MyOrderReturnsPage from "../../components/MyOrderReturnsPage";
import MyMessagesPage from "../../components/MyMessagesPage";
import MyGiftCoupons from "../../components/MyGiftCoupons";
import MyFavoritesPage from "../../components/MyFavoritesPage";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Breadcrumb } from "semantic-ui-react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import styles from "../../styles/AccountLeftSide.module.css";
import withAuth from "../../components/utils/withAuth";
import NoSsr from "../../components/utils/NoSsr";

function Account2() {
  const cookies = new Cookies();
  useEffect(async () => {
    if (cookies.get("jwt")) {
      const accountResponse = await axios.get(
        process.env.REACT_APP_CLIENT_API_URL + `/user/data/customer`,
        {
          headers: {
            Authorization: `${cookies.get("jwt")}`,
          },
        }
      );
      setAccountInfo(accountResponse.data);
    }
  }, []);

  const [accountInfo, setAccountInfo] = useState("");

  const [leftMenuOption, setLeftMenuOption] = useState("uyelikBilgilerim");

  return (
    <NoSsr>
      <Layout>
        <Head>
          <title>Hesap Bilgilerim</title>
        </Head>
        <div className="myAccBread">
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link href="/">
                <a>Anasayfa</a>
              </Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section active>Hesabım</Breadcrumb.Section>
          </Breadcrumb>
        </div>

        <div className={styles.accountIndexPage}>
          <AccountLeftSide
            leftMenuOption={leftMenuOption}
            setLeftMenuOption={setLeftMenuOption}
          />
          {leftMenuOption === "uyelikBilgilerim" ? (
            <MyAccountInfoPage accountInfo={accountInfo} />
          ) : null}
          {leftMenuOption === "adreslerim" ? <MyAddressInfoPage /> : null}
          {leftMenuOption === "kayitliKartlarim" ? <MySavedCard /> : null}
          {leftMenuOption === "siparisGecmisim" ? <MyOrdersPage /> : null}
          {leftMenuOption === "iadelerim" ? <MyOrderReturnsPage /> : null}
          {leftMenuOption === "favoriDuzenle" ? <MyFavoritesPage /> : null}
          {leftMenuOption === "mesajlarim" ? <MyMessagesPage /> : null}
          {leftMenuOption === "hediyeKuponlarim" ? <MyGiftCoupons /> : null}
        </div>
      </Layout>
    </NoSsr>
  );
}

export default withAuth(Account2);
