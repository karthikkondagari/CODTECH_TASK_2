import React   from "react";
import Hero from "../Hero/hero";
import Popular from "../../Component/Popular/popular";
import Offers from "../Offers/offers";
import NewCollection from "../NewCollection/newcollection";
import Newsletter from "../Newsletter/newsletter";

const Shop =()=>{
    return(
        
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            
            <NewCollection/>
            
            <Newsletter/>
            
            
        </div>
        

    );

}
export default Shop