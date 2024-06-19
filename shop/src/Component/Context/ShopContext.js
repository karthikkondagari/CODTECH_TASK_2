// import React ,{createContext} from 'react';
// import all_product from "../../Asserts/all_product";
// export const ShopContext=createContext(null);
// const ShopContextProvider =(props)=>{
//     const contextValue={all_product};
//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider
import React, { useState,createContext } from 'react';
import all_product from '../../Asserts/all_product'; 


export const ShopContext = createContext(null);
const getdefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems,setCartItems]=useState(getdefaultCart());
    const contextValue={all_product,cartItems};

console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
