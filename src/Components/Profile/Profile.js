import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

const profile = () => {
return (<div>
<Header/>
<div className="content">
<div className="content-profile-1">
<h2>Proﬁle</h2>
<p>
I am a Senior Backend / Distributed Systems Engineer with 10+ years of experience building high-availability, low-latency platforms in the financial services domain. I am currently working at Edelman Financial Engines, where I design and evolve resilient systems supporting mission-critical investment and advisory workflows.
<br/>
My core expertise spans Java (7–21), JVM internals, concurrency, and microservice architecture using Spring Boot, Kafka, and event-driven design. I have led modernization of legacy J2EE platforms (Servlets, Struts, EJB) into scalable, cloud-ready systems with a strong focus on performance, fault tolerance, and operational excellence. I also bring strong end-to-end understanding through hands-on experience with React and Angular, enabling effective API design and close collaboration with UI and product teams.
<br/>
I have built and operated high-throughput transaction and streaming platforms across global financial institutions, applying advanced multithreading, low-latency design, and data-structure-driven optimizations. I actively sharpen my problem-solving skills through competitive programming and hold an All India Rank of 627 on TechGig.
</p>
<a href="https://leetcode.com/u/karnashish/">&#xf08e; Leetcode</a>
<br/>
<a href="https://www.hackerearth.com/@ashishkumkarn">&#xf08e; HackerEarth</a>
<br/>
<a href="https://www.techgig.com/ashishkarn4">&#xf08e; TechGig</a>
</div>
</div>
</div>);
}
export default profile;