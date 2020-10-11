import React from 'react';
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';
import { useStateValue } from '../context/StateProvider';
import '../styles/CheckOutPage.css';

function CheckOutPage() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    (basket.length === 0) ? (
                        <div>
                            <h2>Your Amazon Cart is empty</h2>
                        </div>
                    ) : (
                            <div>
                                <h2 className="checkout__title">Your shopping basket.</h2>
                                {basket.map((item, index) => <CheckoutProduct key={item.id + index} {...item} />)}
                            </div>
                        )
                }
            </div>
            {
            (basket.length > 0) && (
                <>
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                </>
            )
            }
        </div>
    )
}

export default CheckOutPage;