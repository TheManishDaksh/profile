import './App.css'
import {Navbar, Hero, Project, Education, Contact} from "./components"

function App() {

  return (
    <div className='bg-black w-full h-full px-40'>
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
