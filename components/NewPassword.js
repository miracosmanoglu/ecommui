import styles from '../styles/NewPassword.module.css'
import { useState, useEffect } from 'react';


export default function NewPassword() {

    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [changePass, setChangePass] = useState(false)

    useEffect(() => {
        return () => {
            setChangePass(false)
        }
    }, [])

    return (
        <>
            {changePass === false ?
                <div className={styles.newPasswordWrapper}>
                    <p className={styles.mainTitle}>Şifre Sıfırlama</p>
                    <form className={styles.registerForm}>
                        <p className={styles.desc}>
                            Tekrar hoşgeldiniz, yeni şifrenizi belirleyebilirsiniz.
                </p>
                        <input
                            type="password"
                            className={styles.passwordInput}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            placeholder="Yeni Şifreniz" />
                        <input
                            type="password"
                            className={styles.passwordInput}
                            onChange={(e) => {
                                setPassword2(e.target.value)
                            }}
                            placeholder="Şifre Tekrar" />

                        <div className={styles.btnDiv}>
                            <button
                                type="submit"
                                onClick={() => setChangePass(true)}
                                className={styles.changeBtn}>DEĞİŞTİR</button>
                            <button
                                className={styles.cancelBtn}>İPTAL</button>
                        </div>
                    </form>
                </div>
                :
                <div className={styles.newPasswordWrapper}>
                    <p className={styles.mainTitle}>Şifreniz Sıfırlandı</p>
                    <div className={styles.registerForm}>
                        <p className={styles.desc}>
                            Yeni şifreniz ile alışverişinize başlayabilirsiniz.
                </p>
                        <button
                            className={styles.startShoppingBtn}>ALIŞVERİŞE BAŞLA</button>
                    </div>
                </div>
            }
        </>
    )

}