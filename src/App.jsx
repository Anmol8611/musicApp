import { useState } from 'react'
import Header from './components/Header'
import HeroBottomStrip from './components/HeroBottomStrip'
import AboutChallenges from './components/AboutChallenges'
import Courses from './components/Courses'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroBottomStrip/>
      <AboutChallenges/>
      <Courses/>
      <About/>
    </>
  )
}

export default App
