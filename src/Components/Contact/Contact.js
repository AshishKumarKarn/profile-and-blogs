import React from 'react';
import Header from '../Header/Header';
import './Contact.css';

const contact = () => {
return (<>
<Header/>
<div className="content" >
    {/* {to avoid grid effect, added width explicity} */}
<div className="content-inner" style={{width: "115%"}}>
My Contact Details:<br/><br/>
Email:      ashish.karn@outlook.com<br/>
<a href="https://www.linkedin.com/in/ashish-karn-2626b034/">LinkedIn</a> <br/>
<a href="https://www.facebook.com/imanstupid/">Facebook</a> <br/>
</div>
</div>
    </>)
}
export default contact;