import './App.css';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

// components
import Navbar from './components/Navbar';
// react
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <h1>Context Api</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/page2' element={<About />} />
                    <Route path='/page3' element={<Products />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
