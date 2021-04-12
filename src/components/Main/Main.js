
import React, { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';

const Main = () => {
    const [users, setUsers] = useState([]);
      useEffect( () => {
          fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .then(data => {
             setUsers(data);
           })
        }, [])
    
    return (
        <div>    
            <h2 style={{textAlign:'center'}}>Total user: {users.length}</h2>        
            {
                users.map(user => <SingleUser user={user} key={user.id}></SingleUser>)
            }
        </div>
    );
};

export default Main;