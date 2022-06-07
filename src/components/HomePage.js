import React from 'react';
import {useNavigate} from 'react-router-dom';

/**
 * 
 * @returns the useNavigate can be used to create a navigation object which can be used to router between different components
 * programtically by simply providing the router as an arguments ot object created by the hooks.
 * 
 * if we put -1 as the argument the router would navigate to the previous page that the use was
 * the react maintains this order as in most cases all the routes are stored in a stack in the order they are called
 * now instead of adding the hooks to the stacks the user can replace the hooks and then using the -1 routing to back is not possible
 * and no previous record fo the routes are maintained.
 *  
 */
function HomePage() {
  const navigation = useNavigate();
  const viewOrderSummary = ()=>{
    navigation('/order-summary');

  }
  return (

    <div>
      <h1>HomePage</h1>
      <button onClick={viewOrderSummary} className='btn btn-warning'>order summary</button>
    </div>
  );
}

export default HomePage;