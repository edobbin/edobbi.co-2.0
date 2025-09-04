import './App.css';
import Nav from './components/Navbar/navbar.js'
import Home from './components/sections/home/home.js'
import About from './components/sections/about/about.js'
import Background from './components/background/background.jsx';
import Experience  from './components/sections/Experience/Experience.js';
import Project from './components/sections/projects/project.js'
import './master.css'

function App() {
  return (
    <div className="App">
    {/* <Nav /> */}
    <div className='container'>
    <Background />
    <Home/>
    <About />
    <Experience />
    <Project />
    </div>
    </div>
  );
}

export default App;
