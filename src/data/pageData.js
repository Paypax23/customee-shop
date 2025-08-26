import clotheImage from "../assets/category/clothe.png";
import accessoryImage from "../assets/category/accessory.png";
import congratsCardImage from "../assets/category/congratsCard.png";
import decoreImage from "../assets/category/decore.png";
import mobileImage from "../assets/category/mobile.png";
import tahrirImage from "../assets/category/tahrir.png";




export const textKeys = {
  sectionTitle: "sectionTitle",
  topBarText: "topBarText",
  title: "title",
  bannerP: "bannerP",
  startDesign: "startDesign",
  products: "Products",
};

export const categoryList = [
  { imgUrl: mobileImage, titleKey: "menu.mobile" },
  { imgUrl: congratsCardImage, titleKey: "menu.card" },
  { imgUrl: accessoryImage, titleKey: "menu.accessory" },
  { imgUrl: tahrirImage, titleKey: "menu.writing" },
  { imgUrl: clotheImage, titleKey: "menu.clothes" },
  { imgUrl: decoreImage, titleKey: "menu.home" },
];

export const shoppingPageTextKeys = {
  shoppingCart: "shoppingPage.shoppingCart",
  location: "shoppingPage.location",
  pay: "shoppingPage.pay",
  shippingInfo: "shoppingPage.shippingInfo",
  price: "shoppingPage.info.price",
  totalDiscount: "shoppingPage.info.totalDiscount",
  profit: "shoppingPage.info.profit",
  shippingPrice: "shoppingPage.info.shippingPrice",
  totalPrice: "shoppingPage.info.totalPrice",
  discountCode: "shoppingPage.info.discountCode",
  discountCodeDescription: "shoppingPage.info.discountCodeDescription",
  submitButton: "shoppingPage.info.submitButton",
  submitDiscount: "shoppingPage.info.submitDiscount",
  quantity: "shoppingPage.info.quantity",
  empty: "shoppingPage.info.empty"
}

export const loginPageTextKeys = {
  welcome: 'loginPage.welcome',
  loginSignUp: 'loginPage.loginSignUp',
  username: 'loginPage.username',
  password: 'loginPage.password',
  term: 'loginPage.term',
  forgot: 'loginPage.forgot',
  signUpButton: 'loginPage.signUpButton',
  loginWithGoogle: 'loginPage.loginWithGoogle',
}