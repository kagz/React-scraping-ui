import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Message from './pages/Message';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications'
import Account from './pages/Account'

// const theme = createMuiTheme()
function App() {
  return (
 <MuiThemeProvider>
 <Router>
 <Navbar/>
      <div className="container">
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/inbox" component={Message}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/account" component={Account}/>
            <Route exact path="/notifications" component={Notifications}/>
        </Switch>
      </div>
 
 </Router>
 
 
 </MuiThemeProvider>

  );
}

export default App;
