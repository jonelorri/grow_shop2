import './stylesProducts.css';

const SingleProduct = ({prod}) => {

  function handleClick() {
    const card = document.querySelector(`.${prod.code}`);
    card.classList.toggle('is-flipped');
  }

  function handlesecond(e) {
    console.log(e);
  }

  return (
    <div>
      <div className='product2'>
        <div className={`product_inner ${prod.code}`} onClick={handleClick}>
          <div className='product_face product_face--front'>
            <img src={prod.img} alt={prod.name} className='product_image'></img>
            <h1>{prod.name}</h1>
            <div className='underline'></div>
            <h2>{prod.price} matic</h2>
          </div>
          <div className='product_face product_face--back'>
              <div className='product_content'>
                  <h2>{prod.name}</h2>
                  <p>{prod.description}</p>
                  <button onClick={() => handlesecond(prod.code)}>Añadir a la bolsa</button>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default SingleProduct