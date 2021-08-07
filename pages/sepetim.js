import React, { useEffect, useState } from "react";
import { Breadcrumb, Checkbox, Dropdown, Modal } from "semantic-ui-react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/BasketPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, A11y]);

const options = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
  { key: 4, text: "4", value: 4 },
  { key: 5, text: "5", value: 5 },
];

export default function sepetim() {
  const countryOptions = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 },
  ];

  const cityOptions = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 },
  ];

  const districtOptions = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 },
  ];

  const monthOptions = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 },
  ];

  const yearOptions = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 },
  ];

  const [addAddress, setAddAddress] = useState(false);
  const [addressType, setAddressType] = useState("bireysel");
  const handleChange = (event, { value }) => setAddressType(value);

  const [sldPerW, setSldPerW] = useState(3);

  const [degree, setDegree] = useState("");
  const [taxAdministration, setTaxAdministration] = useState("");
  const [taxNum, setTaxNum] = useState("");
  const [mail, setMail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [onCont, setOnCont] = useState(1);
  const [openDiscCode, setOpenDiscCode] = useState(false);

  const [openAccordion, setOpenAccordion] = useState(false);
  const [openAccordion2, setOpenAccordion2] = useState(false);
  const [openAccordion3, setOpenAccordion3] = useState(false);

  const [openAdressForm, setOpenAdressForm] = useState(false);

  useEffect(() => {
    window.innerWidth < 850 ? setSldPerW(2) : null;
    window.innerWidth < 560 ? setSldPerW(1) : null;
  }, []);

  return (
    <Layout>
      <div className={styles.shipBreadCrumb}>
        <Breadcrumb>
          <Breadcrumb.Section>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section active>Sepetim</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      {onCont === 1 ? (
        <main className={styles.shipMainContainer}>
          <div className={styles.shipHeader}>
            <h3>Alışveriş Sepetim</h3>
            <span>2 Ürün</span>
          </div>
          <div className={styles.shipCenter}>
            <div className={styles.shipProducts}>
              <ul>
                <li>Ürün</li>
                <li>Fiyat</li>
                <li>Adet</li>
                <li>Toplam Fiyat</li>
              </ul>
              <div className={styles.shipProduct}>
                <div className={styles.shipProductImgCon}>
                  <div className={styles.shipProductImage}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                  <div className={styles.shipProductDescrip}>
                    <h4>Beyorganik</h4>
                    <h5>Pilavlık Bulgur Köy Tipi</h5>
                    <p>1 Adet / Krem / 37</p>
                    <h6>
                      Satıcı:{" "}
                      <span style={{ fontWeight: "normal" }}>Beyorganik</span>
                    </h6>
                  </div>
                </div>
                <div className={styles.shipProductDescPrice}>
                  <span>60,16 TL</span>
                  <strong>30,08 TL</strong>
                </div>
                <div className={styles.counterDrop}>
                  <Dropdown
                    defaultValue={1}
                    className="basketCountDrop"
                    options={options}
                    selection
                  />
                </div>
                <strong className={styles.shipTotalPriceL}>30,08 TL</strong>
                <div className={styles.shipProductImageDelete}>
                  <Image
                    quality={65}
                    layout="fill"
                    src="/closeBaskShip.svg"
                    alt="homepagebottomsliderImg"
                  />
                </div>
              </div>
              <div className={styles.shipProduct}>
                <div className={styles.shipProductImgCon}>
                  <div className={styles.shipProductImage}>
                    <Image
                      quality={65}
                      layout="fill"
                      src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                      alt="homepagebottomsliderImg"
                    />
                  </div>
                  <div className={styles.shipProductDescrip}>
                    <h4>Beyorganik</h4>
                    <h5>Pilavlık Bulgur Köy Tipi</h5>
                    <p>1 Adet / Krem / 37</p>
                    <h6>
                      Satıcı:{" "}
                      <span style={{ fontWeight: "normal" }}>Beyorganik</span>
                    </h6>
                  </div>
                </div>
                <div className={styles.shipProductDescPrice}>
                  <span>60,16 TL</span>
                  <strong>30,08 TL</strong>
                </div>
                <div className={styles.counterDrop}>
                  <Dropdown
                    defaultValue={1}
                    className="basketCountDrop"
                    options={options}
                    selection
                  />
                </div>
                <strong className={styles.shipTotalPriceL}>30,08 TL</strong>
                <div className={styles.shipProductImageDelete}>
                  <Image
                    quality={65}
                    layout="fill"
                    src="/closeBaskShip.svg"
                    alt="homepagebottomsliderImg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.shipPayment}>
              <div className={styles.shipPaymentRCard}>
                <strong>Sipariş Özeti</strong>
                <div className={styles.shipPaymentRCardInfos}>
                  <span>Ürün Toplamı</span>
                  <span>60,16 TL</span>
                </div>
                <div className={styles.shipPaymentRCardInfos}>
                  <span>Kargo Toplamı</span>
                  <span>60,16 TL</span>
                </div>
                <p>
                  Kargo ücreti ödememeniz için sepetinizdeki tüm ürünlerin kargo
                  ücretsiz olması gerekmektedir.
                </p>
                <div
                  className={`${styles.shipPaymentRCardInfos} ${styles.shipPaymentRCardInfosBB}`}
                >
                  <span>İndirim</span>
                  <span>60,16 TL</span>
                </div>
                <div className={styles.shipPaymentRCardInfos}>
                  <span>Toplam</span>
                  <span>69,16 TL </span>
                </div>
              </div>
              <button
                onClick={() => setOpenDiscCode(!openDiscCode)}
                className={styles.shipPromotionCodeBtn}
              >
                İndirim Kodu <span>{openDiscCode ? "-" : "+"}</span>
              </button>
              {openDiscCode ? (
                <div className={styles.shipPromotionCodeBtnInput}>
                  <input></input>
                  <button>EKLE</button>
                </div>
              ) : null}
              <button
                onClick={() => setOnCont(2)}
                className={styles.shipGoPaymentBtn}
              >
                DEVAM
              </button>
            </div>
          </div>
          <div>
            <div className={styles.baskRecommendedCC}>
              <h4>Bunlarda hoşunuza gidebilir</h4>
            </div>
            <div className={styles.baskRecommendedSwip}>
              <Swiper
                slidesPerView={sldPerW}
                spaceBetween={0}
                navigation
                className="baskReccommendedSlider"
              >
                <SwiperSlide>
                  <div className={styles.productContainerCC}>
                    <Link href="/organik-gida/kuru-gidalar/1">
                      <a>
                        <div className={styles.productImageCC}>
                          <Image
                            quality={65}
                            layout="fill"
                            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                            alt="homepagebottomsliderImg"
                          />
                        </div>
                        <div className={styles.productInfoCC}>
                          <h2>Beyorganik</h2>
                          <h3>Organik Pilavlık Bulgur Köy Tipi</h3>
                          <p>30,08 TL</p>
                        </div>
                      </a>
                    </Link>
                    <button className={styles.addBasketBtnCC}>
                      SEPETE EKLE
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.productContainerCC}>
                    <Link href="/organik-gida/kuru-gidalar/1">
                      <a>
                        <div className={styles.productImageCC}>
                          <Image
                            quality={65}
                            layout="fill"
                            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                            alt="homepagebottomsliderImg"
                          />
                        </div>
                        <div className={styles.productInfoCC}>
                          <h2>Beyorganik</h2>
                          <h3>Organik Pilavlık Bulgur Köy Tipi</h3>
                          <p>30,08 TL</p>
                        </div>
                      </a>
                    </Link>
                    <button className={styles.addBasketBtnCC}>
                      SEPETE EKLE
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.productContainerCC}>
                    <Link href="/organik-gida/kuru-gidalar/1">
                      <a>
                        <div className={styles.productImageCC}>
                          <Image
                            quality={65}
                            layout="fill"
                            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                            alt="homepagebottomsliderImg"
                          />
                        </div>
                        <div className={styles.productInfoCC}>
                          <h2>Beyorganik</h2>
                          <h3>Organik Pilavlık Bulgur Köy Tipi</h3>
                          <p>30,08 TL</p>
                        </div>
                      </a>
                    </Link>
                    <button className={styles.addBasketBtnCC}>
                      SEPETE EKLE
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.productContainerCC}>
                    <Link href="/organik-gida/kuru-gidalar/1">
                      <a>
                        <div className={styles.productImageCC}>
                          <Image
                            quality={65}
                            layout="fill"
                            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                            alt="homepagebottomsliderImg"
                          />
                        </div>
                        <div className={styles.productInfoCC}>
                          <h2>Beyorganik</h2>
                          <h3>Organik Pilavlık Bulgur Köy Tipi</h3>
                          <p>30,08 TL</p>
                        </div>
                      </a>
                    </Link>
                    <button className={styles.addBasketBtnCC}>
                      SEPETE EKLE
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </main>
      ) : (
        <main className={styles.shipMainContainer2}>
          <div>
            <div className={styles.payAccordion}>
              <h6 onClick={() => setOpenAccordion(!openAccordion)}>
                1. Teslimat
                <span className={styles.payAccordionSpan}>
                  <strong className={styles.shipSteps}>Adım 1/3</strong>{" "}
                  {openAccordion ? "-" : "+"}
                </span>
              </h6>
              <div
                className={
                  openAccordion
                    ? styles.payAccordionInner
                    : styles.payAccordionInnerClose
                }
              >
                <div className={styles.addressWrapper}>
                  <p className={styles.addressTitle}>Adrese Teslimat</p>
                  <div className={styles.addressBox}>
                    <div className={styles.addressTopButtons}>
                      <p>Ev Adresim:</p>
                      <button className={styles.addressDeleteButton}>
                        Değiştir/Diğer Adresler
                      </button>
                    </div>
                    <p className={styles.addressText}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpenAdressForm(true)}
                  className={styles.addNewAdresFormOpen}
                >
                  Yeni Adres Ekle
                </button>
                {openAdressForm ? (
                  <form className={styles.addressForm}>
                    <p className={styles.subTitle}>Yeni Adres</p>
                    <p className={styles.desc}>Adres Tipi</p>
                    <div className={styles.addressTypes}>
                      <label className={styles.addressType}>
                        <Checkbox
                          onChange={handleChange}
                          value="bireysel"
                          checked={addressType === "bireysel"}
                          type="radio"
                          name="asss"
                          className="addressRadio"
                        />
                        <p className={styles.addressTypeText}>Bireysel</p>
                      </label>
                      <label className={styles.addressType}>
                        <Checkbox
                          onChange={handleChange}
                          value="kurumsal"
                          checked={addressType === "kurumsal"}
                          type="radio"
                          name="asss"
                          className="addressRadio"
                        />
                        <p className={styles.addressTypeText}>Kurumsal</p>
                      </label>
                    </div>
                    {addressType === "kurumsal" ? (
                      <>
                        <p className={styles.desc}>Unvan</p>
                        <input
                          type="text"
                          className={styles.degreeInput}
                          onChange={(e) => {
                            setDegree(e.target.value);
                          }}
                        />
                        <p className={styles.desc}>Vergi Dairesi</p>
                        <input
                          type="text"
                          className={styles.taxInput}
                          onChange={(e) => {
                            setTaxAdministration(e.target.value);
                          }}
                        />
                        <p className={styles.desc}>Vergi Numarası</p>
                        <input
                          type="number"
                          className={styles.taxNumInput}
                          onChange={(e) => {
                            setTaxNum(e.target.value);
                          }}
                        />
                      </>
                    ) : null}
                    <p className={styles.desc}>
                      Adres Adı (Ev Adresim, İş Adresim vb.)
                    </p>
                    <input
                      type="mail"
                      className={styles.mailInput}
                      onChange={(e) => {
                        setMail(e.target.value);
                      }}
                    />
                    <p className={styles.desc}>Adı Soyadı</p>
                    <input
                      type="text"
                      className={styles.fullNameInput}
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    />
                    <p className={styles.desc}>Cep Telefonu</p>
                    <input
                      type="number"
                      className={styles.phoneInput}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      placeholder="XXXX XXX XX XX"
                    />
                    <p className={styles.desc}>Ülke</p>
                    <Dropdown
                      selection
                      name="country"
                      options={countryOptions}
                      className="countryDropdown"
                      placeholder="Lütfen Ülke Seçiniz"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <p className={styles.desc}>Şehir</p>
                    <Dropdown
                      selection
                      name="city"
                      className="countryDropdown"
                      options={cityOptions}
                      placeholder="Lütfen Şehir Seçiniz"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <p className={styles.desc}>İlçe</p>
                    <Dropdown
                      selection
                      name="district"
                      className="countryDropdown"
                      options={districtOptions}
                      placeholder="Lütfen İlçe Seçiniz"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <p className={styles.desc}>Adres Detayı</p>
                    <textarea className={styles.addressTextArea} />
                    <div className={styles.addressBtns}>
                      <button
                        onClick={() => setAddAddress(false)}
                        type="submit"
                        className={styles.saveBtn}
                      >
                        KAYDET
                      </button>
                      <button className={styles.cancelBtn}>İPTAL</button>
                    </div>
                  </form>
                ) : null}
              </div>
            </div>

            <div className={styles.payAccordion}>
              <h6 onClick={() => setOpenAccordion2(!openAccordion2)}>
                2. Ödeme
                <span className={styles.payAccordionSpan}>
                  <strong className={styles.shipSteps}>Adım 2/3</strong>{" "}
                  {openAccordion2 ? "-" : "+"}
                </span>
              </h6>
              <div
                className={
                  openAccordion2
                    ? styles.payAccordionInner
                    : styles.payAccordionInnerClose
                }
              >
                <div className={styles.addressWrapper}>
                  <p className={styles.addressTitle}>Fatura Adresim</p>
                  <div className={styles.addressBox}>
                    <div className={styles.addressTopButtons}>
                      <p>Ev Adresim:</p>
                      <button className={styles.addressDeleteButton}>
                        Değiştir/Diğer Adresler
                      </button>
                    </div>
                    <p className={styles.addressText}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren.
                    </p>
                  </div>
                  <label
                    className={styles.readLabel}
                    htmlFor="readandunderstand"
                  >
                    <input
                      id="readandunderstand"
                      type="checkbox"
                      onClick={(e) => {
                        setReadandunderstand(!readandunderstand);
                      }}
                    />
                    <p className={styles.readText}>
                      Fatura adresim, gönderi adresim ile aynı
                    </p>
                  </label>
                </div>
                <form className={styles.newCardForm}>
                  <p className={styles.addressTitle}>Ödeme Bilgileri</p>
                  <div className={styles.payTypes}>
                    <label className={styles.payType}>
                      <Checkbox
                        onChange={handleChange}
                        value="bireysel"
                        // checked={addressType === 'bireysel'}
                        type="radio"
                        name="payType"
                        className="addressRadio"
                      />
                      <p className={styles.addressTypeText}>
                        Banka Kartı / Kredi Kartı
                      </p>
                    </label>
                    <label className={styles.payType}>
                      <Checkbox
                        onChange={handleChange}
                        value="kurumsal"
                        // checked={addressType === 'kurumsal'}
                        type="radio"
                        name="payType"
                        className="addressRadio"
                      />
                      <p className={styles.addressTypeText}>Kapıda Ödeme</p>
                    </label>
                  </div>
                  <p className={styles.descPay}>Kart Üzerindeki İsmi</p>
                  <input
                    type="text"
                    className={styles.cardTitleInput}
                    onChange={(e) => {
                      setMail(e.target.value);
                    }}
                  />
                  <div className={styles.cardNumandCVV}>
                    <div>
                      <p className={styles.descPay}>Kart Numarası</p>
                      <input
                        type="number"
                        className={styles.cardNumberInput}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                    <div className={styles.cardCVV}>
                      <div className={styles.descPay}>
                        CVV
                        <Image
                          quality={65}
                          src="/infoIcon2.svg"
                          alt="edit"
                          width="12"
                          height="12"
                        />
                      </div>
                      <input
                        type="number"
                        className={styles.cardSecurityNumInput}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <p className={styles.descPay}>Son Kullanma Tarihi</p>
                  <div className={styles.expirationDateDropdown}>
                    <Dropdown
                      selection
                      name="month"
                      options={monthOptions}
                      className="cardDropdownForBasket"
                      placeholder="Ay"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <Dropdown
                      selection
                      name="year"
                      className="cardDropdownForBasket"
                      options={yearOptions}
                      placeholder="Yıl"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                  <label
                    className={styles.readLabel}
                    htmlFor="readandunderstand"
                  >
                    <input
                      id="readandunderstand"
                      type="checkbox"
                      onClick={(e) => {
                        setReadandunderstand(!readandunderstand);
                      }}
                    />
                    <p className={styles.readText}>
                      <strong>Kullanım şartlarını</strong> okudum ve
                      onaylıyorum.
                    </p>
                  </label>
                </form>

                <div className={styles.contractsWrapper}>
                  <div className={styles.contractWrapper}>
                    <p className={styles.contractTitle}>
                      SİPARİŞ-SÖZLEŞME ÖN BİLGİLENDİRMELERİ
                    </p>
                    <p className={styles.contractDesc}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum
                      dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit ametLorem ipsum
                      dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className={styles.contractWrapper}>
                    <p className={styles.contractTitle}>
                      SİPARİŞ-SÖZLEŞME DİĞER ÖN BİLGİLENDİRMELERİ
                    </p>
                    <p className={styles.contractDesc}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className={styles.contractWrapper}>
                    <p className={styles.contractTitle}>
                      MESAFELİ SATIŞ SÖZLEŞMESİ
                    </p>
                    <p className={styles.contractDesc}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.payAccordion}>
              <h6 onClick={() => setOpenAccordion3(!openAccordion3)}>
                3. Siparişi İncele
                <span className={styles.payAccordionSpan}>
                  <strong className={styles.shipSteps}>Adım 3/3</strong>{" "}
                  {openAccordion3 ? "-" : "+"}
                </span>
              </h6>
              <div
                className={
                  openAccordion3
                    ? styles.payAccordionInner
                    : styles.payAccordionInnerClose
                }
              >
                <ul className={styles.lastStepUL}>
                  <li>Ürün</li>
                  <li>Adet</li>
                  <li>Fiyat</li>
                </ul>
                <div className={styles.lastStepShipProduct}>
                  <div className={styles.shipProductImgCon}>
                    <div className={styles.shipProductImage}>
                      <Image
                        quality={65}
                        layout="fill"
                        src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                        alt="homepagebottomsliderImg"
                      />
                    </div>
                    <div className={styles.lastStepDescrip}>
                      <h4>Beyorganik</h4>
                      <h5>Pilavlık Bulgur Köy Tipi</h5>
                      <p>1 Adet / Krem / 37</p>
                      <strong>
                        Satıcı:{" "}
                        <span style={{ fontWeight: "normal" }}>Beyorganik</span>
                      </strong>
                    </div>
                  </div>
                  <div className={styles.lastStepCount}>1</div>
                  <div className={styles.lastStepCountPrice}>
                    <span>60,16 TL</span>
                    <strong>30,08 TL</strong>
                  </div>
                </div>
                <div className={styles.lastStepShipProduct}>
                  <div className={styles.shipProductImgCon}>
                    <div className={styles.shipProductImage}>
                      <Image
                        quality={65}
                        layout="fill"
                        src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                        alt="homepagebottomsliderImg"
                      />
                    </div>
                    <div className={styles.lastStepDescrip}>
                      <h4>Beyorganik</h4>
                      <h5>Pilavlık Bulgur Köy Tipi</h5>
                      <p>1 Adet / Krem / 37</p>
                      <strong>
                        Satıcı:{" "}
                        <span style={{ fontWeight: "normal" }}>Beyorganik</span>
                      </strong>
                    </div>
                  </div>
                  <div className={styles.lastStepCount}>1</div>
                  <div className={styles.lastStepCountPrice}>
                    <span>60,16 TL</span>
                    <strong>30,08 TL</strong>
                  </div>
                </div>
                <div className={styles.lastStepAdresses}>
                  <div className={styles.lastStepAdress}>
                    <h5>Teslimat Adresi</h5>
                    <div className={styles.lastStepAdressesInner}>
                      <strong>Ev Adresim:</strong>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren.
                      </p>
                    </div>
                  </div>
                  <div className={styles.lastStepAdress}>
                    <h5>Fatura Adresi</h5>
                    <div className={styles.lastStepAdressesInner}>
                      <strong>Ev Adresim:</strong>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.lastStepMin}>
                  <strong>Ödeme Bilgileri</strong>
                  <ul>
                    <div>
                      <li>Ara Toplam:</li>
                      <li>60,16</li>
                    </div>
                    <div>
                      <li>Kargo Tutarı:</li>
                      <li>60,16</li>
                    </div>

                    <div>
                      <li>İndirim:</li>
                      <li>60,16</li>
                    </div>
                  </ul>
                  <div className={styles.lastStepMinDisc}>
                    <span>Toplam</span>
                    <span>60,16</span>
                  </div>
                </div>
                <p className={styles.lastStepBottomPolicy}>
                  Siparişiniz teslim edilirken mutlaka kargo görevlisinin
                  yanında paketi açıp kontrol ediniz. Ürünün kusurlu olduğunu
                  düşündüğünüz durumlarda teslim almayıp, kargo görevlisinden
                  tutanak tutmasını isteyiniz. Kusursuz yeni ürün en kısa süre
                  içerisinde adresinize ulaştırılacaktır. Bu adımları takip
                  etmeyerek ürünü teslim almanız durumunda sorumluluk … ya ait
                  olmayacaktır.
                  <b>Mesafeli satış sözleşmesine ulaşmak için tıklayınız.</b>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.shipPayment}>
              <div
                className={`${styles.shipPaymentRCard} ${styles.shipPaymentRCardTop}`}
              >
                <strong>Sepet Özeti</strong>
                <div
                  className={`${styles.shipProduct} ${styles.shipProduct2B}`}
                >
                  <div className={styles.shipProductImgCon}>
                    <div className={styles.shipProductImage2B}>
                      <Image
                        quality={65}
                        layout="fill"
                        src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                        alt="homepagebottomsliderImg"
                      />
                    </div>
                    <div
                      className={`${styles.shipProductDescrip} ${styles.shipProductDescrip2B}`}
                    >
                      <div>
                        <h4>Beyorganik</h4>
                        <h5>Pilavlık Bulgur Köy Tipi</h5>
                        <span>1 Adet</span>
                      </div>
                      <span style={{ fontWeight: "bold" }}>30,08 TL</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.shipProduct} ${styles.shipProduct2B}`}
                >
                  <div className={styles.shipProductImgCon}>
                    <div className={styles.shipProductImage2B}>
                      <Image
                        quality={65}
                        layout="fill"
                        src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618597416/pexels-william-choquette-2641886_kpjhwu.jpg"
                        alt="homepagebottomsliderImg"
                      />
                    </div>
                    <div
                      className={`${styles.shipProductDescrip} ${styles.shipProductDescrip2B}`}
                    >
                      <div>
                        <h4>Beyorganik</h4>
                        <h5>Pilavlık Bulgur Köy Tipi</h5>
                        <span>1 Adet</span>
                      </div>
                      <span style={{ fontWeight: "bold" }}>30,08 TL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.shipPayment}>
              <div className={styles.shipPaymentRCard}>
                <strong>Sipariş Özeti</strong>
                <div className={styles.shipPaymentRCardInfos}>
                  <span>Ürün Toplamı</span>
                  <span>60,16 TL</span>
                </div>
                <div className={styles.shipPaymentRCardInfos}>
                  <span>Kargo Toplamı</span>
                  <span>60,16 TL</span>
                </div>
                <p>
                  Kargo ücreti ödememeniz için sepetinizdeki tüm ürünlerin kargo
                  ücretsiz olması gerekmektedir.
                </p>
                <div
                  className={`${styles.shipPaymentRCardInfos} ${styles.shipPaymentRCardInfosBB}`}
                >
                  <span>İndirim</span>
                  <span>60,16 TL</span>
                </div>
                <div className={styles.shipPaymentRCardInfos}>
                  <span>Toplam</span>
                  <span>69,16 TL </span>
                </div>
              </div>
              <button
                onClick={() => setOpenDiscCode(!openDiscCode)}
                className={styles.shipPromotionCodeBtn}
              >
                İndirim Kodu <span>{openDiscCode ? "-" : "+"}</span>
              </button>
              {openDiscCode ? (
                <div className={styles.shipPromotionCodeBtnInput}>
                  <input></input>
                  <button>EKLE</button>
                </div>
              ) : null}
              <Modal
                className="paymentModalui"
                trigger={
                  <button className={styles.shipGoPaymentBtn}>DEVAM ET</button>
                }
              >
                <div className={styles.paymentModalContainer}>
                  <h1>LOGO</h1>
                  <p>
                    Aşağıdaki <b>"onayla ve bitir"</b> butonuna basarak,
                    <b>"Kredi Kartı Kayıt Sözleşmesi"</b>ni kabul ediyorum.
                  </p>
                  <strong>
                    Kredi Kartı Kayıt Sözleşmesi <span>{">"}</span>
                  </strong>
                  <button>ONAYLA VE BİTİR</button>
                </div>
              </Modal>
              <button
                style={{ backgroundColor: "#333333" }}
                onClick={() => setOnCont(1)}
                className={styles.shipGoPaymentBtn}
              >
                GERİ DÖN
              </button>
            </div>
          </div>
        </main>
      )}
    </Layout>
  );
}
