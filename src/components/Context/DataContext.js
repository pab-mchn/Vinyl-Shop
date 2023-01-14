import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuanity] = useState(1);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  const addProduct = (product) => {
    const repeat = cart.some((element) => element.id === product.id);

    if (repeat) {
      const newProductQuanty = [product];
      newProductQuanty.map((element) => {
        setQuanity((element.quanty += 1));
        return setCart(cart, { ...product, quanty: quantity });
      });
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <dataContext.Provider value={{ data, cart, setCart, quantity, setQuanity, addProduct }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
