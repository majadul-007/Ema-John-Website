import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import congratsImage from '../../images/giphy.gif';

const Review = () => {
    
    const [orderPlaced, setOrderPlaced]  = useState(false);
    
    const [ cart, setCart] = useState([]);
    const handlePlaceOrder = () =>{
        // console.log("Place order placed")
        setCart([]);
        setOrderPlaced(true)
        processOrder();
    }
    const removeProduct = (productkey) => {
        console.log("Remove clicked", productkey);
        const newCart = cart.filter(pd => pd.key != productkey)
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }

    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];

            return product;
        });
        setCart(cartProducts);
        console.log(cartProducts);
        }, [])
        

        let thankYou;
        if(orderPlaced){

           thankYou =  <img src={congratsImage} alt=""/>
        }

    
    return (
        <div className="shop-container">
            <div className="product-container">
           
            {
                cart.map(pd => <ReviewItem 
                    key={pd.key}
                    removeProduct = {removeProduct}
                    product= {pd}></ ReviewItem>)
                }
                {
                    thankYou
                }

            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                    <button className="add-btn" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>

            </div>
            

        </div>

    );
    
    
};

export default Review;<h1>This is shop</h1>