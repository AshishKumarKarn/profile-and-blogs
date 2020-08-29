import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import logo from '../../static/logo.svg';
import './Home.css';
export default function Home() {
    const [content, setContent] = useState(null);
    const [careerPath, setCareerPath] = useState(null);
    const [error,setError] = useState(null);

  useEffect(() => {
   
      let url="https://raw.githubusercontent.com/AshishKumarKarn/json-contents-for-projects/master/portfolio.json";
      fetch(url)
      .then(response => response.json())
      .then(buildHomeContent)
      .catch(error => {
          setError(error.message);
      });
  },[]);

  const buildHomeContent = (data) => {
    setContent(data.home);
    setCareerPath(data.careerPath);
  }

return (<>
<Header/>
<div className="content">
    <div className="content-home-1">
    <div className="content-home-1-text">
    <h2>Welcome</h2>
    {content || error || <img src={logo} className="App-logo" alt="logo"/>}
    </div>
    </div>
    <div className="content-home-2">
      <div className="content-home-2-text">
      <h2>Career Walkthrough</h2>
    {careerPath || error || <img src={logo} className="App-logo" alt="logo"/>}
    </div>
    </div>

</div>

</>);
}