import Home from './components/Home';
import Bolsa from './components/Bolsa';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path='/' exact element={<Home/>}/>
        <Route path='/bolsa' exact element={<Bolsa/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
