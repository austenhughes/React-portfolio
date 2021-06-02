import React from "react";
// import "./style.css";

import BioPic from "../../assets/pictures/BioPic.jpg"

function BioInfo(props) {
  return (
    <div className="bioInfo">
    
    <img className="bioPic" src={BioPic} alt={BioPic} height="auto" width="40%" align="left"></img> 
    
    <p>   My name is Austen Hughes, and I am located in Denver Colorado. I have a bachelor’s degree in theater tech with a minor in psychology. I have just finished a certificate in full stack development with the university of Denver. Overall, I found this class to be supper rewarding. What I really loved was solving puzzles, working with a team, and being able to see something I built work. I also enjoyed planning the visual design and flow on the occasion I got to be a part of those decisions. I am excited to spend time focusing and growing my knowledge with which ever languages and frameworks I get to use in the future. <br/> <br/>
        Currently I am a manager of a shoe store in downtown Denver I love my store and my team my time with the company has been fantastic. I have been in retail for the last 10 years and with this company for 7 of those. In that time, I have moved from senior sales to manger and had lots of adventures along the way. The job allowed me to try many new things, and I met some of the most interesting people. I now find I am looking for new kinds of challenges. <br/> <br/>
        When looking for a bootcamp I chose a full stack program so I could start with the bigger picture. After starting it was clear there will always be lots of space to learn and grow. I feel like I am at a point I could go either way, to the front or the back end that is. I found each side to have their own quirks and rewards. I do have a soft spot for styling visuals/css even if it a small part of most projects. I am creative, results driven and looking for a supportive environment to build my skills. I have really enjoyed working in a team as the opportunity has presented itself. <br/> <br/>
        A little bit more about myself. I like the mountains, more in the summer than the winter.  I like all kinds of tea and have a really cool dog named Sir Robin the not so brave. I’m a fan of cheesy jokes (and cheese the food). I like baking, and craft project with friends, I also really like the feeling of working out a problem after pulling it apart once or twice. </p>
    
    </div>
  );
}

export default BioInfo;