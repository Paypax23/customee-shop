import { useEffect } from 'react';
import './languageSwitch.scss';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {

    const {i18n} = useTranslation()

     const languageChangeListener = (e)=>{
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
    }

    useEffect(()=>{
            console.log(i18n.dir)
            if(i18n.language ==="fa"){
                document.dir= "rtl"
            }else{
                document.dir= "ltr"
            }
            // document.dir ='rtl'
        },[i18n,languageChangeListener])
    return (
        <select defaultValue={'fa'} onChange={(e) => languageChangeListener(e)} name="lanSel" id="lanSel">
            <option selected value="fa">فارسی</option>
            <option value="en">English</option>
        </select>
    );
}

export default LanguageSwitch;