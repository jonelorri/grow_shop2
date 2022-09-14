import React from 'react';
import './styles.css';
import bars from '../img/bars.png';
import cross from '../img/cross.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ethers } from "ethers";

const Header = () => {

  const [currentAccount, setCurrentAccount] = useState("");

  function move() {
    document.querySelector('.toggle').classList.toggle('toggle_move');
    document.querySelector('.bars').classList.toggle('bars_display');
    document.querySelector('.cross').classList.toggle('cross_display');
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
        document.querySelector('.login_light2').style.backgroundColor = "#43FFD2";
        document.querySelector('.login_light2').style.boxShadow = "0 0 10px #43FFD2";
      } else {
        console.log("No authorized account found");
        document.querySelector('.login_light2').style.backgroundColor = "#FF5468";
        document.querySelector('.login_light2').style.backgroundColor = "0 0 10px #FF5468";
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("You need to download Metamask");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      document.querySelector('.login_light2').style.backgroundColor = "#43FFD2";
      document.querySelector('.login_light2').style.boxShadow = "0 0 10px #43FFD2";
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div>
      <header className='header'>
        <img src={bars} alt='bars' className='bars' onClick={move}></img>
        <img src={cross} alt='cross' className='cross' onClick={move}></img>
        <div className='toggle'>
          <Link style={{ textDecoration: 'none' }} to='/'><h1>Tienda</h1></Link>
          <Link style={{ textDecoration: 'none' }} to='/bolsa'><h1>Bolsa</h1></Link>
          <div className='login_light'></div>
          <h1>Login</h1>
        </div>
      </header>
      <header className='header2'>
        <div className='header2_content'>
          <Link style={{ textDecoration: 'none', color: 'rgb(250, 250, 250)' }} to='/'><h1>Tienda</h1></Link>
          <div className='header2_content_right'>
            <Link style={{ textDecoration: 'none', color: 'rgb(250, 250, 250)'}} to='/bolsa'><h1>Bolsa</h1></Link>
            <div className='login_light2'></div>
            <h1 onClick={connectWallet}>Login</h1>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header