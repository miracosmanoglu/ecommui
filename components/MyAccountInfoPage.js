import styles from "../styles/MyAccountInfoPage.module.css";
import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import InputMask from "react-input-mask";

export default function Register({ accountInfo }) {
  const dayOptions = [
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
  const genderOptions = [
    { value: 1, text: "01" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const [notification, setNotification] = useState("");

  useEffect(() => {
    setMail(accountInfo.email || "");
    setFullName(
      `${accountInfo.firstName || ""} ${accountInfo.lastName || ""}` || ""
    );
    setPhone(accountInfo.mobilePhoneNumber || "");
  }, [accountInfo]);

  const [mail, setMail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className={styles.myAccountWrapper}>
      <div className={styles.mainTitleWrapper}>
        <p className={styles.mainTitle}>Hesabım</p>
        <p className={styles.mainTitleLogOut}>Çıkış Yap</p>
      </div>
      {notification ? (
        <p
          className={styles.notification}
          style={
            notification ===
            "Hatalı Giriş, Lütfen Bilgilerinizi Kontrol Ediniz."
              ? { backgroundColor: "rgb(190 0 0 / 15%)", color: "#BE0000" }
              : null
          }
        >
          {notification}
        </p>
      ) : null}
      <form className={styles.accountForm}>
        <p className={styles.subTitle}>Üyelik Bilgilerim</p>
        <p className={styles.desc}>E-Posta</p>
        <input
          type="mail"
          className={styles.mailInput}
          //   onChange={(e) => {
          //     setMail(e.target.value);
          //   }}
          placeholder="E-Postanız"
        />
        <p className={styles.desc}>Adı Soyadı</p>
        <input
          type="text"
          className={styles.fullNameInput}
          //   onChange={(e) => {
          //     setFullName(e.target.value);
          //   }}
          placeholder="Adı Soyadı"
        />
        <p className={styles.desc}>Cep Telefonu</p>
        {/* <input
                    type='text'
                    className={styles.phoneInput}
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                    placeholder="XXXX XXX XX XX" /> */}
        <InputMask
          className={styles.phoneInput}
          mask="999-999-9999"

          //   onChange={(e) => {
          //     setPhone(e.target.value);
          //   }}
        />
        <p className={styles.desc}>Doğum Tarihi</p>
        <div className={styles.birthDateWrapper}>
          <Dropdown
            selection
            name="day"
            options={dayOptions}
            className="dayDropdown"
            placeholder="Gün"
            onChange={(e, { value }) => {
              console.log(value);
            }}
          />
          <Dropdown
            selection
            name="month"
            className="dayDropdown"
            options={monthOptions}
            placeholder="Ay"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Dropdown
            selection
            name="year"
            className="dayDropdown"
            options={yearOptions}
            placeholder="Yıl"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <p className={styles.desc}>Cinsiyet</p>
        <Dropdown
          selection
          name="gender"
          className="genderDropdown"
          options={genderOptions}
          placeholder="Cinsiyet"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <label className={styles.campaingLabel} htmlFor="campaignReminder">
          <input
            id="campaignReminder"
            type="checkbox"
            // onClick={(e) => {
            //     setCampaign(!campaign)
            // }}
          />
          <p className={styles.campaignText}>
            Kampanya ve duyuruları mail ile almak istiyorum.
          </p>
        </label>
        <div className={styles.accountBtns}>
          <button type="submit" className={styles.saveBtn}>
            KAYDET
          </button>
          <button className={styles.cancelBtn}>İPTAL</button>
        </div>
      </form>
      <form className={styles.accountForm}>
        <p className={styles.subTitle}>Şifremi Değiştir</p>
        <p className={styles.desc}>Eski Şifreniz</p>
        <input
          type="password"
          className={styles.passwordInput}
          //   onChange={(e) => {
          //     setOldPassword(e.target.value);
          //   }}
          placeholder="Eski şifrenizi girmeniz zorunludur."
        />
        <p className={styles.desc}>Yeni Şifre</p>
        <input
          type="password"
          className={styles.passwordInput}
          //   onChange={(e) => {
          //     setNewPassword(e.target.value);
          //   }}
          placeholder="Yeni Şifre"
        />
        <p className={styles.desc}>Yeni Şifre Tekrar</p>
        <input
          type="password"
          className={styles.passwordInput}
          //   onChange={(e) => {
          //     setNewPassword2(e.target.value);
          //   }}
          placeholder="Yeni Şifre Tekrar"
        />

        <div className={styles.accountBtns}>
          <button type="submit" className={styles.saveBtn}>
            DEĞİŞTİR
          </button>
          <button className={styles.cancelBtn}>İPTAL</button>
        </div>
      </form>
    </div>
  );
}
