import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
/**
 * 
 * In this element we can render the elements based on the routes
 * now here the element featuredProducts is rendered at the route /products/featured and newProducts renders at route
 * /products/new
 * 
 * now the in the App component both of these elements  are represented as the children router of the product routes
 * as both of these have /products as their parent and these elements are part of the actual products page which is re-rendered based upon the routing
 * 
 */
function ProductList() {
  return (
    <>
        <nav>
            <NavLink className={({isActive})=>isActive ? 'btn btn-outline-primary':'btn btn-outline-secondary'} to ='featured' >featured</NavLink>
            <NavLink className={({isActive})=>isActive ? 'btn btn-outline-primary':'btn btn-outline-secondary'} to ='new' >new</NavLink>
        </nav>
        <Outlet/>
    </>
  )
}

export default ProductList;