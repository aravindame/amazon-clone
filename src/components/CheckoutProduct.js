import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../context/StateProvider';
import '../styles/CheckoutProduct.css';
import { actionTypes } from '../context/Reducer';

function CheckoutProduct({ id, title, price, rating, image }) {
    const [state, dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            ...state,
            type: actionTypes.REMOVE_FROM_BASKET,
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="product" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, index) => {
                            return <p key={id + index}><StarIcon /></p>;
                        })
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
