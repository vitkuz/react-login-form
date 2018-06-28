import React, { Component } from 'react';
import FormElement from './FormElement';

const LoginForm = (props) => {
  
  const classes = `component ${props.match.path.split('/').join(' ')}`;
  return (
      <div className={classes}>
        {props.title && <h1 className="component-title">{props.title}</h1>}
        <div className="component-content">
          <form action="/" className="login-form" onSubmit={(e) => {e.preventDefault(); console.log('Try to submit')}}>
            <FormElement
                type="text"
                name="username"
                id="username"
                className="form-control user-name"
                placeholder="Username or email"
                labelText="Enter username or email"
                helpText="Please enter valid username or email"
                required={true}
            />
  
            <FormElement
                type="password"
                name="password"
                id="password"
                className="form-control user-name"
                placeholder="Username or email"
                labelText="Enter password"
                helpText="Please enter valid password"
                required={true}
            />
  
            <button>
              Click
            </button>
            
          </form>
          
          
        </div>
      </div>
  )
}


export default LoginForm;