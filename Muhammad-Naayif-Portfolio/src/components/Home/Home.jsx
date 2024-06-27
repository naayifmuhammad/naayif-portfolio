import React from 'react'
import Banner from './Banner/Banner'
import Skills from './Skills/Skills'
import Projects from '../Projects/Projects'



const Home = () => {
  return (
    <>
      <Banner sectionName="home" />
      <Skills/>
    </>
  )
}

export default Home