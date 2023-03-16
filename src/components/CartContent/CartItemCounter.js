import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, addProduct } = useContext(dataContext);

  const decrese = () => {
    const prdoductrepeat = cart.find((item) => item.id === product.id);
    prdoductrepeat.quanty !== 1 &&
      setCart(
        cart.map((item) => (item.id === product.id ? { ...prdoductrepeat, quanty: prdoductrepeat.quanty - 1 } : item))
      );
  };
  return (
    <>
      <p className='counter-button' onClick={decrese}>
        -
      </p>
      <span className='counter-value'>{product.quanty}</span>
      <p className='counter-button' onClick={() => addProduct(product)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;
