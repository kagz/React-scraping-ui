import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
// const theme = createMuiTheme()
function App() {
  return (
 <MuiThemeProvider>
 <Router>
 <Navbar/>
      <div>
        <Switch>

            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
        </Switch>
      </div>
 
 </Router>
 
 
 </MuiThemeProvider>

  );
}

export default App;
