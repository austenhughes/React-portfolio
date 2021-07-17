import React from "react";
// import "./style.css";

import BioPic from "../../assets/pictures/BioPic.jpg"

function BioInfo(props) {
  return (
    <div className="bioInfo">
    
    <img className="bioPic" src={BioPic} alt={BioPic} height="auto" width="40%" align="left"></img> 
    
    <p>   My name is Austen Hughes, and I am located in Denver Colorado. I am a full stack web designer looking to create clean intuitive and helpful projects. </p>
    <p>   I have a Bachelor’s Degree in Theater (concentration in design) with a minors in psychology and art. I also have just completed a Certificate in Full Stack Web Development at the University of Denver Coding Bootcamp. The best parts of this class were solving puzzles, working with a team, and being able to see something I built get up and functioning. I also enjoyed planning the visual design and flow when I got to be a part of those decisions. I am excited to spend time growing my knowledge and focusing on the specific languages, and programs I get to use regularly in the future.</p>
    <p>   Most recently I was the manager of a shoe store in downtown Denver I loved my store and my team. My time with the company was fantastic. I had been in retail for the last 10 years and with this company for 8 of those. In that time, I moved from senior sales to manger and had lots of adventures along the way. The job allowed me to try many new things, and I met some of the most interesting people.</p> 
    <p>   When choosing a bootcamp I wanted to be sure to find a full stack program so I could start with the bigger picture. I enjoyed all parts of the class from building databases to working out front end functionality with JavaScript. I found each side to have their own quirks and rewards. I will admit I do have a soft spot for styling visuals/CSS even if it a smaller part of most projects. I am creative, results driven and looking for a supportive environment to build my skills.</p>
    <p>   A little bit more about myself : I like the mountains, more in the summer than the winter. I like most kinds of tea. I have a really cool dog named Sir Robin (the not so brave). I’m a fan of cheesy jokes … and cheese the food. I like audiobooks, and doing craft project with friends, I also really like the feeling of working out a problem after pulling it apart once or twice.</p>

    </div>
  );
}

export default BioInfo;