import React, { Component } from 'react';

const AppHeader = (props) => (
    <header className="app-header">
      <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </header>
)

export default AppHeader;