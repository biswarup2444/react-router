import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import ProductList from './components/Product/ProductList';
import { FeaturedProducts } from './components/Product/FeaturedProducts';
import { NewProducts } from './components/Product/NewProducts';
import UserInfo from './components/Users/UserInfo';
import User from './components/Users/User';
import Admin from './components/Users/Admin';
import Search from './components/Search';
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
  const LazyParagraph = React.lazy(()=>import('./components/BigParagraph'));
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/**Here we're using absolute paths which beings with a / i.e, it has the whole path from the root */}
        <Route path='/order-summary' element={<OrderSummary/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        {/**While here we are using a nested route we have to use relative path here the featured component is shown at '/product/featured'
         * if we were to use /featured then it would have shown the element at /featured not at '/product/featured' these are required for deeply nested paths
          */}
        <Route path='product' element={<ProductList/>} >
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        {/**
         * here we are trying to access the data from a user data file now if we want to add some conditions such that all the user is displayed upon visiting the
         * users/admin path and upon enter the id of the user only that user is displayed. Now this is quite common incase browsers where for a specific user a specific information is shown
         * now if we have a large number of users it is not possible to bind a route specifically for them hence in order to do this we can do
         * dynamically setup the routes such that all when the user enters a certain userid the user data for that userid is shown
         */}
        <Route path='user' element={<UserInfo/>}>
         <Route path=':id' element={<User/>}/>
         <Route path='admin' element={<Admin/>}/>
        </Route>
        {/**
         * Now here we are using a search filter which attaches the filter content as url params
         * it uses a hook called useSearchParams which can be used to use to add the filter content to the url of the program as search params with the url
         * and we also can reset the searchParam now it is same as state variables in react but the difference is that the variables and values
         * are 
         */}
         <Route path='search' element={<Search/>}/>
         {/**
          * Lazy Loading is a technique in which during initial load all the elements is done in an efficient way
          * as the elements could be divided up into chucks that are loading only upon requirement
          * for instance the big paragraph element requires a lot of time to load
          * and until all the elements are not loaded the app does not lod
          * hence to load the app efficiently we can load the big paragraph route efficiently as a result the application loads faster and
          * the chunk size is reduced. 
          *React.lazy is not enough as there should a fallback ui while the page loads
          */}
         <Route path='lazy' element={<React.Suspense fallback='Loading...'><LazyParagraph/></React.Suspense>}/>
        <Route path='*' element={<NoMatch/>} />

      </Routes>
    </div>
  );
}

export default App;
