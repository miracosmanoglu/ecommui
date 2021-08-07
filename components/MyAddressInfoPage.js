import styles from '../styles/MyAddressInfoPage.module.css'
import { useState } from 'react'
import { Dropdown, Checkbox } from 'semantic-ui-react'

export default function MyAddressInfoPage() {

    const countryOptions = [
        { value: 1, text: "01" },
        { value: 2, text: "02" },
        { value: 3, text: "03" },
        { value: 4, text: "04" }
    ]

    const cityOptions = [
        { value: 1, text: "01" },
        { value: 2, text: "02" },
        { value: 3, text: "03" },
        { value: 4, text: "04" }
    ]

    const districtOptions = [
        { value: 1, text: "01" },
        { value: 2, text: "02" },
        { value: 3, text: "03" },
        { value: 4, text: "04" }
    ]

    const [addAddress, setAddAddress] = useState(false)
    const [addressType, setAddressType] = useState("bireysel");
    const handleChange = (event, { value }) => setAddressType(value);

    const [degree, setDegree] = useState("")
    const [taxAdministration, setTaxAdministration] = useState("")
    const [taxNum, setTaxNum] = useState("")
    const [mail, setMail] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <div className={styles.myAddressInfoPageWrapper}>
            <div className={styles.mainTitleWrapper}>
                <p className={styles.mainTitle}>Adreslerim</p>
                <p onClick={() => setAddAddress(true)} className={styles.mainTitleLogOut}>Yeni Adres Ekle</p>
            </div>

            {addAddress === false ?
                <div className={styles.addressWrapper}>
                    <p className={styles.addressTitle}>Ev Adresim</p>
                    <div className={styles.addressBox}>
                        <div className={styles.addressTopButtons}>
                            <button className={styles.addressEditButton}>Düzenle</button>
                            <button className={styles.addressDeleteButton}>Sil</button>
                        </div>
                        <p className={styles.addressText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                    </div>
                </div>
                :

                <form className={styles.addressForm}>
                    <p className={styles.subTitle}>
                        Yeni Adres
                    </p>
                    <p className={styles.desc}>Adres Tipi</p>
                    <div className={styles.addressTypes}>
                        <label className={styles.addressType}>
                            <Checkbox
                                onChange={handleChange}
                                value='bireysel'
                                checked={addressType === 'bireysel'}
                                type="radio"
                                name="asss"
                                className="addressRadio" />
                            <p className={styles.addressTypeText}>Bireysel</p></label>
                        <label className={styles.addressType}>
                            <Checkbox
                                onChange={handleChange}
                                value='kurumsal'
                                checked={addressType === 'kurumsal'}
                                type="radio"
                                name="asss"
                                className="addressRadio" />
                            <p className={styles.addressTypeText}>Kurumsal</p></label>
                    </div>
                    {addressType === "kurumsal" ?
                        <>
                            <p className={styles.desc}>Unvan</p>
                            <input
                                type="text"
                                className={styles.degreeInput}
                                onChange={(e) => {
                                    setDegree(e.target.value)
                                }} />
                            <p className={styles.desc}>Vergi Dairesi</p>
                            <input
                                type="text"
                                className={styles.taxInput}
                                onChange={(e) => {
                                    setTaxAdministration(e.target.value)
                                }} />
                            <p className={styles.desc}>Vergi Numarası</p>
                            <input
                                type="number"
                                className={styles.taxNumInput}
                                onChange={(e) => {
                                    setTaxNum(e.target.value)
                                }} />
                        </> : null}
                    <p className={styles.desc}>Adres Adı (Ev Adresim, İş Adresim vb.)</p>
                    <input
                        type="mail"
                        className={styles.mailInput}
                        onChange={(e) => {
                            setMail(e.target.value)
                        }} />
                    <p className={styles.desc}>Adı Soyadı</p>
                    <input
                        type="text"
                        className={styles.fullNameInput}
                        onChange={(e) => {
                            setFullName(e.target.value)
                        }} />
                    <p className={styles.desc}>Cep Telefonu</p>
                    <input
                        type="number"
                        className={styles.phoneInput}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                        placeholder="XXXX XXX XX XX" />
                    <p className={styles.desc}>Ülke</p>
                    <Dropdown
                        selection
                        name='country'
                        options={countryOptions}
                        className="countryDropdown"
                        placeholder='Lütfen Ülke Seçiniz'
                        onChange={(e) => { console.log(e.target.value) }}
                    />
                    <p className={styles.desc}>Şehir</p>
                    <Dropdown
                        selection
                        name='city'
                        className="countryDropdown"
                        options={cityOptions}
                        placeholder='Lütfen Şehir Seçiniz'
                        onChange={(e) => { console.log(e.target.value) }}

                    />
                    <p className={styles.desc}>İlçe</p>
                    <Dropdown
                        selection
                        name='district'
                        className="countryDropdown"
                        options={districtOptions}
                        placeholder="Lütfen İlçe Seçiniz"
                        onChange={(e) => { console.log(e.target.value) }}
                    />
                    <p className={styles.desc}>Adres Detayı</p>
                    <textarea className={styles.addressTextArea} />
                    <div className={styles.addressBtns}>
                        <button
                            onClick={() => setAddAddress(false)}
                            type="submit"
                            className={styles.saveBtn}>KAYDET</button>
                        <button
                            onClick={() => setAddAddress(false)}
                            className={styles.cancelBtn}>İPTAL</button>
                    </div>
                </form>
            }
        </div>
    )

}