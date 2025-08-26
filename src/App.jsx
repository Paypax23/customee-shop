import './App.scss';
import CategoriesSection from './components/categories/Categories';
import Header from './components/header/Header';
import banner from "./assets/images/banner.png";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import Divider from './components/divider/Divider';
import CategoryCard from './components/categoryCard/CategoryCard';
import ProductCard from './components/productCard/ProductCard';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import {categoryList,textKeys} from "./data/pageData";
import { productList } from './data/productData';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';


function App() {
  const { t, i18n } = useTranslation()
  const sectionTitle = t(textKeys.sectionTitle)
    

  const brushIconStyle = i18n.language === "en" 
    ? { transform: "rotateY(180deg)" } 
    : {};
  const alertPosition = i18n.language==="en" ? "top-left" : "top-right";
  return (
    <>
      <div className='topbar'>
          {t(textKeys.topBarText)}
        </div>
      <div className="App ">
          <Header />
        <ToastContainer position={alertPosition} autoClose={3000} rtl={i18n.language==="en" ? false : true}/>
        <section className='pageContainer'>
          <div className='banner'>
            <div className='bannerText'>
              {/* <h2>آنلاین شاپ کاستومی</h2> */}
              <h2> {t(textKeys.title)}</h2>
              <p>
              {t(textKeys.bannerP)}
              </p>
              <span>
                <button className='colored'>
                  <HiOutlinePaintBrush style={brushIconStyle} size={20} />
                  {t(textKeys.startDesign)}
                  
                </button>
                <button> {t(textKeys.products)}</button>
              </span>
            </div>
            <img src={banner} alt="banner" />
          </div>
          <Divider name={sectionTitle.more} />

          <div className='category-items-container'>
            {categoryList.map((item) => (
              <CategoryCard title={t(item.titleKey)} imgUrl={item.imgUrl} />
            ))}
          </div>

          <Divider name={sectionTitle.most} hasMorePage={true} />

          <div className='products-container'>
            {productList.map((item) => ((
              <ProductCard key={item.id} product={item} />
            )))}
          </div>

          <Divider name={sectionTitle.special}/>

          <Gallery />
        </section>
        <Footer />
      </div>

    </>
  );
}

export default App;
