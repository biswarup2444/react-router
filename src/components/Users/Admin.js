import React from 'react';
import data from './data';
function Admin() {
  return (
    <div>
        <ul>
            {data.map(item=><li>{item.id} {item.first_name}</li>)}
        </ul>
    </div>
  )
}

export default Admin;