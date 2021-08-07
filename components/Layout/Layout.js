import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Head from "next/head";
import Footer from "../Footer";
import axios from "axios";
function Layout({ children }) {
  useEffect(async () => {
    const menuItems = await axios.get(
      process.env.REACT_APP_CLIENT_API_URL + `/menu/list`
    );
    console.log(menuItems);
  }, []);
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <main className="fixedLayout">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
