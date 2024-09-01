import React from 'react'
import { useEffect,useState } from 'react'
import {Row,Image} from 'react-bootstrap'
import './Projects.css'
import Project from './Project/Project'
import projects from './ProjectList'

const Projects = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowSize < 992;  


      return (
        <div className='container'>
          <div className="projects-section col-12 py-4" id="projects">
            <Row xs={12} className="projects-header-container d-flex">
              <div className="fade-in header-container col-xs -12 col-lg-6">
                <h1 className='welcome-to-project-intro top-heading'>Welcome to My Project Showcase</h1>
                <p className="section-header-projects">
                  Here's a collection of my
                  work, where innovation meets functionality. Each project is a
                  testament to my passion for crafting seamless user experiences
                  and robust backend solutions. From intuitive interfaces to
                  scalable server-side logic, these projects reflect my dedication
                  to building full-stack applications that solve real-world
                  problems. Whether it’s front-end design or back-end
                  architecture, I aim to deliver clean, efficient, and impactful
                  solutions. Explore the projects below to see how I transform
                  ideas into reality. What I Offer:
                </p>
                <ul className='intro-ul'>
                <li className=''><i class="fa fa-laptop-code"></i> Dynamic User Interfaces</li>
                <li className=''><i class="fa fa-server"></i> Scalable Backend Solutions</li>
                <li className=''><i class="fa fa-cloud"></i> Cloud Deployment</li>
                <li className=''><i class="fa fa-cogs"></i> API Integration</li>
                <li className=''><i class="fa fa-shield-alt"></i> Security Best Practices</li>
                </ul>
              </div>
              <div className="intro-image-container col-xs-12 col-lg-6">
                <Image
                  src="project-images/projects.jpg"
                  alt="..."
                  className="projects-showcase-intro"
                  fluid
                />
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </Row>
          </div>

          {projects.map((project, index) => (
            <Project
              odd={index % 2 === 0 && !isMobile ? false : true}
              imageUrls={project.imageUrls}
              projectTitle={project.projectTitle}
              points = {project.points}
              projectDescription={project.projectDescription}
            />
          ))}
        </div>
      );
}

export default Projects