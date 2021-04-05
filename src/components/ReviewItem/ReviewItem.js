import React from 'react';

const ReviewItem = (props) => {

    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom:"1px solid lightgray",
        marginBottom: "15px",
        paddingBottom: "15px",
        marginLeft: "100px"

    }
    return (
        <div style={reviewItemStyle}className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Total quantity: {quantity}</p>
            <p>Price : ${price}  </p>
            <button className="add-btn" onClick={() =>props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;