import React from "react";
import { Button } from '@material-ui/core';


function PortfolioPageBtn(props) {
  return (
    <Button className="btn" href="/portfolio-React" target="_"><input 
    type="button" value="Portfolio" className="btn"/></Button>
  );
}

export default PortfolioPageBtn;