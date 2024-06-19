
import './App.css';
import React from "react";
import Product from './Component/Pages/Product';
import Cart from './Component/Pages/Cart';
import Login from './Component/Pages/Login';
import Navbar from './Component/Navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Component/Pages/Shop';
import ShopCategory from './Component/Pages/ShopCategory';
import men_banner from './Asserts/banner_mens.png';
import women_banner from './Asserts/banner_women.png';
import kid_banner from './Asserts/banner_kids.png';
import Footer from './Component/Footer/footer';

function App() {
  return (
    <>
    <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory banner={men_banner} category='mens'/>}/>
  <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>
  <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
  <Route path='/product' element={<Product/>}>
  <Route path='/productId' element={<Product/>}/>
  </Route>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
  
</Routes>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
