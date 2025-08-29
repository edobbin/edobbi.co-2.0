import './App.css';
import Nav from './components/Navbar/navbar.js'
import Home from './components/sections/home/home.js'
import About from './components/sections/about/about.js'
import Background from './components/background/background.jsx';
import { Experience } from './components/Experience/Experience.js';
import './master.css'

function App() {
  return (
    <div className="App">
    <Nav />
    {/* <Nav name = 'dob'/>  */}
    <div className='container'>
    <Background />
    <Home/>
    <About />
    <Experience />
      
    </div>
    </div>
  );
}

export default App;
