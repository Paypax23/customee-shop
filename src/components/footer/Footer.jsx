import "./footer.scss";
import { BsYoutube } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { PiPinterestLogoFill } from "react-icons/pi";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation()
    const placeholder = t('placeHolder');
    return (
        <>
            <section className="top-footer">
                <div className="right-footer-section">
                    <p>{t('getEmailCallToAction')}</p>
                    <span>
                        <input type="email" placeholder={placeholder.email} />
                        <button>{t('submitButton')}</button>
                    </span>
                </div>
                <div className="left-footer-section">
                    <p>
                        {t('callToAction')}
                    </p>
                    <span>
                        <BsYoutube />
                        <PiPinterestLogoFill />
                        <TbBrandFacebookFilled />
                        <SlSocialInstagram />
                    </span>
                </div>
            </section>
            <footer className="main-footer">

            </footer>
        </>
    );
}

export default Footer;