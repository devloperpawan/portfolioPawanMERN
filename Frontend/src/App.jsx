import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './section/About/About'
import Contact from './section/Contact/Contact'
import Footer from './section/footer/Footer'
import Home from './section/Home/Home'
import Project from './section/Projects/Project'

function App() {

  return (
    <div className='max-w-[1440px] w-full flex flex-col items-center justify-center'>
     <Navbar />
    <section id='home' className='w-full'><Home /></section>
    <section id='about' className='w-full'><About /></section>
    <section id='project' className='w-full'><Project/></section>
    <section id='contact' className='w-full'><Contact/></section>
    <section id='contact' className='w-full'><Footer/></section>
    </div> 
  )
}

export default App
