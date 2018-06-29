import React, {Component, Fragment} from 'react';
import FormElement from './FormElement';
import FormMessage from './FormMessage';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: {
        fields: {
          username: {
            isInvalid: false
          },
          password: {
            isInvalid: false
          }
        },
      },
      errorsMessage: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  validateForm(username, password) {
    
    //todo: move to separate file, install https://www.npmjs.com/package/validator
    
    const newValidationObject = JSON.parse(JSON.stringify(this.state.validation));
    
    if (!username) {
      newValidationObject.fields.username.isInvalid = true;
    } else {
      newValidationObject.fields.username.isInvalid = false;
    }
    if (!password) {
      newValidationObject.fields.password.isInvalid = true;
    } else {
      newValidationObject.fields.password.isInvalid = false;
    }
    
    if (password && username) {
      return {
        validation: newValidationObject,
        errorsMessage: []
      }
    }
    
    return {
      validation: newValidationObject,
      errorsMessage: [{type:'error', text:'You have errors in the form'}]
    }
  }
  
  handleFormSubmit(e) {
    e.preventDefault();
    //collect values
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    //validate values
    const formValidation = this.validateForm(username, password);
  
    this.setState(() => {
      return {
        validation: formValidation.validation,
        errorsMessage: [...formValidation.errorsMessage]
      }
    });
    
    if (formValidation.errorsMessage.length === 0) {
      
      console.log(formValidation);
  
      console.log(username, password);
  
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      }).then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          this.setState(() => {
            return {
              errorsMessage: [{type:'error', text:'Not valid username o password'}]
            }
          })
          throw new Error('Permission denied');
        }
      }).then((json) => {
            this.setState(() => {
              return {
                errorsMessage: [{type:'success', text:'You were successfully login'}]
              }
            })
          },
          (err) => {
            console.log(err);
            this.setState(() => {
              return {
                errorsMessage: [{type:'error', text:'Incorrect username or password. Use: admin1/123'}]
              }
            })
        
          }
      ).catch((e) => {
        this.setState(() => {
          return {
            errorsMessage: [{type:'error', text:'Network error. Try later'}]
          }
        })
      })
    }
  }
  
  render() {
    return (
        <Fragment>
          {this.props.title && <h1 className="component-title">{this.props.title}</h1>}
          <div className="component-content">
            
            {
              this.state.errorsMessage.length > 0 && this.state.errorsMessage.map((msg,i) => {
                console.log(msg);
                return <FormMessage key={i} {...msg} />;
              })
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
                  required={false}
                  labelVisualHidden={true}
                  isInvalid={this.state.validation.fields.username.isInvalid}
              />
              <FormElement
                  type="password"
                  name="password"
                  id="password"
                  className="form-control user-name"
                  placeholder="You best password"
                  labelText="Enter password"
                  helpText="Please enter valid password"
                  required={false}
                  labelVisualHidden={true}
                  isInvalid={this.state.validation.fields.password.isInvalid}
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