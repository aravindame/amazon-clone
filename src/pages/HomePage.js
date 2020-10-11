import React from 'react';
import Banner from '../components/Banner';
import Product from '../components/Product';
import products from "../data";
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home">
            <Banner />
            <div className="home__row">
                {
                    products.map(product =>(
                        <Product key={product.id} {...product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage;