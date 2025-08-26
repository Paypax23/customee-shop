import './gallery.scss';
import officeImage from "../../assets/banner/officeBanner.png";
import bigBanner from "../../assets/banner/bigBanner.png";
import clotheBanner from "../../assets/banner/clotheBanner.png";
import digitalBanner from "../../assets/banner/digitalBanner.png";
import stickerBanner from "../../assets/banner/stickerBanner.png";
function Gallery() {
    return (
        <section className='gallery-container'>
            <div className='bigBanner'>
                <img src={bigBanner} alt="big banner" />
            </div>
            <div className='miniGallery'>
                <img src={clotheBanner} alt="clothe" />
                <img src={officeImage} alt="office" />
                <img src={digitalBanner} alt="digital" />
                <img src={stickerBanner} alt="sticker banner" />
            </div>
        </section>
    );
}

export default Gallery;