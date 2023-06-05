import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ParticlesBackground from './Components/ParticlesBackground';
function App() {
  return (
    <>
     <Navbar/>
     <Home/>
    <ParticlesBackground/>
    </>
  );
}

export default App;
