import React   from "react";
import './offers.css';
import exclusive_image from '../../Asserts/exclusive_image.png'
const Offers =()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for You</h1>
                <p>Only On The Best Seller Product</p>
                <button > Check Now</button>
            </div>
            <div className="offers-rigth">
                <img src={exclusive_image} alt=""/>
            </div>
            
        </div>
    )

}
export default Offers