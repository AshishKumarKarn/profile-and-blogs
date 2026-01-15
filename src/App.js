import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';


function App() {
  // Use PUBLIC_URL as the basename so the app works when served from GitHub Pages
  // (PUBLIC_URL is set from the "homepage" field in package.json by create-react-app)
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
