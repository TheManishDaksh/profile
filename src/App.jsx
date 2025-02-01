import './App.css'
import {Navbar, Hero, Project, Education, Contact} from "./components"

function App() {

  return (
    <div className='bg-black w-full h-full px-5 md:w-full md:bg-black md:h-full md:px-10 lg:w-full lg:h-full lg:bg-black lg:px-40'>
      <Navbar/>
      <div>
        <section id='home'><Hero/></section>
        <section id='project'><Project/></section>
        <section id='Education'><Education/></section>
        <section id='Contact'><Contact/></section> 
      </div>
    </div>
  )
}

export default App
