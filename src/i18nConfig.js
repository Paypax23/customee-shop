import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
    debug: true,
    resources: {
        fa: {
            translation: {
                title: "آنلاین شاپ کاستومی",
                topBarText:'با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید',
                sectionTitle:{
                    more:"محصولات بیشتر",
                    most:'پر فروش ترین ها',
                    special:'فروش ویژه',

                },
                moreButton:'مشاهده بیشتر',
                submitButton:'ثبت',
                addToCartButton:'افزودن به سبد خرید',
                loginButton: "ورود | ثبت نام",
                bannerP:'آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید.',
                shoppingCart: "سبد خرید",
                startDesign:'شروع طراحی',
                Products:'دیدن محصولات',
                placeHolder: {
                    search: 'جستجو',
                    email: 'ایمیل',
                },
                menu: {
                    doIt: "خودت طراحی کن",
                    clothes: 'پوشاک',
                    home: 'لوازم خونه',
                    mobile: 'قاب موبایل',
                    accessory: 'اکسسوری',
                    school: 'مدرسه و اداره',
                    card: 'کارت و پوستر',
                    party: 'جشن و مهمانی',
                    writing:'لوازم تحریر'
                },
                productList:{
                    menTshirt:'تیشرت مردانه',
                    womenTshirt:'تیشرت زنانه',
                    mobile:'قاب موبایل آیفون',
                    menCap:'کلاه مردانه',
                    sportCap:'کلاه ورزشی',
                    foodBox:'باکس غذا',
                    mug:'ماگ سرامیکی',
                    book:'دفتر سیمی',
                },
                productOption:'دارای رنگ بندی، قابل طراحی',
                toman:'تومان',
                callToAction:'ما را در شبکه های اجتماعی دنبال کنید',
                getEmailCallToAction:"برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید",
                addedToCart:'محصول با موفقیت به سبد خرید اضافه شد',
                addToFavorite:"به لیست مورد علاقه ها اضافه شد ❤️",
                shoppingPage:{
                    shoppingCart:"سبد خرید",
                    location:"اطلاعات آدرس",
                    pay:"پرداخت",
                    shippingInfo:"ارسال تا 3 روز آینده",
                    info:{
                        price:"قیمت کالاها",
                        totalDiscount:"مجموع تخفیف روی کالا ها",
                        profit:"سود شما از این خرید",
                        shippingPrice:"هزینه ارسال",
                        totalPrice :"جمع مبلغ قابل پرداخت",
                        discountCode:"کد تخفیف",
                        discountCodeDescription:"کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید تا در صورت داشتن اعتبار به سفارش شما اعمال شود",
                        submitButton:"ثبت سفارش",
                        submitDiscount:"ثبت",
                        quantity:"تعداد کالا",
                        empty :"سبد خرید شما خالی است !"
                    }
                },
                loginPage:{
                    welcome:'به کاستومی خوش آمدید',
                    loginSignUp:'ورود | ثبت نام',
                    username:'نام کاربری',
                    password:'کلمه عبور',
                    term:'ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.',
                    forgot:'فراموشی رمز عبور',
                    signUpButton:'ثبت نام',
                    loginWithGoogle:'ورود با حساب گوگل',
                    
                }
            }
        },
        en: {
            translation: {
                title: "Customy onlin shop",
                topBarText:'By subscribing to Customi, receive your first order "free"',
                sectionTitle:{
                    more:"More products",
                    most:'Bestsellers',
                    special:'Special offer',

                },
                moreButton:'more',
                submitButton:'submit',
                addToCartButton:'add to cart',
                bannerP:"The online shop offers a variety of custom products, allowing you to choose your own colors, designs, and writing on the products.",
                loginButton: "Login | SignUp",
                shoppingCart: "shopping cart",
                startDesign:'start design',
                Products:'Products',
                placeHolder: {
                    search: 'search',
                    email: 'email',
                },
                menu: {
                    doIt: "design yourself",
                    clothes: 'clothes',
                    home: 'home appliances',
                    mobile: 'phone case',
                    accessory: 'accessory',
                    school: 'school|office',
                    card: 'card|poster',
                    party: 'party',
                    writing:'writing supplies',

                },
              
                  productList:{
                    menTshirt:"Men's T-shirt",
                    womenTshirt:"Women's T-shirt",
                    mobile:'iPhone mobile case',
                    menCap:"Men's hat",
                    sportCap:'Sports hat',
                    foodBox:'Food box',
                    mug:'Ceramic mug',
                    book:'wired book',
                },
                productOption:'Available in colors, can be designed',
                toman:' toman',
                callToAction:'Follow us on social media',
                getEmailCallToAction:'Enter your email to receive the latest news and new discounts.',
                addedToCart:'item successfully added to cart!',
                addToFavorite:"Added to the Favorite ❤️",
                 shoppingPage:{
                    shoppingCart:"shopping cart",
                    location:"location",
                    pay:"payment",
                    shippingInfo:"shipping in the next 3 days",
                     info:{
                        price:"price",
                        totalDiscount:"Total discount on goods",
                        profit:"Your profit from the purchase",
                        shippingPrice:"shipping cost",
                        totalPrice :"Total amount payable",
                        discountCode:"discount code",
                        discountCodeDescription:"Discount Code Enter your gift card identification code below and click the register button to apply it to your order if you have credit.",
                        submitButton:"submit",
                        submitDiscount:"submit",
                        quantity:"quantity",
                        empty:"Your shopping cart is empty! "
                    }
                },
                loginPage:{
                    welcome:'Welcome to the customee!',
                    loginSignUp:'login | signup',
                    username:'username',
                    password:'password',
                    term:'Your entry and membership constitutes acceptance of the rules and regulations.',
                    forgot:'forgot password',
                    signUpButton:'Sign Up',
                    loginWithGoogle:'Login with Gmail',
                    
                }
            }
        },

    },
    lng: "fa", // if you're using a language detector, do not define the lng option
    fallbackLng: "fa",
    returnObjects:true, 
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
});


