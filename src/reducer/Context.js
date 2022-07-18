import { createContext, useContext, useReducer , useState } from "react";
import axios from 'axios';
import { cartReducer} from "./UseReducer";
import  data from "../navbarcom/Data";

const Cart = createContext();

const Context = ({ children }) => {

  const [product, setProduct] = useState([]);

  const loadUsers = async () => {
      const result = await axios.get("http://localhost:4000/product");
      setProduct(result.data);
  };


  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
    isLoading: false,
  });

//   const [productState, productDispatch] = useReducer(productReducer, {
//     byStock: false,
//     byFastDelivery: false,
//     byRating: 0,
//     searchQuery: "", 
//   });wwwwwwww
  return (
    <Cart.Provider value={{ state, dispatch}}>
      {children}
    </Cart.Provider>  
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;