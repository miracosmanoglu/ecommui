import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import HomePageTopSlider from '../components/HomePageTopSlider.js'
import HomePageBottomSlider from '../components/HomePageBottomSlider.js'
import HomePageGrid from '../components/HomePageGrid.js'
import HomePageBottomBanner from '../components/HomePageBottomBanner.js'
import { useState, useEffect } from 'react'

export default function Home() {

  const [perView, setPerView] = useState(3)

  useEffect(() => {
    window.innerWidth > 1300 ? setPerView(3) : null
    window.innerWidth < 1300 ? setPerView(2) : null
    window.innerWidth < 750 ? setPerView(1) : null
  }, [])
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>

      <>
        <HomePageTopSlider />
        <HomePageGrid />
        <HomePageBottomSlider perView={perView} />
        <HomePageBottomBanner />
      </>

    </Layout>
  )
}

