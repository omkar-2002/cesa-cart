import { createStore } from "redux";
import PRODUCTS from "../dummy_data/ProductData"


const  counterReducer = (state= {  products: PRODUCTS, carts: []},action) =>{
    
    if(action.type == "increment"){
  const index =  state.products.findIndex(item => item.id == action.id)
   let item = state.products[index];
   let updatedproductlist = [...state.products]

   updatedproductlist[index] = {
...item,
count: item.count + 1
   } 
      return {
          ...state,
          products: updatedproductlist
      }  
    } if(action.type == "decrement"){
        const index =  state.products.findIndex(item => item.id == action.id)
        let item = state.products[index];
        let updatedproductlist = [...state.products]
     
        updatedproductlist[index] = {
     ...item,
     count: item.count - 1
        } 
           return {
               ...state,
               products: updatedproductlist
           }
    }
    return state
}

const  store = createStore(counterReducer);

export default store;