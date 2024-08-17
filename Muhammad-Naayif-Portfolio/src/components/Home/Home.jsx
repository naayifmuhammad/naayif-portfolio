import {useEffect,React} from 'react'
import Banner from './Banner/Banner'
import Skills from './Skills/Skills'
import SectionMessage from './SectionMessage/SectionMessage'
import './Home.css'


const Home = () => {
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target); // Stop observing once the class is added
        }
      });
    }, options);

    // Observe each section
    document.querySelectorAll('.fade-in-element').forEach(section => {
      observer.observe(section);
    });
  }, []);
  
  return (
    <>
      <Banner sectionName="home"/>
      <Skills/>
      <SectionMessage />
    </>
  )
}

export default Home