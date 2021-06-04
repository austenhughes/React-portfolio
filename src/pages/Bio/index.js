import React from "react";
import Container from "../../componenets/Container/index";
import Header from "../../componenets/Header/index";
import Nav from "../../componenets/Nav/index";
import HomePageBtn from "../../componenets/HomePageBtn/index";
import PortfolioPageBtn from "../../componenets/PortfolioPageBtn/index";
import BioInfo from "../../componenets/BioInfo/index";
import Footer from "../../componenets/Footer/index";
import ContactInfo from "../../componenets/ContactInfo/index";

import "./style.css";

function Bio(props) {

  return <div>
    <Container>
      <Header />
      <Nav>
      <HomePageBtn />
      <PortfolioPageBtn />
      </Nav> 
      <BioInfo />
      <ContactInfo />
      <Footer />
      </Container>
      </div>

}

export default Bio;