import React from 'react'
import { useEffect,useState } from 'react'
import {Row,Image} from 'react-bootstrap'
import './Projects.css'
import Project from './Project/Project'
import projects from './ProjectList'

const Projects = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    console.log(isMobile)
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
        <>
        <div className="projects-section col-12 py-4" id="projects">
          <Row xs={12} className="projects-header-container">
            <h1 className="section-header-projects">Projects</h1>
          </Row>
        </div>

        {projects.map((project,index) =>(
          <Project odd={index % 2 === 0 && !isMobile ? false : true} imageUrls={project.imageUrls} projectTitle={project.projectTitle} projectDescription={project.projectDescription}/>
        ))}
        </>
      );
}

export default Projects