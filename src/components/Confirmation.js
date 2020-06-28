import React from "react";

const Confirmation = (props) => {
    return (
        <div className="alert alert-info">
            Your Order is Placed Successfully!
            {props.checkoutData.selectedItems.length > 0 && props.checkoutData.selectedItems.map((items) => {
                return (
                    <ul>
                        <li>
                            {items.title}
                            <br/>
                            Quantity - {items.quantity}
                            <br/>
                            Price - {items.price}
                        </li>
                    </ul>
                )
            })}
            Final Amount - {props.checkoutData.finalAmount}
            <br/>
            Order Id - {props.checkoutData.orderId}
        </div>
    )
}

export default Confirmation