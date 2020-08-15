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
    <div className="content-inner">
    {content || error || <img src={logo} className="App-logo" alt="logo"/>}
    </div>
<img src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/12122642_970444236346564_5157396284211546413_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=z8iulIVIrx8AX8f1ZME&_nc_oc=AQnL5NAE7GVuXtz8ykP_UGc45fng9IC0oyW53lTrNOq5nkQRukGp0THuQfAtWurWQg8MMMnJOAOD5XT1mPXIzz_f&_nc_ht=scontent.fpat2-1.fna&oh=0907d14056b3e505435c21612c28cfab&oe=5F5D7339" alt="My Profile"/>
</div>

</>);
}
export default Home;