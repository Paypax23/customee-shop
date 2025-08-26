import { useTranslation } from 'react-i18next';
import './divider.scss'
import { FaMedal } from "react-icons/fa";

function Divider({ name, hasMorePage = false, morePageLink = '#' }) {
    const {t} = useTranslation()
    return (
        <div className='divider-container'>
            <span className='textSec'>
                <FaMedal size={25} style={{transform:"rotate(180deg)"}}/>
                <h2>{name}</h2>
            </span>
            <span className='hrSec'>
            <hr />

            </span>
            {hasMorePage && (
                <a href={morePageLink}> {t('moreButton')}</a>
            )}
        </div>
    );
}

export default Divider;