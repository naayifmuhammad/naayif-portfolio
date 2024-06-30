import React from 'react'
import Banner from './Banner/Banner'
import Skills from './Skills/Skills'
import Projects from '../Projects/Projects'
import SectionMessage from './SectionMessage/SectionMessage'



const Home = () => {
  return (
    <>
      <Banner sectionName="home" />
      <Skills/>
      <SectionMessage />
    </>
  )
}

export default Home