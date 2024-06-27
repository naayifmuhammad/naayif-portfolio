import './App.css'
import NavigationBar from './components/NavBar/NavigationBar'
import Home from './components/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
