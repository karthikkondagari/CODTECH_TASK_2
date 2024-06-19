
import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../../Asserts/dropdown_icon.png";
import Item from "../Item/item";

const ShopCategory = ({ banner, category }) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img src={banner} alt="Shop Banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> Out of 35 Products
                </p>
                <div className="shopcategory-sort">
                    <p>
                        Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
                    </p>
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => (
                    category === item.category ? (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ) : null
                ))}
            </div>
        </div>
    );
}

export default ShopCategory;
