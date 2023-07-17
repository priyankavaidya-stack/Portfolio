import { BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Services from './Services';
import Resume from './Resume';
import Sidebar from './Sidebar';
import Portfolio from "./Portfolio";
import Footer from "./Footer";


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
