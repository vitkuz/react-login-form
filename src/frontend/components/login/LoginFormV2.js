import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';


import FormElement from './FormElementV2';
import { formValidator } from '../../validators/formValidator';
import { tryLoginUser } from '../../services/login';

import { alertActions } from '../../actions/alerts.actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      fields: {
        username:{
          value:'',
          isInvalid:false,
          validationRule: /\.*/
        },
        password: {
          value:'',
          isInvalid:false,
          validationRule: /\.*/
        }
      }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputReset = this.handleInputReset.bind(this);
  }
  
  handleInputChange(e) {
    const { name, value, id } = e.target;
    console.log(name, value);
    this.setState((prevState) => {
      return {
        fields: {
            ...prevState.fields,
          [name]: {
            value
          }
        }
      }
    })
  }
  
  handleInputReset(e,input) {
    console.log(e.target);
    console.log(input);
    console.log(this);
  
    this.setState((prevState) => {
      return {
        fields: {
          ...prevState.fields,
          [input.props.name]: {
            value:''
          }
        }
      }
    });
    
    input.focus();
  }
  
  handleFormSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    
    const { username, password } = e.target.elements;
    
    //validate values
  
    const { error } = formValidator.login(username.value, password.value);
    
    if (!error) {
  
      tryLoginUser(username.value, password.value).then(response => {
        console.log('RESPONSE FROM WEB SERVER',response);
        
        if (!response.error) {
          console.log(response);
          this.props.dispatch(alertActions.success('You\'ve  successfully login'));
        } else {
          this.props.dispatch(alertActions.error('Try again!'));
        }
        
      })
      
    }
  }
  
  render() {
    
    const { formTitle, loggingIn } = this.props;
    const { username, password } = this.state.fields;
    
    console.log(this.state.fields);
    
    return (
        <Fragment>
          { formTitle && <h1 className="component-title">{ formTitle }</h1> }
          <div className="component-content">
            
            <form action="/" aria-label="Login form" className="login-form" onSubmit={this.handleFormSubmit}>
              <FormElement
                  type="text"
                  name="username"
                  id="username"
                  className="form-control user-name"
                  placeholder="Username or email"
                  labelText="Enter username or email"
                  helpText="Please enter valid username or email"
                  value={username.value}
                  autofocus={true}
                  required={false}
                  labelVisualHidden={true}
                  isInvalid={username.isInvalid}
                  handleInputReset={this.handleInputReset}
                  handleInputChange={this.handleInputChange}
              />
              <FormElement
                  type="password"
                  name="password"
                  id="password"
                  className="form-control user-name"
                  placeholder="You best password"
                  labelText="Enter password"
                  helpText="Please enter valid password"
                  value={password.value}
                  required={false}
                  labelVisualHidden={true}
                  isInvalid={password.isInvalid}
                  handleInputReset={this.handleInputReset}
                  handleInputChange={this.handleInputChange}
              />
              <button className="btn btn-success">
                Click
              </button>
              {loggingIn &&
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
            </form>
          </div>
        </Fragment>
    )
  }
  
}

const ConnectedLoginForm = connect((state) => {
  const { alert, user, loggingIn } = state;
  return {
    user,
    alert,
    loggingIn
  }
})(LoginForm);

export default ConnectedLoginForm;