import React from 'react';
import '../styles/Banner.css';

function Banner() {
    return (
        <div className="banner">
            <img className="banner__image" src={img_url} alt="banner"/>
        </div>
    )
}

export default Banner;

const img_url = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"