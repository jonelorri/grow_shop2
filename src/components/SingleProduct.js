import './stylesProducts.css'
import React, { useContext } from 'react'
import { Cart } from '../Context';

const SingleProduct = ({prod}) => {

  const { cart, setCart } = useContext(Cart);

  function handleClick() {
    const card = document.querySelector(`.${prod.code}`);
    card.classList.toggle('is-flipped');
  }

  function handlesecond(e) {
    setCart([...cart, e]);
  }

  // function handlesecond(e) {
  //   setCart(cart.filter((e) => e.code !== prod.code));
  //   console.log(cart);
  // }

  return (
    <div>
      <div className='product'>
        <div className={`product_inner ${prod.code}`} onClick={handleClick}>
          <div className='product_face product_face--front'>
            <img src={prod.img} alt={prod.name} className='product_image'></img>
            <h1>{prod.name}</h1>
            <h2>{prod.price} matic</h2> 
          </div>
          <div className='product_face product_face--back'>
              <div className='product_content'>
                  <h2>{prod.name}</h2>
                  <p>{prod.description}</p>
                  <button onClick={() => handlesecond(prod)}>Añadir a la bolsa</button>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default SingleProduct