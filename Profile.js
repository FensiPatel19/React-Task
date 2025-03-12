import React, { Component } from 'react';

class Profile extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      this.setState({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    localStorage.setItem('userData', JSON.stringify(updatedUser));
    alert('Profile updated!');
  };

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone"
            required
          />
          <button type="submit">Update Profile</button>
        </form>
      </div>
    );
  }
}

export default Profile;
