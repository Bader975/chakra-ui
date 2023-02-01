import { Slide } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import Card from './comp/Card'
import Footer from './comp/Footer'
import Nav from './comp/Nav'
import Slider from './comp/Slider'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav/>
     <Login/>
    <Slider/>
     <Footer/>

  
    </div>
  )
}

export default App
