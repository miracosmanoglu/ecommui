import styles from "../styles/Register.module.css";
import { useState } from "react";

export default function Register({ setRegisterPage }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [campaign, setCampaign] = useState(false);
  const [readandunderstand, setReadandunderstand] = useState(false);

  return (
    <div className={styles.registerWrapper}>
      <p className={styles.mainTitle}>Üye Ol</p>
      <form className={styles.registerForm}>
        <p className={styles.subTitle}>İsim</p>
        <input
          type="text"
          className={styles.nameInput}
          required
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}
          placeholder="Adınız"
        />
        <input
          type="text"
          required
          className={styles.surnameInput}
          //   onChange={(e) => {
          //     setSurname(e.target.value);
          //   }}
          placeholder="Soyadınız"
        />
        <p className={styles.subTitle}>Giriş Bilgileri</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            required
            className={styles.mailInput}
            // onChange={(e) => {
            //   setMail(e.target.value);
            // }}
            placeholder="E-posta"
          />
          <input
            type="email"
            required
            className={styles.mailInput}
            // onChange={(e) => {
            //   setMail2(e.target.value);
            // }}
            placeholder="E-posta Tekrarı"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="password"
            required
            className={styles.passwordInput}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            placeholder="Şifre"
          />
          <input
            type="password"
            required
            className={styles.passwordInput}
            // onChange={(e) => {
            //   setPassword2(e.target.value);
            // }}
            placeholder="Şifre Tekrarı"
          />
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <label className={styles.campaignLabel} htmlFor="campaignReminder">
          <input
            id="campaignReminder"
            type="checkbox"
            // onClick={(e) => {
            //     setCampaign(!campaign)
            // }}
          />
          <p className={styles.campaignText}>
            Kampanyalardan haberdar olmak istiyorum, elektronik iletilere iznim
            vardır.
          </p>
        </label>
        <label className={styles.campaignLabel} htmlFor="readandunderstand">
          <input
            id="readandunderstand"
            type="checkbox"
            required
            // onClick={(e) => {
            //   setReadandunderstand(!readandunderstand);
            // }}
          />
          <p className={styles.readText}>
            <span>Üyelik sözleşmesini</span> ve <span>açık rıza metnini</span>{" "}
            okudum, onaylıyorum.
          </p>
        </label>
        <button type="submit" className={styles.registerFormBtn}>
          ÜYE OL
        </button>
      </form>
      <p className={styles.or}>veya</p>
      <button className={styles.signWithSocial}>FACEBOOK İLE ÜYE OL</button>
      <button className={styles.signWithSocial}>GOOGLE İLE ÜYE OL</button>
      <button className={styles.signWithSocial}>APPLE İLE ÜYE OL</button>
    </div>
  );
}
