import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';
import '../styles/Subtotal.css';


function Subtotal() {
    const [{basket}] = useStateValue();

    const getBasketTotal = (basket)=>{
        return basket.reduce((amount, item)=> (item.price + amount),0);
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.lenght} items) : <strong>{value}</strong>
                        </p>
                        <small className ="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                    )
                } 
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Checkout</button>
        </div>
    )
}

export default Subtotal
