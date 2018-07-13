import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../../scss/App.css';

const Header = () => <h2>Header</h2>;
const Users = () => <h2>Header</h2>;
const UserLogin = () => <h2>UserLogin</h2>;
const UserProfile = () => <h2>UserProfile</h2>;
const EditUserProfile = () => <h2>EditUserProfile</h2>;
const UserRegister = () => <h2>UserRegister</h2>;
const UserPassword = () => <h2>UserPassword</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Page = () => <h2>Page</h2>;

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              <header>
                Global Header
              </header>
              <Route path="/" exact={true} component={Header}/>
              <Route path="/home" component={Dashboard}/>
              <Route path="/users" component={Users}/>
              <Route path="/user" component={UserProfile}/>
              <Route path="/user/edit" component={EditUserProfile}/>
              <Route path="/user/login" component={UserLogin}/>
              <Route path="/users/register" component={UserRegister}/>
              <Route path="/users/password" component={UserPassword}/>
              <Route path="/page" component={Page}/>
              
              /*
               */
              
              
              /*
              -> quotes
              -> quote/:id
              -> quote/:id/edit
              
              -> books
              -> book/:id
              -> book/:id/edit
              
              -> movies
              -> movie/:id
              -> movie/:id/edit
              
              -> courses
              -> course/:id
              -> course/:id/edit
              
              -> tools
              -> tool/:id
              -> tool/:id/edit
              
              -> stories
              -> story/:id
              -> story/:id/edit
              
              -> files
              -> file/:id
              -> file/:id/edit
              
              -> exercises
              -> exercise/:id
              -> exercise/:id/edit
              
              -> peoples
              -> people/:id
              -> people/:id/edit
              
              -> videos
              -> video/:id
              -> video/:id/edit
              
              -> 404
              -> 403
              
              -> admin/
              -> admin/dashboard
              
              */
              
              <footer>
                Footer Header
              </footer>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
