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
// import QuizPic from "../../assets/pictures/quiz.png";
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
  description: "A site for sharing and saving favorite cheesy jokes",
  builtWith: "Built with : Bcrypt authentication, React framework/JSX, Mongodb, Material UI/CSS",
  gitHub: "https://github.com/austenhughes/The-Baffoonery",
  projectName: "The Baffoonery",
  projectLink: "https://arcane-sands-38677.herokuapp.com/"
  },
  {
  _id: 2,
  img: TechBlogPic,
  description: "A simple blog for sharing thoughts ",
  builtWith: "Built with : React framework, Mongodb, CSS",
  gitHub: "https://github.com/austenhughes/tech-blog",
  projectName: "Basic Blog",
  projectLink: "https://sheltered-wave-70995.herokuapp.com/"
  },
  {
  _id: 3,
  img: PasswordGeneratorPic,
  description: "A random password generator",
  builtWith: "Built with : Javascript, Html, CSS",
  gitHub: "https://austenhughes.github.io/Password-Generator/",
  projectName: "Password Generator",
  projectLink: "https://github.com/austenhughes/Password-Generator"
  },
  {
  _id: 4,
  img: CommunityGardenPic,
  description: "A plant exchange built to help grow your plant collection",
  builtWith: "Built with : Bcrypt authentication, Handlebars frame work, HTML, Javascript, CSS",
  gitHub: "https://github.com/MKokich/Community-Garden",
  projectName: "Community Garden",
  projectLink: "https://community-gardens-2021.herokuapp.com/"
  },
  {
  _id: 5,
  img: WeatherDashPic,
  description: "A weather dashboard built to display upcoming weather at a requested location",
  builtWith: "Built with : HTML, Javascript, CSS",
  gitHub: "https://github.com/austenhughes/Weather-Dashboard",
  projectName: "Weather Dashboard",
  projectLink: "https://austenhughes.github.io/Weather-Dashboard/"
  },
  {
  _id: 6,
  img: ArtPic,
  description: "Built to display random art form the Met Museum at the click of a button",
  builtWith: "Built with : HTML, Javascript, Bulma/CSS",
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