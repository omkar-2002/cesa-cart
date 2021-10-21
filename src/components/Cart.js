import React from 'react'
import "../assets/Cart.css"
function Cart(props) {
    return (
        <div className = "Cart">
            <div className = "topContent">
                <div className = "title">{props.title}</div>
                <div className = "imagediv"> 
                <img className="image" src= {props.imageUrl}/>
                </div>
            
            </div>

            <div className = "bottomContent">
                <div className = "Button">{props.Price}</div>
                <div className = "Button" onClick = {props.onIncrement}>+</div>
                <div className = "Button" >{props.count}</div>
                <div className = "Button" onClick = {props.onDecrement}>-</div>
            </div>
        </div>
    )
}

export default Cart;
