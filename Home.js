import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('userData'));

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, {user ? user.name : 'Guest'}</p>
    </div>
  );
};

export default Home;
