import React from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import './Projects.css'

const Projects = () => {
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
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
    
      return (
        <section className="projects-section py-3" id="projects">
          <Row className="projects-header-container">
            <h1 className="section-header-projects">Projects</h1>
          </Row>
          <Row>
            <Carousel responsive={responsive} autoPlay autoPlaySpeed={3500} keyBoardControl focusOnSelect infinite>              
                <h1 className="header1">first test</h1>
                <h1 className="header1">first test</h1>
                <h1 className="header1">first test</h1>
                <h1 className="header1">first test</h1>
                <h1 className="header1">first test</h1>
                <h1 className="header1">first test</h1>
            </Carousel>
          </Row>
        </section>
      );
}

export default Projects