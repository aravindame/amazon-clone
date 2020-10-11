import React from 'react';
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/Reducer';
import '../styles/Product.css';

function Product({ id, title, price, rating, image }) {
    const [state,dispatch] = useStateValue();
    const addToBasket = ()=>{
        dispatch({
            ...state,
            type: actionTypes.ADD_TO_BASKET,
            item: { id, title, price, rating, image }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, index) => {
                            return <p key={id + index}><StarIcon /></p>;
                        })
                    }
                </div>
            </div>
            <img src={image} alt="product" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
