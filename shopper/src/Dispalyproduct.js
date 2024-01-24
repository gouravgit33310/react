import { useEffect, useState } from "react"
import axios from "axios"
const Displayproduct = () => {
    const [error, setError] = useState(false)

    useEffect(()=>{
     (async()=>{   
       try {
        setError(false)
         const response = await axios.get('https://fakestoreapi.com/products/') 
         console.log(response.data)
       } catch (error) {
          setError(true)
       }
     })()
    },[]);

}
export default Displayproduct;