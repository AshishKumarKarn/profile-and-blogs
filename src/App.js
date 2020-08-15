import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
