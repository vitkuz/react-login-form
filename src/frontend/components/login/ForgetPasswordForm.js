import React, { Fragment } from 'react';

const ForgetPasswordForm = (props) => (
    <Fragment>
      {props.title && <h1 className="component-title">{props.title}</h1>}
      <div className="component-content">
        <form action="/">
          <p>todo: Create forget password form later</p>
        </form>
      </div>
    </Fragment>
)

export default ForgetPasswordForm;