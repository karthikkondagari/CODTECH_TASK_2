import React   from "react";
import './newsletter.css'
const Newsletter=()=>{
    return(
        <div className="newsletter">
            <h1> Get Your Offers on your Mail</h1>
            <p>Subscribe to u Email</p>
            <div>
               <input type="email" placeholder="Your email Id"/>
               <button>Subscribe</button>
            </div>
            
            
        </div>
    )

}
export default Newsletter