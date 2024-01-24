import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [menu , setMenu] = useState("")

    return(
        <ul>
        <li onClick={()=>{setMenu("home")}}><Link to="/">Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("category")}}>Category{menu==="category"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("popular")}}><Link to='/popular'>Popular</Link>{menu==="popular"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("product")}}><Link to="/product">Products</Link>{menu==="product"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("tools")}}>Tools{menu==="tools"?<hr/>:<></>}</li>
        <li className='cart-hidden' onClick={()=>{setMenu("cart")}}><Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>{menu==="cart"?<hr/>:<></>}</li>
        
    </ul>
    )
}
export default Navigation