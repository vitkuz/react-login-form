import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const LoginFormFooter = (props) => (
  <div className="form-pages">
    <NavLink to="/user/register" activeClassName='active'>Register</NavLink>
    <NavLink to="/user/login" activeClassName='active'>Login</NavLink>
    <NavLink to="/user/password" activeClassName='active'>Password</NavLink>
  </div>
)

export default LoginFormFooter;