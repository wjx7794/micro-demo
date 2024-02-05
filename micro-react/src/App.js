import logo from './logo.svg';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="">首页 ｜ </NavLink>
          <NavLink to="product">产品 ｜ </NavLink>
          <NavLink to="about">关于</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
