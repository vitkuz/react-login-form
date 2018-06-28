import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LoginFormFooter = (props) => (
  <div className="form-pages">
    <Link to="/user/register">Register</Link>
    <Link to="/user/login">Login</Link>
    <Link to="/user/password">Password</Link>
  </div>
)

export default LoginFormFooter;