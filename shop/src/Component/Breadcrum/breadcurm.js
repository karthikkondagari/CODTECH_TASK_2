import React   from "react";
import './beardcurn.css';
import arrow_icon from '../../Asserts/arrow.png'
const Beardcurn =(props)=>{
 const {product}=props;
    return(
        <div className="beardcurn">
         HOME <img src={arrow_icon} alt=''/>SHOP<img src={arrow_icon} alt=""></img>{product.category} <img src={arrow_icon} alt=""/>{product.name}
            
        </div>
    )

}
export default Beardcurn