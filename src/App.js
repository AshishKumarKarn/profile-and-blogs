import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';


function App() {
  const getBasePath = () => {
    const path = window.location.pathname;
    if(path.endsWith('/profile') || path.endsWith('/blog') || path.endsWith('/contact')) {
      return path.substring(0, path.lastIndexOf('/'));
    }
    return path;
  }

console.log(window.location.pathname);
  return (
    <BrowserRouter basename={getBasePath()}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/contact" component={Contact}/>
    <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
