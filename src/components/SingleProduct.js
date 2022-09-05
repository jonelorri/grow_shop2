import './stylesProducts.css';

const SingleProduct = ({prod}) => {
  return (
    // VOY A METER EL FLIP COMO SI FUERA UNA CARTA, Y ATRAS PONE LA DESCRIPCION Y BOTON 'ANADIR CESTA'
    <div className='product'>
        <img src={prod.img} alt={prod.name} className='product_image'></img>
        <h1>{prod.name}</h1>
        <div className='underline'></div>
        <h2>{prod.price} matic</h2>
    </div>
  )
}

export default SingleProduct