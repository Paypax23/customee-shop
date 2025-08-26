'use client'
import Header from "../../components/header/Header";
import "./shopingCart.scss"
import { RiShoppingCartFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import lineImage from "../../assets/images/line.png"
import { useTranslation } from "react-i18next";
import { shoppingPageTextKeys } from "../../data/pageData";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartItem from "../../components/shoppingCartItem/ShoppingCartItem";
import { useEffect, useState } from "react";

function ShopingCart() {
    const [info,setInfo] = useState([]);
    const { t , i18n} = useTranslation();
    const dispatch = useDispatch();
    const {items} = useSelector(state=>state.cart);
    console.log(items ,"data")
    console.log(i18n,"18n")
    useEffect(()=>{
        let totalCost = 0;
        let quantity = 0;
        items.map((item)=>{
            console.log(item,"Item")
            totalCost += item.price;
            quantity += item.quantity;
            console.log(quantity,"quantty")
       });
       
        const structure = [
            {title:t(shoppingPageTextKeys.price),price:`${totalCost} ${t('toman')}`},
            {title:t(shoppingPageTextKeys.quantity),price:quantity},
            {title:t(shoppingPageTextKeys.profit),price:`${30000} ${t('toman')}`},
            {title:t(shoppingPageTextKeys.shippingPrice),price:`${50000} ${t('toman')}`},
            {title:t(shoppingPageTextKeys.totalPrice),price:`${totalCost+50000} ${t('toman')}`},
        ];
        setInfo(structure)
    },[items,i18n])
    return (
        <>
            <Header />
            <div className="pageContainer contentWrap">
                <section className="cart-stepper">
                    <span className="active">
                        <RiShoppingCartFill size={30} />
                        <h4>{t(shoppingPageTextKeys.shoppingCart)}</h4>
                    </span>
                    <img src={lineImage} alt="line" />
                    <span>
                        <GrLocation size={30} />
                        <h4>{t(shoppingPageTextKeys.location)}</h4>
                    </span>
                    <img src={lineImage} alt="line" />
                    <span>
                        <AiOutlineDollar size={30} />
                        <h4>{t(shoppingPageTextKeys.pay)}</h4>
                    </span>

                </section>
                  {items.length > 0 &&
                    <section className="cart-conteiner">
                    <div className="cart-items">
                        <h3>{t(shoppingPageTextKeys.shoppingCart)}</h3>
                        
                        <hr className="full"/>
                        {items.map((item,index)=>(
                            <ShoppingCartItem dispatch={dispatch} i18n={i18n} t={t} id={item.id} price={item.price} quantity={item.quantity} title={item.titleKey} key={index} image={item.imgUrl} />
                        ))}
                    </div>
                    <div className="payment-section">
                            <h3>{t(shoppingPageTextKeys.discountCode)}</h3>
                            <p>{t(shoppingPageTextKeys.discountCodeDescription)}</p>
                            <div className="discount-contianer">
                                <input type="text" />
                                <button className="colored">{t(shoppingPageTextKeys.submitDiscount)}</button>
                            </div>
                            <hr />
                            {info && info.map((item,index)=>(
                                <InfoContainer key={item.id} index={index} title={item.title} price={item.price} />
                            ))}
                            <button>{t(shoppingPageTextKeys.submitButton)}</button>
                    </div>
                </section>
                    }
                    {items.length===0 &&
                    <h2 style={{marginTop:"3rem"}}>{t(shoppingPageTextKeys.empty)}</h2>
                    }
                

            </div>
        </>
    );
}

export default ShopingCart;




function InfoContainer({title,index,price}){
    const hasDivider = index===3;
    return(
        <>
        <div className="info-container">
            <h3>{title}</h3>
            <h3>{price}</h3>
        </div>
        {hasDivider && <hr/>}
        </>
    )
}




