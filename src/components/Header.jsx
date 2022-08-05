import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import ShoppingCart from '@containers/ShoppingCart';
import logo from '@logos/logo_yard_sale.svg';
import menuIcon from '@icons/icon_menu.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {state} =useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu-icon" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            mail@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={shoppingCartIcon} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}     
      {toggleOrders && <ShoppingCart/>} 
    </nav>
  );
};

export default Header;