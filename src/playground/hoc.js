import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
  return (
      <div>
        <h1>dsdsdsadsa {props.info}</h1>
      </div>
  )
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <p>
      <div>
        sssss
      </div>
      <WrappedComponent {...props} />
    </p>
  )
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="sdssdsds"/>, document.getElementById('app'));
