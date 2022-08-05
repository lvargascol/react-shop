import React from 'react';
import "../styles/Orders.scss";

const Orders = () => {
  return (
    <div className="orders">
      <div className="orders-container">
        <h1 className="title">My order</h1>
        <div className="orders-content">
          <div className="orders-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
              />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
              />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
              />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
              />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders