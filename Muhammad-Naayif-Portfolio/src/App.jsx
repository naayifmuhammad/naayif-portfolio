import './App.css'
import NavigationBar from './components/NavBar/NavigationBar'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <Banner sectionName="home" />
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
