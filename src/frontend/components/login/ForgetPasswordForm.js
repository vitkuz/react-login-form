import React, { Component } from 'react';

const ForgetPasswordForm = (props) => (
    <div className="content content-forget-password">
      {props.title && <h1 className="component-title">{props.title}</h1>}
      <div className="page-content">
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

export default ForgetPasswordForm;