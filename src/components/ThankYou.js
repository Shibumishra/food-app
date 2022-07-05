import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const OrderConform = () => {
    const [home, setHome] = useState(false)

    return (<>
        {home && <Redirect to="/" />}

        <div style={{ marginTop: "100px" }} className="order-Conform">
            <h2>Checkout</h2>

            <p>Thank you for your order.</p>
        </div>
    </>
    );
}

export default OrderConform;