import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

import LoginForm from '../components/login/LoginForm';
import LoginFormFooter from '../components/login/LoginFormFooter';
import LoginForgetPassword from '../components/login/ForgetPasswordForm';
import RegisterForm from '../components/login/RegisterForm';


class AppRoutes extends Component {
  state = {
    log:[
      {}
    ]
  };
  
  render() {
    
    // const classes = `component ${this.props.match.path.split('/').join(' ')}`;
    
    return (
        <BrowserRouter>
          <div className="page-wrapper">
            <AppHeader title="Try to login" subtitle="Test work for a project"/>
            <main className={`component`}>
              <Switch>
                <Route path="/" component={(props) => <LoginForm {...props} title="Login form"/>} exact={true}/>
                <Route path="/user/login" component={(props) => <LoginForm {...props} title="Login form"/>} />
                <Route path="/user/register" component={(props) => <RegisterForm {...props} title="Register form"/>} />
                <Route path="/user/password" component={(props) => <LoginForgetPassword {...props} title="Password form"/>} />
              </Switch>
              <LoginFormFooter />
            </main>
            
            <AppFooter text="(c) Copy 2018"/>
          
          </div>
        </BrowserRouter>
    );
  }
}




export default AppRoutes;