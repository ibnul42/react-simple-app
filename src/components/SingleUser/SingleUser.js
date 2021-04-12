import React from 'react';
import { Link } from "react-router-dom";
import './SingleUser.css'

const SingleUser = (props) => {
    const {id, name, email} = props.user;
    return (
        <div className="single-user">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <Link to={"/userDetail/" + id}>See more</Link>
        </div>
    );
};

export default SingleUser;