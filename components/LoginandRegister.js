import styles from '../styles/LoginandRegister.module.css'
import { useState } from 'react'
import ForgotPasswordModal from "./ForgotPasswordModal"
import { useRouter } from 'next/router'

export default function LoginandRegister({ setRegisterPage }) {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const router = useRouter()
    const [notification, setNotification] = useState("")

    return (
        <div className={styles.loginandregisterWrapper}>
            <p className={styles.mainTitle}>Hesaba Giriş</p>
            {notification ? <p className={styles.notification} style={notification === 'Hatalı Giriş, Lütfen Bilgilerinizi Kontrol Ediniz.' ? { backgroundColor: 'rgb(190 0 0 / 15%)', color: "#BE0000" } : null}>{notification}</p> : null}
            <div className={styles.loginandregisterSide}>
                <div className={styles.loginSide}>
                    <form className={styles.loginForm}>
                        <p className={styles.subTitle}>
                            Üye Girişi
                        </p>
                        <p className={styles.desc}>
                            Lütfen e-posta adresinizi ve şifrenizi giriniz.
                        </p>
                        <input
                            type="email"
                            className={styles.mailInput}
                            onChange={(e) => {
                                setMail(e.target.value)
                            }}
                            placeholder="E-postanız" />
                        <input
                            type="password"
                            className={styles.passwordInput}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            placeholder="Şifreniz" />
                        <label
                            className={styles.rememberLabel}

                            htmlFor="rememberMe">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                onClick={(e) => {
                                    setRememberMe(!rememberMe)
                                }}
                                className={styles.rememberMeCheck} />
                            <p className={styles.rememberMeText}>Beni Hatırla</p>
                        </label>
                        <button
                            type="submit"
                            className={styles.loginFormBtn}>GİRİŞ YAP</button>
                    </form>
                    <ForgotPasswordModal />
                    <p className={styles.or}>veya</p>
                    <button
                        className={styles.signWithSocial}>FACEBOOK İLE DEVAM ET</button>
                    <button
                        className={styles.signWithSocial}>GOOGLE İLE DEVAM ET</button>
                    <button
                        className={styles.signWithSocial}>APPLE İLE DEVAM ET</button>
                </div>
                <div className={styles.registerSide}>
                    <p className={styles.subTitle}>Üye Ol</p>
                    <p className={styles.desc}>Kişiselleştirilmiş Firma İsmi  hesabınızı oluşturun! Siparişlerinizi takip edebilir,
                        istek listenizi güncelleyebilir ve paylaşabilir, fatura/nakliye bilgilerini düzenleyebilir ve daha fazlasını yapabilirsiniz.</p>
                    <button
                        onClick={() => setRegisterPage(true)}
                        className={styles.signBtn}>ÜYE OL</button>
                </div>
            </div>
        </div>
    )

}