import { useTranslation } from 'react-i18next';
import './categories.scss'
import { PiMagicWandBold } from "react-icons/pi";
import { useEffect } from 'react';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

function CategoriesSection() {
    const {t} = useTranslation();
    const menu = t('menu');
   
    
    return ( 
        <div className="categories">
            <a className='special' href="#">
                <PiMagicWandBold size={16}/>
                {menu.doIt}
            </a>
            <a href="#">{menu.clothes}</a>
            <a href="#"> {menu.home} </a>
            <a href="#"> {menu.mobile}</a>
            <a href="#">{menu.accessory}</a>
            <a href="#"> {menu.school}</a>
            <a href="#"> {menu.card}</a>
            <a href="#">{menu.party}</a>
            <LanguageSwitch></LanguageSwitch>
        </div>
     );
}

export default CategoriesSection;