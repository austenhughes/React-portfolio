import React from "react";
import { Button } from '@material-ui/core';


function BioPageBtn(props) {
  return (
    <Button className="btn" href="/bio" target="_"><input 
    type="button" value="About Me" className="btn"/></Button>
  );
}

export default BioPageBtn;