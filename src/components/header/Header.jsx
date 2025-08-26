import "./header.scss";
import logoImage from "../../assets/images/logo.png"
import { FiSearch } from "react-icons/fi";
import { TbLogin2, TbLogout, TbLogout2 } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import CategoriesSection from "../categories/Categories";

function Header() {
    const { t } = useTranslation();
    const placeholder = t('placeHolder')
    const shoppingCart = useSelector(state => state.cart)
    const login = useSelector(state => state.login)
    
    return (
        <>
            <header className="header">
                <img onClick={() => window.location = "/"} src={logoImage} alt="logo" />
                {/* search */}
                <div className="searchBar">
                    <input type="search" placeholder={placeholder.search} />
                    <span> <FiSearch color="#A72F3B" size={24} /> </span>
                </div>
                {/* shopping cart and profile */}
                <div className="headerOptions">
                    {login?.username ? (<span onClick={()=>window.location.reload()}>
                        <TbLogout size={22}/>
                        <h3>{login.username}</h3>
                    </span>) :
                        <span onClick={() => window.location = "/login"} >
                            <TbLogin2 size={22} />
                            <a href="#"> {t('loginButton')} </a>
                        </span>}

                    <span className="cart">
                        <RiShoppingCartLine size={22} />
                        <Link to="/shopping-cart">{t('shoppingCart')}</Link>
                        <span className="count">{shoppingCart.items.length}</span>
                    </span>
                </div>

            </header>
            <hr />
            <div className="pageContainer">
                <CategoriesSection />
            </div>
        </>
    );
}

export default Header;