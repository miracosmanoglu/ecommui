import styles from '../styles/HomePageBottomBanner.module.css'
import Image from 'next/image'

export default function HomePageBottomBanner({ bannerInfos }) {
    return (
        <div className={styles.HomePageBottomBanner}>
            <div className={styles.banner1}>
                <div className={styles.banner1Texts}>
                    <p className={styles.banner1Title}>Lorem İpsum</p>
                    <p className={styles.banner1Desc}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    <button className={styles.banner1Btn}><p>TÜMÜNÜ GÖR</p></button>
                </div>
                <div className={styles.imageContainer}>
                    <Image quality={65} layout="fill" src="https://i.hizliresim.com/DmEDnr.png" alt="homepagebanner1Img" />
                </div>
            </div>

            {bannerInfos ? bannerInfos.map((banner, index) =>
                <div key={index} className={styles.banner2}>
                    <div className={styles.banner2Texts}>
                        <p className={styles.banner2DiscountNumber}>%10</p>
                        <p className={styles.banner2Discount}>İndirimli</p>
                        <p className={styles.banner2Product}>Tarhana</p>
                    </div>
                    <div className={styles.imageContainer2}>
                        <Image quality={65} layout="fill"  src={banner.imageUrl} alt="homepagebanner2Img" />
                    </div>
                </div>
            ) : null}

        </div>
    )

}

