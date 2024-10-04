import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Movie from './Movie';
import Home from './Home';
import ItemDetail from './ItemDetail';


function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/imageSlider" element={<ImageSlider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;