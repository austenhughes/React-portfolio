import React, { useState } from "react";
import Container from "../../componenets/Container/index";
import Header from "../../componenets/Header/index";
import Nav from "../../componenets/Nav/index";
import HomePageBtn from "../../componenets/HomePageBtn/index";
import BioPageBtn from "../../componenets/BioPageBtn/index";
import Project from "../../componenets/Project/index";
import Footer from "../../componenets/Footer/index";
import ContactInfo from "../../componenets/ContactInfo/index";

import PasswordGeneratorPic from "../../assets/pictures/password-generator.png";
import QuizPic from "../../assets/pictures/quiz.png";
import WeatherDashPic from "../../assets/pictures/dashboard.png";
import TechBlogPic from "../../assets/pictures/techBlog.png";
import CommunityGardenPic from "../../assets/pictures/communityGarden.png";
import ArtPic from "../../assets/pictures/random-art-generator.png";
import theBuffoonery from "../../assets/pictures/theBafoonery.png";


import "./style.css";

function Portfolio(props) {

  const [projectState] = useState(
  [
  {
  _id: 1,
  img: theBuffoonery,
  gitHub: "https://github.com/austenhughes/The-Baffoonery",
  projectName: "the Buffoonery",
  projectLink: "https://arcane-sands-38677.herokuapp.com/"
  },
  {
  _id: 2,
  img: TechBlogPic,
  gitHub: "https://github.com/austenhughes/tech-blog",
  projectName: "Basic Blog",
  projectLink: "https://sheltered-wave-70995.herokuapp.com/"
  },
  {
  _id: 2,
  img: PasswordGeneratorPic,
  gitHub: "https://austenhughes.github.io/Password-Generator/",
  projectName: "Password Generator",
  projectLink: "https://github.com/austenhughes/Password-Generator"
  },
  {
  _id: 3,
  img: CommunityGardenPic,
  gitHub: "https://github.com/MKokich/Community-Garden",
  projectName: "Community Garden",
  projectLink: "https://community-gardens-2021.herokuapp.com/"
  },
  {
  _id: 4,
  img: WeatherDashPic,
  gitHub: "https://github.com/austenhughes/Weather-Dashboard",
  projectName: "Weather Dashboard",
  projectLink: "https://austenhughes.github.io/Weather-Dashboard/"
  },
  {
  _id: 5,
  img: ArtPic,
  gitHub: "https://github.com/aarongermaine/met_art_generator",
  projectName: "Random Art Generator",
  projectLink: "https://aarongermaine.github.io/group_project/"
  },
  ]
  );

  return <div>
    <Container>
      <Header />
      <Nav>
      <HomePageBtn />
      <BioPageBtn />
      </Nav> 
      <Project projectState = {projectState} />
      <ContactInfo />
      <Footer />
      </Container>
      </div>

}

export default Portfolio;