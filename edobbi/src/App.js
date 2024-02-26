import './App.css';
import Nav from './components/Navbar/navbar.js'
import Home from './components/sections/home/home.js'
import About from './components/sections/about/about.js'
import './master.css'
function App() {
  return (
    <div className="App">

    {/* <Nav name = 'dob'/>  */}
    <div className='container'>
    <Home/>
    <About />
    
      
    </div>
    </div>
  );
}

export default App;
