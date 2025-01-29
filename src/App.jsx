import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Certification from './components/Certification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import { useEffect } from 'react'



function App() {

  useEffect(() => {
    location.hash = "#main"
    window.scrollTo(0, 0);
  }, []);
  

  return (
    
      <div className='bg-black'>
        <Sidenav />
        <Main />
        <Projects />
        <Skills />
        <Certification />
        <Contact />
        <Footer />
      </div>
      
    
  )
}

export default App
