import styles from "../styles/AccountLeftSide.module.css";
import { useState } from "react";
import Image from "next/image";

export default function AccountLeftSide({ leftMenuOption, setLeftMenuOption }) {
  const [accordion, setAccordion] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);

  return (
    <>
      <div className={styles.leftSideWrapper}>
        <p
          onClick={() => setLeftMenuOption("uyelikBilgilerim")}
          className={styles.mainTitle}
        >
          Hesabım
        </p>
        <p
          onClick={() => setLeftMenuOption("uyelikBilgilerim")}
          style={
            leftMenuOption === "uyelikBilgilerim"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          className={styles.subTitle}
        >
          Üyelik Bilgilerim
        </p>
        <p
          onClick={() => setLeftMenuOption("adreslerim")}
          style={
            leftMenuOption === "adreslerim"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          className={styles.subTitle}
        >
          Adreslerim
        </p>
        <p
          onClick={() => setLeftMenuOption("kayitliKartlarim")}
          style={
            leftMenuOption === "kayitliKartlarim"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          className={styles.subTitle}
        >
          Kayıtlı Kartlarım
        </p>
        <br />
        <p
          onClick={() => setLeftMenuOption("siparisGecmisim")}
          className={styles.mainTitle}
        >
          Sipariş Bilgileri
        </p>
        <p
          onClick={() => setLeftMenuOption("siparisGecmisim")}
          style={
            leftMenuOption === "siparisGecmisim"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          className={styles.subTitle}
        >
          Sipariş Geçmişim
        </p>
        <p
          onClick={() => setLeftMenuOption("iadelerim")}
          style={
            leftMenuOption === "iadelerim"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          className={styles.subTitle}
        >
          İadelerim
        </p>
        <br />
        <p
          onClick={() => setLeftMenuOption("favoriDuzenle")}
          className={styles.mainTitle}
        >
          İstek Listesi
        </p>
        <p
          onClick={() => setLeftMenuOption("favoriDuzenle")}
          style={
            leftMenuOption === "favoriDuzenle"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
          className={styles.subTitle}
        >
          Favorileri Düzenle
        </p>
        <br />
        <p
          onClick={() => setLeftMenuOption("mesajlarim")}
          className={styles.mainTitle}
        >
          Mesajlarım
        </p>
        <p
          onClick={() => setLeftMenuOption("hediyeKuponlarim")}
          className={styles.mainTitle}
        >
          Hediye Kuponlarım
        </p>
      </div>

      <div className={styles.leftSideWrapperMobile}>
        <div
          onClick={() => setAccordion(!accordion)}
          className={styles.mainTitleMobile}
        >
          <p>Hesabım</p>
          {accordion ? (
            <Image
              quality={65}
              src="/arrowdown.svg"
              alt="arrow"
              width="9"
              height="9"
            />
          ) : (
            <Image
              quality={65}
              src="/nextIcon.svg"
              alt="arrow"
              width="5"
              height="9"
            />
          )}
        </div>
        {accordion ? (
          <>
            <p
              onClick={() => setLeftMenuOption("uyelikBilgilerim")}
              style={
                leftMenuOption === "uyelikBilgilerim"
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              className={styles.subTitle}
            >
              Üyelik Bilgilerim
            </p>
            <p
              onClick={() => setLeftMenuOption("adreslerim")}
              style={
                leftMenuOption === "adreslerim"
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              className={styles.subTitle}
            >
              Adreslerim
            </p>
            <p
              onClick={() => setLeftMenuOption("kayitliKartlarim")}
              style={
                leftMenuOption === "kayitliKartlarim"
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              className={styles.subTitle}
            >
              Kayıtlı Kartlarım
            </p>
          </>
        ) : null}
        <br />
        <div
          onClick={() => setAccordion2(!accordion2)}
          className={styles.mainTitleMobile}
        >
          <p>Sipariş Bilgileri</p>
          {accordion2 ? (
            <Image
              quality={65}
              src="/arrowdown.svg"
              alt="arrow"
              width="9"
              height="9"
            />
          ) : (
            <Image
              quality={65}
              src="/nextIcon.svg"
              alt="arrow"
              width="5"
              height="9"
            />
          )}
        </div>
        {accordion2 ? (
          <>
            <p
              onClick={() => setLeftMenuOption("siparisGecmisim")}
              style={
                leftMenuOption === "siparisGecmisim"
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              className={styles.subTitle}
            >
              Sipariş Geçmişim
            </p>
            <p
              onClick={() => setLeftMenuOption("iadelerim")}
              style={
                leftMenuOption === "iadelerim"
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              className={styles.subTitle}
            >
              İadelerim
            </p>
          </>
        ) : null}
        <br />
        <div
          onClick={() => setAccordion3(!accordion3)}
          className={styles.mainTitleMobile}
        >
          <p>İstek Listesi</p>
          {accordion3 ? (
            <Image
              quality={65}
              src="/arrowdown.svg"
              alt="arrow"
              width="9"
              height="9"
            />
          ) : (
            <Image
              quality={65}
              src="/nextIcon.svg"
              alt="arrow"
              width="5"
              height="9"
            />
          )}
        </div>
        {accordion3 ? (
          <>
            <p
              onClick={() => setLeftMenuOption("favoriDuzenle")}
              style={
                leftMenuOption === "favoriDuzenle"
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              className={styles.subTitle}
            >
              Favorileri Düzenle
            </p>
          </>
        ) : null}
        <br />
        <div
          onClick={() => setLeftMenuOption("mesajlarim")}
          className={styles.mainTitleMobile}
        >
          <p>Mesajlarım</p>
        </div>
        <br />
        <div
          onClick={() => setLeftMenuOption("hediyeKuponlarim")}
          className={styles.mainTitleMobile}
        >
          <p>Hediye Kuponlarım</p>
        </div>
        <br />
      </div>
    </>
  );
}
