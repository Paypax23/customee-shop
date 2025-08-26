import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter , Routes , Route} from "react-router";
import "./i18nConfig";
import {Provider} from "react-redux";
import { store } from './redux/store';
import FavoritePage from './pages/favorite/FavoritePage';
import ShopingCart from './pages/shoppingCart/ShopingCart';
import LoginPage from './pages/login/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} /> 
      <Route path='/favorite' element={<FavoritePage/>} /> 
      <Route path='/shopping-cart' element={<ShopingCart/>} /> 
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
);
