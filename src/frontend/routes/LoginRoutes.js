import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { alertActions } from '../actions/alerts.actions';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

import LoginForm from '../components/login/LoginFormV2';
import LoginFormFooter from '../components/login/LoginFormFooter';
import LoginForgetPassword from '../components/login/ForgetPasswordForm';
import RegisterForm from '../components/login/RegisterForm';


class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
  }
  componentWillMount() {
   
   const user = localStorage.getItem('user');
   
   if (!user) {
     this.props.dispatch(alertActions.success(`Hello ${this.props.user.name}! Please login!`));
   } else {
     this.props.dispatch(alertActions.success(`Hello ${this.props.user.name}! Thanks for coming back!`));
   }
  }
  render() {
    
    return (
        <BrowserRouter>
          <div className="page-wrapper">
            {this.props.alert.message &&
              <div className={`alert ${this.props.alert.type}`}>{this.props.alert.message}</div>
            }
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

function mapStateToProps(state) {
  const { alert, user, loggingIn } = state;
  return {
    alert,
    user,
    loggingIn
  };
}

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;

