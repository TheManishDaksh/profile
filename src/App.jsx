import './App.css'
import {Navbar, Hero, Project, Education} from "./components"

function App() {

  return (
    <div className='bg-slate-800 w-full h-full px-40'>
      <Navbar/>
      <div>
        <section id='home'><Hero/></section>
        <section id='project'><Project/></section>
        <section id='Education'><Education/></section>
      </div>
    </div>
  )
}

export default App
