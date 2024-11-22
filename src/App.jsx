import About from "./components/About"
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
