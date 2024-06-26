import './App.css'
import NavigationBar from './components/NavBar/NavigationBar'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <Banner sectionName="home" />
      <Skills/>
    </div>
  )
}

export default App
