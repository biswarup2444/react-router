import React from 'react';
import {Link,NavLink} from 'react-router-dom';

function Navbar() {
  /**
   * Links components of the routers are basically used as hyperlink to different
   * items, meaning by using links we can navigate inbetween different routes
   * by assigning the value to the 'to' attribute.
   */
  return (
    <nav>
        {/* <Link className='btn btn-primary' to='/'>Home</Link>
        <Link className='btn btn-secondary' to='/about'>About</Link> */}
        <NavLink className={({isActive})=>isActive ? 'btn btn-primary':'btn btn-secondary'} to='/'>Home</NavLink>
        <NavLink className={({isActive})=>isActive ? 'btn btn-primary':'btn btn-secondary'} to='/product'>product</NavLink>
        <NavLink className={({isActive})=>isActive ? 'btn btn-primary':'btn btn-secondary'} to='/about'>About</NavLink>
    </nav>
  )
}

export default Navbar