import './App.css';
import { useContext } from 'react';
import Popular from './Popular';
import Banner from './Banner';
import Home from './Home';
import Navbar from './Navbar';
import Product from './Product';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context';
// import { useContext } from 'react';
import { useGlobalcontext } from './context';
import Displayproduct from './Dispalyproduct';


function App() {
  const data = useContext(AppContext);
  return (
    <div className="App">
     
      <BrowserRouter>
        <Navbar />
        <Displayproduct/>
        <Routes>
          <Route path='/' element={<Banner />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
