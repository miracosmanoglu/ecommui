import styles from "../styles/MySavedCard.module.css";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "semantic-ui-react";

export default function MySavedCard() {
  const countryOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const cityOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const districtOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const monthOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const yearOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const [addCard, setAddCard] = useState(false);

  const [degree, setDegree] = useState("");
  const [taxNum, setTaxNum] = useState("");
  const [mail, setMail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [cardTitleChange, setCardTitleChange] = useState(false);

  return (
    <div className={styles.mySavedCardWrapper}>
      <div className={styles.mainTitleWrapper}>
        <p className={styles.mainTitle}>Kayıtlı Kartlarım</p>
        <p onClick={() => setAddCard(true)} className={styles.mainTitleLogOut}>
          Kredi Kartı Ekle
        </p>
      </div>

      {addCard === false ? (
        <>
          <p className={styles.cardText}>Lorem İpsum Dolor Sit Amet</p>
          <div className={styles.cardWrapper}>
            <div className={styles.cardLeft}>
              {cardTitleChange === false ? (
                <p className={styles.cardTitle}>
                  MASTERCARD
                  <Image
                    quality={65}
                    onClick={() => setCardTitleChange(true)}
                    src="/editIcon.svg"
                    alt="edit"
                    width="11"
                    height="10"
                  />
                </p>
              ) : (
                <div className={styles.cardTitleChangeWrapper}>
                  <input
                    type="text"
                    className={styles.minicardTitleInput}
                    onChange={(e) => {
                      setDegree(e.target.value);
                    }}
                  />
                  <button className={styles.minisaveBtn}>KAYDET</button>
                  <button
                    onClick={() => setCardTitleChange(false)}
                    className={styles.minicancelBtn}
                  >
                    Vazgeç
                  </button>
                </div>
              )}
              <p className={styles.cardNumber}>123456***********6789</p>
            </div>
            <p className={styles.cardRight}>Kartımı Sil</p>
          </div>
        </>
      ) : (
        <form className={styles.newCardForm}>
          <p className={styles.subTitle}>Yeni Kredi Kartı</p>
          <p className={styles.desc}>Telefon Numaranız</p>
          <input
            type="number"
            className={styles.telNumInput}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <p className={styles.desc}>Kart İsmi</p>
          <input
            type="text"
            className={styles.cardTitleInput}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <p className={styles.desc}>Kart Numarası</p>
          <input
            type="number"
            className={styles.cardNumberInput}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />

          <p className={styles.desc}>Son Kullanma Tarihi</p>
          <div className={styles.expirationDateDropdown}>
            <Dropdown
              selection
              name="month"
              options={monthOptions}
              className="cardDropdown"
              placeholder="Ay"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <Dropdown
              selection
              name="year"
              className="cardDropdown"
              options={yearOptions}
              placeholder="Yıl"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
          <p className={styles.desc}>Güvenlik Numarası</p>
          <div className={styles.cardSecurityNumBox}>
            <input
              type="number"
              className={styles.cardSecurityNumInput}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <p className={styles.cardSecurityNumText}>
              Kredi kartınızın arka yüzündeki 3 veya 4 haneli CVC2 kodunu
              giriniz.
            </p>
          </div>
          <label className={styles.readLabel} htmlFor="readandunderstand">
            <input
              id="readandunderstand"
              type="checkbox"
              // onClick={(e) => {
              //   setReadandunderstand(!readandunderstand);
              // }}
            />
            <p className={styles.readText}>
              Kart bilgilerimi sonraki alışverişlerim için altyapınızda saklamak
              istiyorum. <span>Kullanım şartlarını</span> okudum ve onaylıyorum.
            </p>
          </label>
          <div className={styles.cardBtns}>
            <button
              onClick={() => setAddCard(false)}
              type="submit"
              className={styles.saveBtn}
            >
              KAYDET
            </button>
            <button
              onClick={() => setAddCard(false)}
              className={styles.cancelBtn}
            >
              İPTAL
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
