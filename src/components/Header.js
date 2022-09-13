import React from 'react';
import './styles.css';
import bars from '../img/bars.png';
import cross from '../img/cross.png';
import { Link } from 'react-router-dom';

const Header = () => {
  function move() {
    document.querySelector('.toggle').classList.toggle('toggle_move');
    document.querySelector('.bars').classList.toggle('bars_display');
    document.querySelector('.cross').classList.toggle('cross_display');
  }

  return (
    <div>
      <header className='header'>
        <img src={bars} alt='bars' className='bars' onClick={move}></img>
        <img src={cross} alt='cross' className='cross' onClick={move}></img>
        <div className='toggle'>
          <h1>Tienda</h1>
          <Link style={{ textDecoration: 'none' }} to='/bolsa'><h1>Bolsa</h1></Link>
          <div className='login_light'></div>
          <h1>Login</h1>
        </div>
      </header>
      <header className='header2'>
        <div className='header2_content'>
          <h1>Tienda</h1>
          <div className='header2_content_right'>
            <Link style={{ textDecoration: 'none', color: 'rgb(250, 250, 250)'}} to='/bolsa'><h1>Bolsa</h1></Link>
            <div className='login_light2'></div>
            <h1>Login</h1>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header