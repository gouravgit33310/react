import Navigation from './Navigation';
import './App.css';
import { useState } from 'react';
const Navbar = () => {
    let [change , setchange] = useState("")
    function openmenu() {
       setchange(change ="block")
    }
    return (
        <>
            <navbar className="navbar-main">
                <div className="logo">SHOPPERS</div>
                <div className='navigation'>
                 <Navigation />
                </div>
                <div className='cart-main'>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div class="dropdown">
            <button class="menu">Menu</button>
            <div class="main-menu">
            <Navigation />
            </div>
            </div>
               
            </navbar>
        </>
    )
}

export default Navbar;