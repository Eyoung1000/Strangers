import React from 'react';


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Your App Name</Link>
      </div>
      <div className="nav-links">
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/Register">Sign Up</Link>
      </div>
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/Register">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
