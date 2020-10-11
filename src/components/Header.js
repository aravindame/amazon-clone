import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../config/Firebase';
import '../styles/Header.css';

function Header() {
    const[{basket, user}] = useStateValue();
    const[url, setUrl] = useState('/login');
    const login = ()=>{
        if(user){
           auth.signOut();
        }
    }
    useEffect(()=>{
        setUrl(!user ? "/login" : "")
    }, [user]);
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo"  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={url} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionOne">{!user ? "Hello": user?.email}</span>
                        <span className="header__optionTwo">{!user ? "Sign In": "Sign Out"}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Returns</span>
                        <span className="header__optionTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Your</span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;

