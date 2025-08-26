import "./shoppingItem.scss";
import { toPersianDigitsWithLocale } from "../../utils/toPersianDigits";
import ProductCounter from "../productCounter/ProductCounter";
import { CgCloseR } from "react-icons/cg";
import { removeItem } from "../../redux/actions/shopAction"
import { TbTruckDelivery } from "react-icons/tb";
import { shoppingPageTextKeys } from "../../data/pageData";

function ShoppingCartItem({ title, t, dispatch, image, id, price, quantity, i18n }) {

    const deleteItemListener = () => {
        dispatch(removeItem(id))
    }

    return (
        <>

            <div className="shoppingcart-item">
                <div className="right-side">
                    <CgCloseR style={{ cursor: "pointer" }} color="#333" onClick={() => deleteItemListener()} size={25} />
                    <img src={image} alt={title} />
                    <h3>{t(title)}</h3>
                    <h4>
                        {i18n.language === "fa" ? toPersianDigitsWithLocale(150000) : 150000}
                        {t('toman')}
                    </h4>

                </div>
                <div className="left-side">
                    <ProductCounter quantity={parseInt(quantity)} />
                </div>
            </div>
            <div className="send-info">
                <TbTruckDelivery size={24}/>
                <h4>{t(shoppingPageTextKeys.shippingInfo)}</h4>
            </div>
            <hr className="full" />
        </>
    );
}

export default ShoppingCartItem;