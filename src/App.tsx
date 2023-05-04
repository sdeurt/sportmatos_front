import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Accueil from './pages/accueil';
import Login from './pages/login';
import NavBar from './components/navbars/navbar';
import { Products } from './components/products/product';
import Categories from './components/categories/categories';
import Cart from './components/carts/cart';
import Footer from './components/footer/footer';
import Contact from './pages/contact';
import Apropos from './pages/apropos';
import { ProductView } from './components/products/ProductView';
import { ProductNew } from './components/products/ProductNew';
import { TProduct } from './types/Tproduct';
import NotFound from './components/notFound/not_found';



export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <NavBar />

        <Routes>
          {/**/}
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="login" element={< Login />} />
          <Route path="panier" element={<Cart />} />


          <Route path="footer" element={<Footer />} />

          
            <Route path="apropos" element={<Apropos />} />
            <Route path="contact" element={<Contact />} />

          
          <Route path="*" element={<NotFound />} />
          <Route path="accueil" element={<Accueil />} /> 
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

