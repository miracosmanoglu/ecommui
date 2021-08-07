import styles from "../styles/SellerCompanyInfos.module.css";
import Image from "next/image";
import { Dropdown } from "semantic-ui-react";

export default function SellerCompanyInfos({ section, setSection }) {
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

  return (
    <form className={styles.companyInfoForm}>
      <p className={styles.desc}>Başvuru Tipi</p>
      <Dropdown
        selection
        name="applicationType"
        className="compnayInfoDropdown"
        options={cityOptions}
        placeholder="Başuvur Tipi"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <p className={styles.desc}>Firma Adı (Ticaret Ünvanı)</p>
      <Dropdown
        selection
        name="applicationType"
        className="compnayInfoDropdown"
        options={cityOptions}
        placeholder="Firma Adı (Ticaret Ünvanı)"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <p className={styles.desc}>Firma Türü</p>
      <Dropdown
        selection
        name="applicationType"
        className="compnayInfoDropdown"
        options={cityOptions}
        placeholder="Firma Türü"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <p className={styles.desc}>VKN / TCKN</p>
      <Dropdown
        selection
        name="applicationType"
        className="compnayInfoDropdown"
        options={cityOptions}
        placeholder="VKN / TCKN"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <p className={styles.desc}>Satış Yapılacak Kategori</p>
      <Dropdown
        selection
        name="applicationType"
        className="compnayInfoDropdown"
        options={cityOptions}
        placeholder="Satış Yapılacak Kategori"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <p className={styles.desc}>Yetkili Adı Soyadı</p>
      <input type="text" className={styles.fullNameInput} />
      <p className={styles.desc}>Yetkili E-Posta</p>
      <input type="email" className={styles.mailInput} />
      <p className={styles.desc}>Yetkili Telefon Numarası</p>
      <input
        type="number"
        className={styles.phoneInput}
        placeholder="Yetkili Telefon Numarası"
      />

      <div className={styles.companyInfoBtns}>
        <button className={styles.prevBtn}>
          <Image
            quality={65}
            src="/prevIcon.svg"
            alt="timer"
            width="5"
            height="9"
          />
          <p>GERİ DÖN</p>
        </button>
        <button
          onClick={() => {
            setSection("urunDetayBilgileri");
          }}
          className={styles.continueBtn}
        >
          DEVAM ET
        </button>
      </div>
    </form>
  );
}
