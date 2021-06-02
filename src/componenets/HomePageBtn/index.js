import React from "react";
import { Button } from '@material-ui/core';


function HomePageBtn(props) {
  return (
    <Button className="btn" href="/React-portfolio" target="_"><input 
    type="button" value="Home" className="btn"/></Button>
  );
}

export default HomePageBtn;