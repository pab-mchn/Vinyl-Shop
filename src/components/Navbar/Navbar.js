import { useState } from "react";
import "./Navbar.css";
import CartContent from "../CartContent/CartContent";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className='nav-container'>
        <nav className='navbar'>
          <h1 className='navbar-logo'>Shop.</h1>
          <h2 className='seeCarrito' onClick={openModal}>
            🛒
          </h2>
        </nav>
      </div>
      {modal ? (
        <section className='modal-container'>
          <div className='modal-header'>
            <h1 className='modal-header-title'>Carrito.</h1>
            <h1 className='modal-header-button' onClick={openModal}>
              X
            </h1>
          </div>
          <CartContent />
        </section>
      ) : null}
    </>
  );
};

export default Navbar;
