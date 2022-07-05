import React, { useState } from 'react'
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';
import Button from '@material-ui/core/Button';
import { Redirect, Link, useHistory } from 'react-router-dom';

const Cart = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart, handleClose }) => {
    const history = useHistory();
    //  console.log(items)
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });


    const handleCheckout = () => {
        localStorage.setItem('myData', JSON.stringify(ListCart));
        handleClose()
        DeleteCart()
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => console.log('Initial timeout!'), 1000);
    //   }, []);

    return (
        <div>
            <div className="checkout_card_wrapper">
                <div >
                    <h1>Order Summary</h1>
                    {
                        ListCart.map((item, key) => {
                            return (
                                <div>
                                    {/* <div><i className="badge badge-danger" onClick={() => DeleteCart(key)}>X</i></div> */}
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div>
                                                <p className="checkout_card_header">{item.name}</p>
                                            </div>
                                            <div>
                                                <p>{item.quantity}</p>
                                            </div>
                                            <div>
                                                <Button size="small" color="primary" style={{ color: "#fff", backgroundColor: "blue", fontSize: '20px', margin: '4px' }} onClick={() => IncreaseQuantity(key)}>+</Button>
                                                <Button size="small" color="primary" style={{ color: "#fff", backgroundColor: "red", fontSize: '20px', margin: '4px' }} onClick={() => DecreaseQuantity(key)}>-</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div>
                    <p> Total (IND): {Number(TotalCart).toLocaleString('en-US')}</p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Link to='/thankyou'>
                        <Button
                            size="small" color="primary"
                            style={{
                                color: "#fff",
                                backgroundColor: "blue",
                                fontSize: '15px',
                                margin: '4px'
                            }}
                            onClick={handleCheckout}
                        >SAVE AND CHECKOUT</Button>
                    </Link>
                    <Link to="/">
                        <Button size="small" color="primary"
                            style={{
                                color: "#blue",
                                backgroundColor: "#fff",
                                fontSize: '15px',
                                margin: '4px'
                            }}
                            onClick={() => {
                                handleClose()
                                DeleteCart()
                            }}
                        >CANCLE</Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}




export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart)
