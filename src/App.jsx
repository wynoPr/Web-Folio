import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./App.scss";
import "./index.scss";
import Intro from './pages/Intro/Intro';
import Work from './pages/Work/Work';
import Navy from './components/Navy/Navy';
import About from './pages/About/About';
import CV from './pages/CV/CV';
import Contact from './pages/Contact/Contact';

export const GlobalContext = React.createContext();

function App() {

    //GV for searchbar
  const [find, finder] = useState();

  //GV for las page visited & scroll
  const [lastP, setLastP] = useState();
  const [lastS, setLastS] = useState();

  return (
        <GlobalContext.Provider value={{ find, finder, lastP, setLastP, lastS, setLastS }}>
    <BrowserRouter>
    
    <Navy></Navy>
    <div className='black_screen'></div>
    {lastP == 'intro' && <Intro poss='back' DY={lastS}/>}
    {lastP == 'work' && <Work poss='back' DY={lastS}/>}
    {lastP == 'about' && <About poss='back' DY={lastS}/>}
    {lastP == 'cv' && <CV poss='back' DY={lastS}/>}
    {lastP == 'contact' && <Contact poss='back' DY={lastS}/>}
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </BrowserRouter>
        </GlobalContext.Provider>
  );
}

export default App;

