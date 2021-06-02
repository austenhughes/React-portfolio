import React from "react";
// import "./style.css";

function ContactInfo(props) {
    return (
      <div className="contactInfo">
      <div> Find me At : </div>
      <a href="mailto:austen.hughes.91@gmail.com">austen.hughes.91@gmail.com</a>  
      <div> Phone # : 847 422 3251 </div>
      <a href="https://www.linkedin.com/in/austen-hughes-97bb0b202/"> Linked in : https://www.linkedin.com/in/austen-hughes-97bb0b202/ </a> <br />
      <a href="https://github.com/austenhughes"> GitHub : https://github.com/austenhughes </a> <br />
      <a href="https://1drv.ms/b/s!AuESekHl_Oe9gQAi-OhwZTxqQLVl" > Resume  </a> <br />
      </div>
    );
    
  }
  
  export default ContactInfo;