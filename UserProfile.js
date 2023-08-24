import React, { Component } from 'react';
import UserDetail from './UserDetail';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      },
    };
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <UserDetail user={this.state.user} />
      </div>
    );
  }
}

export default UserProfile;
