import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'
import Productlist from './pages/Productlist'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from './context/Shop-context';
import Cart from './pages/Cart';

function App() {


  return (
    <>
      {/* <Home /> */}

      {/* <Productlist /> */}
      {/* <Product /> */}
      <ShopContextProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Productlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
