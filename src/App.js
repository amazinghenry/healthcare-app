import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
         <Navbar />
      <Routes>
        <Route path = "/" element = { <Homepage /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;