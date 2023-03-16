import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const prdoductrepeat = cart.find((item) => item.id === product.id);

    if (prdoductrepeat) {
      setCart(
        cart.map((item) => (item.id === product.id ? { ...prdoductrepeat, quanty: prdoductrepeat.quanty + 1 } : item))
      );
    } else {
      setCart([...cart, { ...product, quanty: 1 }]);
    }
  };

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  return <dataContext.Provider value={{ data, cart, setCart, addProduct }}>{children}</dataContext.Provider>;
};

export default DataProvider;
