import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import logo from '../../static/logo.svg';
import './Home.css';
function Home() {
    const [content, setContent] = useState(null);
    const [error,setError] = useState(null);

  useEffect(() => {
      if(content==null){
      let url="https://raw.githubusercontent.com/AshishKumarKarn/json-contents-for-projects/master/portfolio.json";
      fetch(url)
      .then(response => response.json())
      .then(buildHomeContent)
      .catch(error => {
          setError(error.message);
      });
    }
  });

  const buildHomeContent = (data) => {
    setContent(data.home);
  }

return (<>
<Header/>
<div className="content">
    <div className="content-home">
    {content || error || <img src={logo} className="App-logo" alt="logo"/>}
    </div>

</div>

</>);
}
export default Home;