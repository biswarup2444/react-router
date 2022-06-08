import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
function User() {
    const params = useParams();
    const id= params.id;
    const user = data.filter(item=>parseInt(item.id) === parseInt(id));
    console.log(user);
  return (
    <>
        <h1>User</h1>
        {user.map(item=><p key={item.id}>{item.id} {item.first_name}</p>)}
    </>

  );
}

export default User;