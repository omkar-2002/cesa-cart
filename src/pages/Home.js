import React, { useState } from "react";
import "../assets/Home.css";
import Cart from "../components/Cart";
import PRODUCTS from "../dummy_data/ProductData";
import { useDispatch, useSelector } from "react-redux";
const Home = (props) => {
  const dispatch = useDispatch();

  const updatedProduct = useSelector((state) => state.products);
  const cart = useSelector((state)=> state.carts);

  const incrementHandler = (id) => {
    dispatch({ type: "increment", id: id });
    let index = updatedProduct.findIndex((item) => item.id == id);
   
  };
  const decrementHandler = (id) => {
    let index = updatedProduct.findIndex((item) => item.id == id);
    let item = updatedProduct[index];
    if (item.count >= 1) {
      dispatch({ type: "decrement", id: id });
    } else {
      return;
    }
  };

  const cartitems = updatedProduct.filter(item =>
    item.count >= 1
  )

  return (
    <div className="container">
      <div className="leftContent">
        {updatedProduct.map((item) => {
          return (
            <Cart
              Price={item.price}
              key={item.id}
              imageUrl={item.imageUrl}
              onIncrement={() => incrementHandler(item.id)}
              onDecrement={() => decrementHandler(item.id)}
              count={item.count}
              title = {item.title}
            />
          );
        })}
      </div>
      <div className="rightContent">
        <div className="header">
          <h1>CART</h1> <h2>(Total Items)</h2>
        </div>
        <div className="items">
         
           
              {" "}
              <div className = "itemheading">
              <h2>Items</h2>
              <h2 >Quantity*Price</h2>

              </div>
              {" "}
              
              {cartitems.map(item =>{
                return <div className = "cartitem"><h3>{item.title}</h3> <h3>{item.count}*{item.price}</h3></div>
              })}
              
             
           
           
           
           
          
          <div className="Total">
              <h2>TOTAL PRICE</h2>{" "}
              <h2>
                {updatedProduct[0].count * updatedProduct[0].price +
                  updatedProduct[1].count * updatedProduct[1].price +
                  updatedProduct[2].count * updatedProduct[2].price +
                  updatedProduct[3].count * updatedProduct[3].price}
              </h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
