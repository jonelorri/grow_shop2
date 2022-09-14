import React from 'react';
import { useState } from 'react';
import logo from '../img/Recurso5.png';
import logo_text from '../img/crypto_grow_shop.png';
import Header from './Header';
import SingleProduct from './SingleProduct';
import critical from '../img/critical5.jpeg';
import auto_critical from '../img/auto_critical4.jpeg';

const Home = () => {
  const [products] = useState([
    {
      id: 1,
      code: "critical_auto",
      name: "Critical Auto (semilla)",
      description: "Critical Auto es la semilla de marihuana más recomendada para los cultivadores sin experiencia. Fácil, rápida y generosa. La podremos cosechar en unos 60-70 días desde que la germinamos",
      price: 4,
      img: auto_critical,
    },
    {
      id: 2,
      code: "critical_fem",
      name: "Critical Feminizada (semilla)",
      description: "Critical es la variedad más vendida y cultivada del mundo. Son plantas resistentes, fáciles de cultivar y con grandes cogollos. Estas, estarán listas para cosechar a mediados o finales del mes de septiembre",
      price: 4,
      img: critical,
    },
  ]);
  
  return (
    <div className='home'>
      <Header/>
      <div className='front_page'>
        <img src={logo} alt='logo' className='logo'></img>
        <img src={logo_text} alt='naming' className='logo_text'></img>
      </div>
      <div className='front_page2'>
        <div className='front_page2_content'>
          <img src={logo} alt='logo' className='logo2'></img>
          <img src={logo_text} alt='naming' className='logo_text2'></img>
        </div>
        <div className='banner'>
          <div className='banner_contenido'>
            <h2>La mejor CALIDAD garantizada</h2>
            <h2>Envios GRATIS a toda la península</h2>
            <h2>Pagos por la red de POLYGON</h2>
          </div>
        </div>
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