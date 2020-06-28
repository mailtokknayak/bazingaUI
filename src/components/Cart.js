import React, {Component} from "react";
import {connect} from "react-redux";
import util from "../util";
import {addToCart, removeFromCart, handleCartCheckout} from "../actions/cartActions";
import Confirmation from "./Confirmation";

class Cart extends Component {
    render() {
        const {cartItems, checkoutData} = this.props;
        return (
            <div>
                <div className="alert alert-info">
                    {cartItems.length === 0 ? (
                        "Cart is empty"
                    ) : (
                        <div>
                            You have {cartItems.length} items in the cart. <hr/>
                        </div>
                    )}
                    {cartItems.length > 0 && (
                        <div>
                            <ul style={{marginLeft: -25}}>
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        <b>{item.title}</b>
                                        <button
                                            style={{float: "right"}}
                                            className="btn btn-danger btn-xs"
                                            onClick={(e) =>
                                                this.props.removeFromCart(this.props.cartItems, item)
                                            }
                                        >
                                            X
                                        </button>
                                        <button
                                            style={{float: "right"}}
                                            className="btn btn-primary btn-xs"
                                            onClick={(e) =>
                                                this.props.addToCart(this.props.cartItems, item)
                                            }
                                        >
                                            +
                                        </button>
                                        <br/>
                                        {item.count} X {util.formatCurrency(item.price)}
                                    </li>
                                ))}
                            </ul>

                            <b>
                                Sum:{" "}
                                {util.formatCurrency(
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                )}
                            </b>
                            <button
                                onClick={(e) =>
                                    this.props.handleCartCheckout(this.props.cartItems)
                                }
                                className="btn btn-primary"
                            >
                                checkout
                            </button>
                        </div>
                    )}

                </div>
                {
                    cartItems.length === 0 && Object.keys(checkoutData).length !== 0 &&
                    <Confirmation checkoutData={checkoutData}/>
                }
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => (
    {
        cartItems: state.cart.items,
        checkoutData: state.cart.checkoutData
    });
export default connect(mapStateToProps, {addToCart, removeFromCart, handleCartCheckout})(Cart);
