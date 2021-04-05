import React, { useEffect, useState } from 'react';
// import '../../fakeData';
import fakeData from '../../fakeData';
import Product from '../../Product/Product';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import './Shop.css';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCarts] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => pd => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart([existingKey]);
            return product;
        })
        // console.log(previousCart);
        
        setCarts(previousCart);
    })

    const handleAddProduct = (product) => {
        const toBeAdded = product.key;

        const sameProduct = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if(sameProduct){
             count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !==  toBeAdded);
            newCart = [...others, sameProduct];
        }
        else{
            product .quantity = 1;
            newCart = [...cart, product];

        }
        
            // console.log('product added', product);
        //  newCart = [...cart, product];
        setCarts(newCart);
       
        addToDatabaseCart(product.key, count);
    }

    return (

        <div className="shop-container">
           <div className="product-container">

           {/* <h2>{products.length}</h2> */}
           <ul>
               {
                   products.map(prd => <Product 
                    showAddtoCart={true}
                    handleAddProduct = {handleAddProduct} product = {prd}></Product>)
               }
           </ul>
           </div>
           <div className="cart-container">
             <Cart cart = {cart}>
             <Link to="/review">
            <button className="add-btn">Review Order</button>
            </Link>
             </Cart>
           </div>
        </div>
    );
};

export default Shop;