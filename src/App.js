import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import Home from './pages/Home'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;