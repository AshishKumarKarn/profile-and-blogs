import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import logo from '../../static/logo.svg';
import './Home.css';
export default function Home() {
    const [content, setContent] = useState(null);
    const [careerPathPara1, setCareerPathPara1] = useState(null);
    const [careerPathPara2, setCareerPathPara2] = useState(null);
    const [careerPathPara3, setCareerPathPara3] = useState(null);
    const [careerPathPara4, setCareerPathPara4] = useState(null);
    const [careerPathPara5, setCareerPathPara5] = useState(null);
    const [careerPathPara6, setCareerPathPara6] = useState(null);
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
    setCareerPathPara1(data.careerPath1);
    setCareerPathPara2(data.careerPath2);
    setCareerPathPara3(data.careerPath3);
    setCareerPathPara4(data.careerPath4);
    setCareerPathPara5(data.careerPath5);
    setCareerPathPara6(data.careerPath6);
  }

return (<>
<Header/>
<div className="content">
    <div className="content-home-1">
    <div className="content-home-1-text">
    <h2>Greetings !!!</h2>
    {content || error || <img src={logo} className="App-logo" alt="logo"/>}
    </div>
    </div>
    <div className="content-home-2">
      <div className="content-home-2-text">
      <h2>Work & Life Experience Synopsys </h2>
    {careerPathPara1 || error || <img src={logo} className="App-logo" alt="logo"/>}
    <br/><br/>
    {careerPathPara2 || error || <img src={logo} className="App-logo" alt="logo"/>}
    <br/><br/>
    {careerPathPara3 || error || <img src={logo} className="App-logo" alt="logo"/>}
    <br/><br/>
    {careerPathPara4 || error || <img src={logo} className="App-logo" alt="logo"/>}
     <br/><br/>
    {careerPathPara5 || error || <img src={logo} className="App-logo" alt="logo"/>}
    <br/><br/>
    {careerPathPara6 || error || <img src={logo} className="App-logo" alt="logo"/>}
    </div>
    </div>

</div>

</>);
}