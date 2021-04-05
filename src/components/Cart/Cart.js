import React from 'react';

const Cart = (props) => {
    const cart = props.cart; 
    console.log(cart);       
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total +  product.price * product.quantity ;
        // console.log(product.price)
        // debugger;    

    }
    let shippingCost = 12.99;
    if (total > 15){
        shippingCost = 4.99; 
    }
    else if(total > 35){
        shippingCost = 0;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2);
    
    const formatNumber = num => {
        const precission = num.toFixed(2)
        return Number(precission);
    }
   
    // else{
    //     shippingCost = 12.99;
    // }

    return (
        <div>
            <h4>Order Summary</h4>
            <p><small>Total Order: {cart.length}</small></p>
            <p>Shipping Cost : ${shippingCost}</p>
            <p>Total price : ${grandTotal}</p>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;