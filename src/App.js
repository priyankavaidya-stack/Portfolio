import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Services from './components/Services';
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className='flex w-full h-screen md:flex flex-col min-w-fit'>
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
