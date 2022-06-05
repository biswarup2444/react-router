import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
/**
 * 
 * The app element contains the wrapper element Routes
 * and route
 * Routes contains all the routes that are required for the app to function
 * Route speicifies the individual routes the app might contain aand this
 * element has two props
 * 
 * 1. path -> which is the required path at which the elements are served.
 * 2. element -> the component which is served at that path meaning
 * 
 * at base the app runs at localhost:3000/
 * /-> serves the homepage
 * /about -> serves the about page
 */
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
