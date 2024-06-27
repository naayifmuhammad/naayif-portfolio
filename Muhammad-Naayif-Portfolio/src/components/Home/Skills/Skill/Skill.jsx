import React from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import './Skill.css'
const Skill = (props) => {
  return (
    <div className="skill-container d-flex flex-column align-items-center justify-content-center my-5">
        <Row className={!props.badge ? 'round-image-container' : 'round-image-container badge-light'}>
          <Image src={props.skillIcon} fluid/>
        </Row>
        <Row>
            <h1 className="skill-title pt-3">{props.skillTitle}</h1>            
        </Row>
        <Row>
            <p className="skill-description">{props.skillDescription}</p>            
        </Row>
    </div>
  )
}

export default Skill