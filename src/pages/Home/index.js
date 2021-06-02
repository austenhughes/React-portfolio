import React from "react";
import Container from "../../componenets/Container/index";
import Header from "../../componenets/Header/index";
import Nav from "../../componenets/Nav/index";
import PortfolioPageBtn from "../../componenets/PortfolioPageBtn/index";
import BioPageBtn from "../../componenets/BioPageBtn/index";
// import BioInfo from "../../componenets/BioInfo/index";
import HomeFooter from "../../componenets/HomeFooter/index";
import ContactInfo from "../../componenets/ContactInfo/index";

import "./style.css";

function Home(props) {

  return <div>
      <Container>
      <Header />
      <Nav>
      <BioPageBtn />
      <PortfolioPageBtn />
      </Nav> 
      <ContactInfo />
      <HomeFooter />
      </Container>
      </div>

}

export default Home;