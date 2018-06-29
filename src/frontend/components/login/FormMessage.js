import React, { Component } from 'react';

const FormMessage = (props) => (
    <div id="status" role="alert" aria-live="assertive" className={`form-message form-message--${props.type}`}>
      <p>
        {props.text}
      </p>
    </div>
)

export default FormMessage;