import { BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Services from './Services';
import Resume from './Resume';
import Sidebar from './Sidebar';
import Portfolio from "./Portfolio";


function App() {
  return (
    <Router>
      <div className='flex w-full h-screen md:flex flex-col'>
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;
