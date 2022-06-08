import React from 'react';
import { useSearchParams } from 'react-router-dom';

import data from './Users/data';
function Search() {

    const [showUsers,setShowUsers] = useSearchParams();
    const showActiveUsers = showUsers.get('filter') === 'active';
    
  return (
    <div>
        
        <button onClick={()=>setShowUsers({filter:'active'})}>Active users</button>
        <button onClick={()=>setShowUsers({})}>Reset filter</button>
        {!showActiveUsers ? (<>{data.map(item=><p>{item.first_name} {item.last_name}</p>)}</>):(<>{data[0].first_name}</>)}

    </div>
  );
}

export default Search