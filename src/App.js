import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Services from './components/Services';
import Resume from './components/Resume';
import Sidebar from './components/Header/Sidebar';
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";


function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }


  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <Router>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className='flex w-full h-screen md:flex flex-col min-w-fit'>
          <Sidebar />
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
