import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter";
const CartElements = () => {
  const { cart, setCart, setQuanity } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      setQuanity((foundId.quanty = 1));
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className='cartContent' key={product.id}>
        <img src={product.img} alt='product-card' />
        <h3>{product.name}</h3>
        <CartItemCounter product={product} />
        <h3>{product.price * product.quanty}$</h3>
        <h3 className='cart-delete-button' onClick={() => deleteProduct(product.id)}>
          ❌
        </h3>
      </div>
    );
  });
};

export default CartElements;
