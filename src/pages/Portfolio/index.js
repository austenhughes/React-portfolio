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


import "./style.css";

function Portfolio(props) {

  const [projectState] = useState(
  [
  {
  img: PasswordGeneratorPic,
  gitHub: "https://austenhughes.github.io/Password-Generator/",
  projectName: "Password Generator",
  projectLink: "https://github.com/austenhughes/Password-Generator"
  },
  {
  img: QuizPic,
  gitHub: "https://github.com/austenhughes/timed-quiz",
  projectName: "Timed Quiz",
  projectLink: "https://austenhughes.github.io/timed-quiz/"
  },
  {
  img: TechBlogPic,
  gitHub: "https://github.com/austenhughes/tech-blog",
  projectName: "Basic Blog",
  projectLink: "https://sheltered-wave-70995.herokuapp.com/"
  },
  {
  img: WeatherDashPic,
  gitHub: "https://github.com/austenhughes/Weather-Dashboard",
  projectName: "Weather Dashboard",
  projectLink: "https://austenhughes.github.io/Weather-Dashboard/"
  },
  {
  img: CommunityGardenPic,
  gitHub: "https://github.com/MKokich/Community-Garden",
  projectName: "Community Garden",
  projectLink: "https://community-gardens-2021.herokuapp.com/"
  },
  {
  img: ArtPic,
  gitHub: "https://github.com/aarongermaine/met_art_generator",
  projectName: "Community Garden",
  projectLink: "https://aarongermaine.github.io/group_project/"
  }
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