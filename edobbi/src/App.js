import './App.css';
import Nav from './components/Navbar/navbar.js'
import Home from './components/sections/home/home.js'
import './master.css'
function App() {
  return (
    <div className="App">

    <Nav name = 'dob'/> 
    <div className='container'>
    <Home/>
    
    <section className='about'>
      <h2>About Me</h2>
      <p>Howdy, my name is Ethan and I am a Student at Towson University majoring in Computer Science. I love making projects and learning new skills whether it be in my own freetime or through class projects. I began my programming in high school wher I was able to learn java.</p>
      <br></br>
      <p></p>
      <div className='skills'>
        <div>
          
        </div>
      </div>
    </section>    
    </div>
    </div>
  );
}

export default App;
