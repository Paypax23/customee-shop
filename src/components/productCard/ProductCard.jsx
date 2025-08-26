import './productCard.scss'
import { IoIosHeartEmpty } from "react-icons/io";
import { toPersianDigitsWithLocale } from "../../utils/toPersianDigits"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from "../../redux/actions/shopAction"
import { toast } from 'react-toastify';
import { addToFavorite, removeFromFavorite } from '../../redux/actions/favorite';
import { FcLike } from "react-icons/fc";

function ProductCard({ product }) {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.favorite);
    console.log(items, "favorite")
    
    const addToCartListener = () => {
        toast.success(t('addedToCart'))
        product.quantity = 1;
        dispatch(addItem(product))
    }
    const addToFavoriteListener = () => {
        toast(t('addToFavorite'));
        dispatch(addToFavorite(product))
    }
    const unlikeHandler = () => {
        dispatch(removeFromFavorite(product.id))
    }
    
    return (
        <div className="product-card">
            <img src={product.imgUrl} alt="" />
            <span className='titleSec'>
                <h5>{t(product.titleKey)}</h5>
                {items.includes(product) ? (<FcLike onClick={() => unlikeHandler()} />)
                    : (<IoIosHeartEmpty style={{ cursor: "pointer" }} onClick={() => addToFavoriteListener()} />)}
            </span>
            <p>{t('productOption')}</p>
            <span className='bottomSec'>
                <button onClick={() => addToCartListener()}>{t('addToCartButton')}</button>
                <h4>
                    {i18n.language === "fa" ? toPersianDigitsWithLocale(150000) : 150000}
                    {t('toman')}

                </h4>
            </span>
        </div>
    );
}

export default ProductCard;