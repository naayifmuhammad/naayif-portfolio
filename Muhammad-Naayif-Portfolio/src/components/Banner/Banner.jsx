import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Row, Col, Image} from 'react-bootstrap'
import './Banner.css'
import { useState } from 'react'
import heroImage from '../../assets/profile/cover.png'


const Banner = (props) => {

const [open, setOpen] = useState(false)

const toggleReadMore = ()=>{
    setOpen(!open)
};

  return (
    <section id="banner" className='banner-section'>
        <Container>
            <Row className='align-items-center'>
                <Col xl={7} className='bannerText' >
                <Row className='mt-5'>
                    <h1 className='welcome-msg'>Welcome to my portfolio</h1>
                </Row>
                <Row  className='intro-text pt-3'>
                    <h1>Hi I am <h1 className='hero-name'>Muhammad Naayif</h1></h1>
                </Row>
                <Row className='description-section'>
                    {!open ? <p className={!open ? 'visible' : 'invisible'}> A full-stack developer with a knack for crafting innovative solutions and a love for coding . . .<br/><a onClick={toggleReadMore} className='read-more-btn'>read more</a></p> : 
                    <p className={!open ? 'invisible' : 'visible'}> A full-stack developer with a knack for crafting innovative solutions and a love for coding. Whether it's creating dynamic web applications or building desktop tools, I enjoy turning ideas into reality. Feel free to explore my projects, learn about my journey, and get in touch if you'd like to collaborate or just have a chat about tech. I'm always up for new challenges and exciting opportunities.<br/><a onClick={toggleReadMore} className='read-more-btn'>read less</a></p>
                    }
                </Row>
                </Col>
                <Col lg={4} className='bannerImage my-5' >
                    <div className="image-container">
                    <Image src={heroImage}/>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner