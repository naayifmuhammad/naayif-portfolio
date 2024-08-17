import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Skills.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Skill from "./Skill/Skill";

import reactLogo from "../../../assets/icons/skill-icons/react-logo.png";
import djangoLogo from "../../../assets/icons/skill-icons/django-logo.png";
import unityLogo from "../../../assets/icons/skill-icons/unity-logo.png";
import expressLogo from "../../../assets/icons/skill-icons/node-express-logo.png";
import pyqtLogo from "../../../assets/icons/skill-icons/pyqt-logo.png";

import htmlLogo from "../../../assets/icons/skill-icons/html-logo.png";
import cssLogo from "../../../assets/icons/skill-icons/css-logo.png";
import jsLogo from "../../../assets/icons/skill-icons/js-logo.png";
import mysqlLogo from "../../../assets/icons/skill-icons/mysql-logo.png";
import sqliteLogo from "../../../assets/icons/skill-icons/sqlite-logo.png";

import pythonLogo from "../../../assets/icons/skill-icons/Python-logo.png";
import phpLogo from "../../../assets/icons/skill-icons/php-logo.png";
import csharpLogo from "../../../assets/icons/skill-icons/csharp-logo.png";
import ajaxLogo from "../../../assets/icons/skill-icons/ajax-logo.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    lMobile: {
      breakpoint: { max: 800, min: 0 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
    xsMobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="fade-in-element skills-section py-3 col-12" id="skills">
      <Row className="skills-header-container">
        <h1 className="section-header-skills">Skills</h1>
      </Row>
      <Row>
        <Carousel responsive={responsive} autoPlay autoPlaySpeed={3500} keyBoardControl focusOnSelect infinite>
          <Skill skillIcon={pythonLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={csharpLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={phpLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={reactLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={djangoLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={pyqtLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={unityLogo} skillTitle="" skillDescription="" />
          <Skill badge={true} skillIcon={expressLogo} skillTitle="" skillDescription=""/>
          <Skill skillIcon={htmlLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={cssLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={jsLogo} skillTitle="" skillDescription="" />
          <Skill skillIcon={ajaxLogo} skillTitle="" skillDescription="" />
          <Skill badge={true} skillIcon={mysqlLogo} skillTitle="" skillDescription=""/>
          <Skill badge={true} skillIcon={sqliteLogo} skillTitle="" skillDescription=""/>
        </Carousel>
      </Row>
    </section>
  );
};

export default Skills;
