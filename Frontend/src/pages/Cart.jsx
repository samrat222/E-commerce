import React, { useContext } from 'react'
import styled from "styled-components";
import { popularProducts } from '../data';
import { ShopContext } from "../context/Shop-context"
import CartItem from './CartItem';
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";

import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container>

        <div className='cart'>
          <h1>
            Your cart Items
          </h1>
        </div>
        <div className="cartItems" >
          {popularProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </Container>
    </>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`

export default Cart