import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Certification from './components/Certification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'



function App() {
  

  return (
    
      <div className='bg-black'>
        <Sidenav />
        <Main />
        <Certification />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
    
  )
}

export default App
