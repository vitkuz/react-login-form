import React, { Component } from 'react';

const RegisterForm = (props) => (
    <div className="component component-register">
      {props.title && <h1 className="component-title">{props.title}</h1>}
      <div className="component-content">
        <form action="/" onSubmit={props.onLoginFromSubmit}>
          
          <h1>Forget password form</h1>
          
          <div className="form-actions">
            <button>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
)

export default RegisterForm;