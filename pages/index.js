import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import HomePageTopSlider from '../components/HomePageTopSlider.js'
import HomePageBottomSlider from '../components/HomePageBottomSlider.js'
import HomePageGrid from '../components/HomePageGrid.js'
import HomePageBottomBanner from '../components/HomePageBottomBanner.js'
import { useState, useEffect } from 'react'

export default function Home({ sliderInfos, bannerInfos }) {

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
        <HomePageTopSlider sliderInfos={sliderInfos} />
        <HomePageGrid bannerInfos={bannerInfos} />
        <HomePageBottomSlider perView={perView} />
        <HomePageBottomBanner bannerInfos={bannerInfos} />
      </>

    </Layout>
  )
}

export async function getServerSideProps(context) {
  // ---/slider/get
  const res = await fetch(process.env.NEXT_APP_API_URL + `/slider/get/1`, {
    method: 'GET',
  })
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  
  // ---/banner/list
  const res2 = await fetch(process.env.NEXT_APP_API_URL + `/banner/list`, {
    method: 'GET',
  })
  const data2 = await res2.json()

  if (!data2) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      sliderInfos: data,
      bannerInfos: data2
    },
  }
}
