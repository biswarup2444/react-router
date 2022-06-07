import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import ProductList from './components/Product/ProductList';
import { FeaturedProducts } from './components/Product/FeaturedProducts';
import { NewProducts } from './components/Product/NewProducts';
/**
 * 
 * The app element contains the wrapper element Routes
 * and route
 * Routes contains all the routes that are required for the app to function
 * Route specifies the individual routes the app might contain and this
 * element has two props
 * 
 * 1. path -> which is the required path at which the elements are served.
 * 2. element -> the component which is served at that path meaning
 * 
 * at base the app runs at localhost:3000/
 * /-> serves the homepage
 * /about -> serves the about page
 * the '*' route will only get executed if no matching routes are find in the applications.
 * 
 * for nested routed we can add routes as children to the current route element
 * i.e, for featured component to render the path would be '/product/featured' which is represented by the first
 * child element and product/new would render the newProductList
 * 
 * now there another way where we need some default element to render at the parent level.This route is called index route
 * i.e we can render on of the child element as default element whenever the parent route is only reached
 * here initially the 'product/feature' element is rendered as we have marked that element with index route 
 * our nav links would work the same way previously expected but during initial render instead of black screen the featured list is show.
 */
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/order-summary' element={<OrderSummary/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='product' element={<ProductList/>} >
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </div>
  );
}

export default App;
