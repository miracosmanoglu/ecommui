import SellerCompanyInfos from './SellerCompanyInfos'
import SellerProductDetailInfos from './SellerProductDetailInfos'
import SellerProductSummary from './SellerProductSummary'

export default function SellerApplicationPage({ section, setSection }) {

    return (
        <>
            {section === "firmaBilgileri" ?
                <SellerCompanyInfos section={section} setSection={setSection} />
                :
                null}
            {section === "urunDetayBilgileri" ?
                <SellerProductDetailInfos section={section} setSection={setSection} />
                :
                null}
            {section === "urunOzeti" ?
                <SellerProductSummary section={section} setSection={setSection} />
                :
                null}
        </>


    )

}