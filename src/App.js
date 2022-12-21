import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutUS from './components/AboutUS';
import Contact from './components/Contact';
import Footer from './components/footer';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero/>
      <AboutUS />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
