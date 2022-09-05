import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes className="App">
        <Route path='/' exact element={<Home/>}/>
        {/* <Route path='/bag' exact element={<Home/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
