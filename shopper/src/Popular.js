import { useEffect, useState } from "react";


const Popular = () => {
  let [data, setData] =  useState([])  
    
    
    let API = 'https://fakestoreapi.com/products/'
    const fetchingApi = async (url) => {
      try {
        const res = await fetch(url);    
        let resdata = await res.json();
           setData(resdata)
      } catch (error) {
        console.log(error)
      }
    }


    useEffect(()=>{
        fetchingApi(API)    
    }, []);
    return (
        <>
        <div className="product-container">
        {data.map((dataid)=>
        
        <div className="product-card">
            <p>{dataid.title}</p>
            <div className="price"><span>Price : </span>{dataid.price} </div>
            <div className="img-holder">
                <img src={dataid.image}/>
            </div>
            
        </div>
        
        )}
        </div>
        </>
    )
}
export default Popular;


