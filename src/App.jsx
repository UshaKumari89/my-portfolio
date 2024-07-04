import styles from "./App.module.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Hero } from "./components/Hero/hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";



function App() {
 return (
    <div className={styles.App}>
   <NavBar/>
   <Hero/>
   <About/>
   <Projects/>
   <Skills/>
  <Contact/>
    </div>
  );
}
export default App;
