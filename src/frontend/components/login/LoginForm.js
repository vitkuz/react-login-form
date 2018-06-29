import React, {Component, Fragment} from 'react';
import FormElement from './FormElement';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorsMessage: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  validateForm(username,password) {
    
    //lets assume everything is ok
    
    return [];
  }
  handleFormSubmit(e) {
    e.preventDefault();
    //collect values
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    //validate values
    const errorMessages = this.validateForm(username,password);
    
    if (errorMessages.length > 0) {
      this.setState(()=> {
        return {
          errorsMessage: [...errorMessages]
        }
      })
    } else {
     
      fetch('http://localhost:3000/api/login', {method:'POST',body:{username,password}}).then((response) => {
        
        if (response.status === 200) {
          return response.json()
        }
        
      }).then((json) => {
        console.log('!!!',json);
      })
      
    }
  }
  render() {
    return (
      <Fragment>
        {this.props.title && <h1 className="component-title">{this.props.title}</h1>}
        <div className="component-content">
          
          {
            this.state.errorsMessage.length>0 &&
            <div id="status" role="alert" aria-live="assertive" className="online">
              <p>{this.state.errorsMessage[0]}</p>
            </div>
          }
          
          
          <form action="/" aria-label="Login form" className="login-form" onSubmit={this.handleFormSubmit}>
            <FormElement
              type="text"
              name="username"
              id="username"
              className="form-control user-name"
              placeholder="Username or email"
              labelText="Enter username or email"
              helpText="Please enter valid username or email"
              autofocus={true}
              required={true}
              labelVisualHidden={true}
              isInvalid={true}
            />
            
            <FormElement
              type="password"
              name="password"
              id="password"
              className="form-control user-name"
              placeholder="You best password"
              labelText="Enter password"
              helpText="Please enter valid password"
              required={true}
              labelVisualHidden={true}
            />
            
            <button className="btn btn-success">
              Click
            </button>
          
          </form>
        
        
        </div>
      </Fragment>
    )
  }
  
}


export default LoginForm;