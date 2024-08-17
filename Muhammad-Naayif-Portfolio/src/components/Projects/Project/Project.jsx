import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import './Project.css'
import ImageSlider from '../../ImageSlider/ImageSlider'


const Project = (props) => {
    return (
        <section className={`project-details ${props.odd ? 'secondary' : ''} d-block d-lg-flex align-items-start justify-content-left px-3 py-5`}>
        {/* odd projects */}
        {props.odd ? (
          <>
            {/* Project Text Container Column */}
            <Col lg={6} xs={12} className="project-text-container mb-4 mb-lg-0">
              <Row className="project-title-container">
                <h1 className="project-title p-2 w-100">
                  {props.projectTitle}
                </h1>
              </Row>
              <Row>
                <p className="project-description">
                  {props.projectDescription}
                </p>
                <ul>
                  {props.points}
                </ul>
              </Row>
            </Col>

            {/* Image Slider Column */}
            <Col lg={6} xs={12}>
              <Row className="project-slideshow-container">
                <ImageSlider
                  imageUrls={props.imageUrls}
                  transitionSpeed={3000}
                />
              </Row>
            </Col>
          </>
        ) : (
          <>
          {/* even projects */}
            
            
            {/* Image Slider Column */}
            <Col lg={6} xs={12}>
              <Row className="project-slideshow-container">
                <ImageSlider
                  imageUrls={props.imageUrls}
                  transitionSpeed={3000}
                />
              </Row>
            </Col>



            {/* Project Text Container Column */}
            <Col lg={6} xs={12} className="project-text-container mb-4 mb-lg-0">
              <Row className="project-title-container">
                <h1 className="project-title p-2 w-100">
                  {props.projectTitle}
                </h1>
              </Row>
              <Row>
                <p className="project-description">
                  {props.projectDescription}
                </p>
                <ul>
                  {props.points}
                </ul>
              </Row>
            </Col>

          </>
        )}
      </section>
    );
  }
  

export default Project