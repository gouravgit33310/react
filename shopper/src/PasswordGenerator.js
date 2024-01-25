import {useState, useEffect} from "react"
const PasswordGenerator = () => {
    let [pass, setPass] = useState("");
    let [numberAllowed, setnumberAllowed] = useState(false);
    
    const [range, setRange] = useState("");
   
    // // PasswordCalculator = () => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        console.log(numberAllowed);
        if (numberAllowed) str += "1234567890";
              for(let i = 0; i <= range; i++) {
           let char = Math.floor(Math.random()*str.length + 1)
          pass += str.charAt(char)
        }
    // // } 
   

    return(
        <>
        <input type="text" value={pass}></input>
       <input type="range"  min="6" max="100" onChange={(event)=>setRange(event.target.value)}/>
       <input type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={numberAllowed} onChange={()=>setnumberAllowed((prev) => (!prev))}/>
        </>
    )
    
  
}
export default PasswordGenerator;

