import React, { useState } from "react";
import "../assets/Home.css";
import Cart from "../components/Cart";
import PRODUCTS from "../dummy_data/ProductData";
import { useDispatch, useSelector } from "react-redux";
const Home = (props) => {
  const dispatch = useDispatch();

  const updatedProduct = useSelector((state) => state.products);

  const incrementHandler = (id) => {
    dispatch({ type: "increment", id: id });
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
            />
          );
        })}
      </div>
      <div className="rightContent">
        <div className="header">
          <h1>CART</h1> <h2>(Total Items)</h2>
        </div>
        <div className="items">
          <div className="itemheader">
            <div>
              {" "}
              <h3>Items</h3>{" "}
              <ul>
                <li>{updatedProduct[0].title} </li>
                <li>{updatedProduct[1].title}</li>
                <li>{updatedProduct[2].title}</li>
                <li>{updatedProduct[3].title}</li>
              </ul>{" "}
            </div>
            <div>
              <h3>Quantity</h3>
              <ul>
                <li>{updatedProduct[0].count}</li>
                <li>{updatedProduct[1].count}</li>
                <li>{updatedProduct[2].count}</li>
                <li>{updatedProduct[3].count}</li>
              </ul>
            </div>{" "}
            <div>
              <h3>Price</h3>
              <ul>
                <li>{updatedProduct[0].count * updatedProduct[0].price}</li>
                <li>{updatedProduct[1].count * updatedProduct[1].price}</li>
                <li>{updatedProduct[2].count * updatedProduct[2].price}</li>
                <li>{updatedProduct[3].count * updatedProduct[3].price}</li>
              </ul>
            </div>
           
          </div>
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
