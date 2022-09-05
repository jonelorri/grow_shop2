import React from 'react';
import './styles.css';
import bars from '../img/bars.png';
import cross from '../img/cross.png';

const Header = () => {
  function move() {
    document.querySelector('.toggle').classList.toggle('toggle_move');
    document.querySelector('.bars').classList.toggle('bars_display');
    document.querySelector('.cross').classList.toggle('cross_display');
  }

  return (
    <header className='header'>
      <img src={bars} alt='bars' className='bars' onClick={move}></img>
      <img src={cross} alt='cross' className='cross' onClick={move}></img>
      <div className='toggle'>
        <h1>Tienda</h1>
        <h1>Bolsa</h1>
      </div>
    </header>
  )
}

export default Header