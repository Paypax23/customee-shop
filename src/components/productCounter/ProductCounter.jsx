import './productCounter.scss';
import { useEffect, useState } from "react";


function ProductCounter({quantity=1}) {
    const [counter,setCounter] = useState(quantity)
    useEffect(()=>{
        if(counter<1) setCounter(1);
    },[counter])
    return ( 
        <div className="counter-container">
            <span onClick={()=>setCounter(prev=>prev+1)} className="counter plus">+</span>
            <span className="counter">{counter}</span>
            <span onClick={()=>setCounter(prev=>prev-1)} className="counter neg">-</span>
        </div>
     );
}

export default ProductCounter;