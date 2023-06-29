import { BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Services from './Services';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className='flex w-full h-screen md:flex flex-col'>
        <Sidebar />
        <Home />
        <About />
        <Services />
      </div>
    </Router>
  );
}

export default App;
