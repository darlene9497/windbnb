import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Placeholder from './components/Placeholder/Placeholder';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placeholder" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
