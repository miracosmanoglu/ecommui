import styles from "../styles/MyMessagesPage.module.css";
import Image from "next/image";
import { useState } from "react";
import { Dropdown, Modal } from "semantic-ui-react";

export default function MyMessagesPage() {
  const messageSortOptions = [
    { value: 1, text: "Tüm Mesajlarım" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const messageModalTopicOptions = [
    { value: 1, text: "Ürün" },
    { value: 2, text: "02" },
    { value: 3, text: "03" },
    { value: 4, text: "04" },
  ];

  const [messageDetail, setMessageDetail] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.messagesPageWrapper}>
      <div className={styles.mainTitleWrapper}>
        <p className={styles.mainTitle}>Mesajlarım</p>
        {messageDetail === false ? (
          <Dropdown
            selection
            name="orderSort"
            className="orderDropdown"
            options={messageSortOptions}
            placeholder="Tüm Mesajlarım"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        ) : (
          <p
            onClick={() => setMessageDetail(false)}
            className={styles.mainTitleLogOut}
          >
            Tüm Mesajlarıma Geri Dön
          </p>
        )}
      </div>
      {messageDetail === false ? (
        <>
          <p className={styles.subTitle}>
            Toplam 3 adet mesajınız bulunmaktadır.
          </p>
          <div
            onClick={() => setMessageDetail(true)}
            className={styles.messagesCardsWrapper}
          >
            <div className={styles.messagesCardWrapper}>
              <div className={styles.messageCardLeft}>
                <div className={styles.messageCardLeftImg}>
                  <Image
                    quality={65}
                    layout="fill"
                    src="/orderDetailImg.svg"
                    alt="orderDetailImg"
                  />
                </div>
                <div className={styles.messageCardLeftTexts}>
                  <p className={styles.messageCardDesc}>
                    <b>Clear Chunky High Heel Boots</b>
                  </p>
                  <p className={styles.messageCardDesc}>
                    <b>Satıcı:</b> Flo
                  </p>
                  <p className={styles.messageCardDesc}>
                    <b>Konu:</b> Ürünüm kargoya verildi mi?
                  </p>
                </div>
              </div>
              <div className={styles.messageCardRight}>
                <p className={styles.messageCardDesc}>
                  <b>Cevaplandı</b>
                </p>
                <p className={styles.messageCardDesc}>12.05.2020</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.messageDetailWrapper}>
          <div className={styles.messageDetailCardWrapper}>
            <div className={styles.messageCardLeft}>
              <div className={styles.messageCardLeftImg}>
                <Image
                  quality={65}
                  layout="fill"
                  src="/orderDetailImg.svg"
                  alt="orderDetailImg"
                />
              </div>
              <div className={styles.messageCardLeftTexts}>
                <p className={styles.messageCardDesc}>
                  <b>Clear Chunky High Heel Boots</b>
                </p>
                <p className={styles.messageCardDesc}>
                  <b>Satıcı:</b> Flo
                </p>
                <p className={styles.messageCardDesc}>
                  <b>Konu:</b> Ürünüm kargoya verildi mi?
                </p>
              </div>
            </div>
            <div className={styles.messageCardRight}>
              <p className={styles.messageCardDesc}>
                <b>Cevaplandı</b>
              </p>
              <p className={styles.messageCardDesc}>12.05.2020</p>
            </div>
          </div>
          <div className={styles.messageDetailBoxWrapper}>
            <p className={styles.messageDetailBoxTitle}>
              <b>Önceki Mesajları Görüntüle</b>
            </p>
            <div className={styles.messageDetailChatTextWrapper}>
              <p>
                <b>Siz:</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet,
              </p>
              <p className={styles.messageDetailChatDate}>12.05.2020 | 01:25</p>
            </div>
            <Modal
              closeIcon
              onClose={() => {
                setOpen(false);
              }}
              onOpen={() => setOpen(true)}
              open={open}
              className={styles.messageModal}
              trigger={
                <button className={styles.messageDetailChatBtn}>
                  YENİ SORU SOR
                </button>
              }
            >
              <>
                <p className={styles.messagesModalTitle}>Yeni Soru Sor</p>
                <p className={styles.desc}>Konu</p>
                <Dropdown
                  selection
                  name="messageTopic"
                  className="messageModalDropdown"
                  options={messageModalTopicOptions}
                  placeholder="Ürün"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
                <p className={styles.desc}>Soru Başlığı</p>
                <input type="text" className={styles.messageModalTextInput} />
                <p className={styles.desc}>Sorunuz</p>
                <textarea className={styles.messageModalTextArea} />
                <p className={styles.messageModalTextAreaSize}>250</p>
                <button
                  onClick={() => setOpen(false)}
                  className={styles.messageModalSendBtn}
                >
                  GÖNDER
                </button>
              </>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}
