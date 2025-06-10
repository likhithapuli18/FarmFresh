


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="container">
      <h1>Registered Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Name:</strong> {user.fullName} <br />
              <strong>Mobile:</strong> {user.mobile}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users registered yet.</p>
      )}
      <button className="login-btn" onClick={() => nav('/products')}>
        Go to Products
      </button>
    </div>
  );
};

export default Users;

