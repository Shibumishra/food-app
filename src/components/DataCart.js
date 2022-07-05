import React, { useState } from 'react'
import { connect } from "react-redux";
import { AddCart } from '../actions';

const DataCart = ({ items, AddCart, Uid }) => {

    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('en-US');
    }

    console.log(Uid);

    return (

        <div>
            {
                ListCart.map((item, key) => {
                    return (
                        <div>
                            <div key={key} className="">
                                <p >Total: {Uid && item.quantity}</p>
                                <p>Total (IND): {Number(TotalCart).toLocaleString('en-US')}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        items: state._todoProduct
    }
}
function mapDispatchToProps(dispatch) {
    return {
        AddCart: item => dispatch(AddCart(item))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataCart);
