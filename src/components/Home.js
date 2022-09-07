import React from 'react';
import { useState } from 'react';
import logo from '../img/logo_white.png';
import logo_text from '../img/crypto_grow_shop.png';
import background from '../img/background1212.png';
import SingleProduct from './SingleProduct';
import critical from '../img/critical5.jpeg';
import auto_critical from '../img/auto_critical4.jpeg';

const Home = () => {
  const [products] = useState([
    {
      id: 1,
      code: "critical_auto",
      name: "Critical Auto (semilla)",
      description: "Critical Auto es la semilla de marihuana más recomendada para los cultivadores sin experiencia. Fácil, rápida y generosa.",
      price: 4,
      img: auto_critical,
    },
    {
      id: 2,
      code: "critical_fem",
      name: "Critical Feminizada (semilla)",
      description: "Critical es una semilla de marihuana feminizada que lo tiene todo y que se encuentra entre las grandes damas del cannabis: crece sin problemas, su capacidad productiva es espectacular, sus cualidades aromáticas y gustativas son inigualables, y su potente efecto produce un impresionante y característico subidón que todo el mundo quiere experimentar.",
      price: 4,
      img: critical,
    },
  ]);
  
  return (
    <div>
      <div style={{backgroundImage: `url(${background})`}} className='front_page'>
        <img src={logo} alt='logo' className='logo'></img>
        <img src={logo_text} alt='naming' className='logo_text'></img>
      </div>
      <div className='contenido'>
        {products.map(prod => {
          return (
            <SingleProduct prod={prod} key={prod.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home