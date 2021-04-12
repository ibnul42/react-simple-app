import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetail.css';

const UserDetail = () => {
    const {userId} = useParams();    
    const [user, setUser] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
         .then(res => res.json())
         .then(data => {
            setUser(data);
         })
    },)
    const {name, id, email, phone, username, website} = user;
    return (
        <div className="user-component">
            <h3>Name: {name}</h3>
            <p>Id: {id}</p>
            <p>Email: {email}</p>
            <p>Phone No: {phone}</p>
            <p>Username: {username}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetail;