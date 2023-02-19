import React from 'react'
import axios from 'axios'
import "./styles.css"
import { useState, useEffect } from "react";


const AdminPage = () => {
  
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
      axios
        .get("https://63f21196f28929a9df530b80.mockapi.io/userData")
        .then((response) => setUsers(response.data));
    }, []);


    const deleteUser = (id) => {
        axios.delete(`https://63f21196f28929a9df530b80.mockapi.io/userData/${id}`)
    }
    
  return (
    <div className='users-containers'>
        {users.map(user => {
            return (
              <div key={user.id} className="user-wrapper">
                <div className="user">
                  <h2>name: {user.firstName}</h2>
                  <h2>last name: {user.lastName}</h2>
                  <h4>age: {user.age}</h4>
                </div>
                <div className="user-button">
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default AdminPage