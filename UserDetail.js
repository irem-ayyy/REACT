import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>Details</h2>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
