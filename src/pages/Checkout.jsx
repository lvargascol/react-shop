import React from 'react';
import "../styles/Checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1 className="title">My orders</h1>
        <div className="checkout-content">
          <div className="checkout-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
          <div className="checkout-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
          <div className="checkout-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
          <div className="checkout-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout