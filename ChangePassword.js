import React, { Component } from 'react';

class ChangePassword extends Component {
  state = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.password === this.state.oldPassword) {
      if (this.state.newPassword === this.state.confirmPassword) {
        userData.password = this.state.newPassword;
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Password updated!');
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Old password is incorrect');
    }
  };

  render() {
    return (
      <div>
        <h2>Change Password</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="password"
            name="oldPassword"
            value={this.state.oldPassword}
            onChange={this.handleChange}
            placeholder="Old Password"
            required
          />
          <input
            type="password"
            name="newPassword"
            value={this.state.newPassword}
            onChange={this.handleChange}
            placeholder="New Password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm New Password"
            required
          />
          <button type="submit">Change Password</button>
        </form>
      </div>
    );
  }
}

export default ChangePassword;
