import styles from '../styles/ForgotPasswordModal.module.css'
import { useState } from 'react';
import { Modal } from 'semantic-ui-react'


export default function ForgotPasswordModal() {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState(false)

    return (
        <Modal
            onClose={() => {
                setOpen(false)
                setText(false)
            }}
            className={styles.forgotPasswordModal}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<p className={styles.forgotPasswordText}>Şifrenizi mi unuttunuz?</p>}
        >
            <>
                <div className={styles.forgotPasswordWrapper}>
                    <p className={styles.mainTitle}>PAROLA SIFIRLAMA İSTEĞİ</p>
                    {text === false ? //ileride requestten dönen statuse göre sorgu yapılacak
                        <>
                            <p className={styles.desc}>Yeni şifreniz için, lütfen e-posta adresinizi yazınız.</p>
                            <input type="email" className={styles.mailInput} placeholder="E-Posta Adresiniz" />
                            <button
                                type="submit"
                                onClick={() => {
                                    setText(true)
                                }}
                                className={styles.submitBtn}><p>GÖNDER</p></button>
                        </>
                        :
                        <p className={styles.desc}>Şifre sıfırlama isteğiniz kayıtlı e-posta adresinize gönderilmiştir.
Şifrenizi değiştirebilmeniz için e-postanızın gelen kutusuna göz atınız. Gelen kutusunda göremiyorsanız lütfen spam kutunuzu kontrol ediniz.</p>}
                </div>
            </>
        </Modal>
    )
}