import React   from "react";
import './newcollection.css';
import new_collections from '../../Asserts/new_collections'
import Item from "../Item/item";

const NewCollection =()=>{
    return(
        <div className="newcollection">
            <h1 >NEW COLLECTION</h1>
 <hr/>
 <div className="collection">  {
                    new_collections.map((item, i) => (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
                    ))
                }
            </div>       
        </div>
    
    )

}
export default NewCollection