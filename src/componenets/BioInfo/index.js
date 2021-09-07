import React from "react";
// import "./style.css";

import BioPic from "../../assets/pictures/BioPic.jpg"

function BioInfo(props) {
  return (
    <div className="bioInfo">
    
    <img className="bioPic" src={BioPic} alt={BioPic} height="auto" width="40%" align="left"></img> 
    
    <p>   My name is Austen Hughes, and I am located just outside Denver Colorado. I am a full stack web designer looking to create clean, intuitive, helpful projects. I have a BA in Theater (concentration in design) with a minors in psychology and art. I have also recently completed a Certificate in Full Stack Web Development at the University of Denver Coding Bootcamp. </p>
    <p>   Most recently I was the manager of a shoe store in downtown Denver I loved the store and my team. My time with the company was fantastic. I had been in retail for the last 10 years and with this company for 8 of those. The job allowed me to try many new things, and I got to meet some of the most interesting people. In that time, I moved from senior sales to manger and had lots of adventures along the way. </p>
    <p>   When choosing a bootcamp I wanted to be sure to find a full stack program so I could start with the bigger picture and work down from there. I honestly enjoyed all parts of the class from building databases to working out front end functionality with JavaScript. I found each side to have their own quirks and rewards. I am creative, results driven and looking for a supportive environment to build my skills.</p> 
    <p>   A little bit more about myself : I like the mountains, more in the summer than the winter. I like most kinds of tea. I have a really cool dog named Sir Robin (the not so brave). I’m a fan of cheesy jokes … and cheese the food. I like audiobooks, and doing craft project with friends, I also really like the feeling of working out a problem after pulling it apart once or twice.</p>

    </div>
  );
}

export default BioInfo;