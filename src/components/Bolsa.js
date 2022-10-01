import React from 'react';
import Header from './Header';
import './styles.css';
import { useContext } from 'react';
import { Cart } from '../Context';

const Bolsa = () => {

    const { cart, setCart } = useContext(Cart);

    return (
    <div className='bolsa_contenedor'>
        <Header/>
        <div className='bolsa_contenido'>
            <div className='bolsa_resumen'>
                <h3>Resumen del pedido</h3>
                <div className='bolsa_underline'></div>
                {cart.map(cart => {
                    return (
                        <div className='bolsa_productos'>
                            <h4>{cart.name}</h4>
                            <form className='bolsa_form'>
                                <div className='valueButton' id='decrease' value="Decrease Value"><p>-</p></div>
                                <input readOnly type="number" id='number' value='0'/>
                                <div className='valueButton' id='increase' value="Increase Value"><p>+</p></div>
                            </form>
                        </div>
                    )
                })}
                <div className='bolsa_underline'></div>
                <div className='bolsa_total'>
                    <h4>Total:</h4>
                    <h5>0 matic</h5>
                </div>
                <div className='button_pay'>Comprar</div>
            </div>
        </div>
    </div>
    )
};

export default Bolsa;