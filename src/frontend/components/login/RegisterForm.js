import React, { Fragment } from 'react';

const RegisterForm = (props) => (
    <Fragment>
      {props.title && <h1 className="component-title">{props.title}</h1>}
      <div className="component-content">
        <form action="/">
         <p>todo: Create register form later</p>
        </form>
      </div>
    </Fragment>
)

export default RegisterForm;