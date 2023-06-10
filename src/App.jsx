import { useState } from 'react'
import Header from './components/Header'
import HeroBottomStrip from './components/HeroBottomStrip'
import AboutChallenges from './components/AboutChallenges'
import Courses from './components/Courses'
import About from './components/About'
import WhyUs from './components/WhyUs'
import BottomHero from './components/BottomHero'
import UsersThink from './components/UsersThink'
import Form from './components/Form'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroBottomStrip/>
      <AboutChallenges/>
      <Courses/>
      <About/>
      <WhyUs/>
      <BottomHero/>
      <UsersThink/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
