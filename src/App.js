import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ParticlesBackground from './Components/ParticlesBackground';
import About from './Components/About';
function App() {
  return (
    <>
     <Navbar/>
     <Home/>
    <ParticlesBackground/>
    <About/>
    </>
  );
}

export default App;
