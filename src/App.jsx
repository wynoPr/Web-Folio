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
import Estilos from './pages/Styles/Estilos'

export const GlobalContext = React.createContext();

function App() {

  //GV for work viwer
  const [workViewer, setWorkViewer] = useState();

  //GV for searchbar
  const [find, finder] = useState();

  //GV for las page visited & scroll
  const [lastP, setLastP] = useState('work');
  const [lastS, setLastS] = useState();

   //petición sacar datos de api
   const [work, setWork] = useState([]);
   const getWork = async () => {
     try {
       const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:P3ZKz3vC/work");
       const data = await res.json();
       const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date))
      //  console.log(data);
       // console.log(sortedData);
       setWork(sortedData);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
   useEffect(() => {
     getWork();
   }, []);
   //

  return (
        <GlobalContext.Provider value={{ find, finder, lastP, setLastP, lastS, setLastS, workViewer, setWorkViewer }}>
    <BrowserRouter>
    
    <Navy></Navy>
    <div className='black_screen'></div>
    {lastP == 'intro' && <Intro poss='back' DY={lastS}/>}
    {lastP == 'work' && <Work poss='back' DY={lastS} work={work}/>}
    {lastP == 'about' && <About poss='back' DY={lastS}/>}
    {lastP == 'cv' && <CV poss='back' DY={lastS}/>}
    {lastP == 'contact' && <Contact poss='back' DY={lastS}/>}
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/work" element={<Work work={work} />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/styles" element={<Estilos />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </BrowserRouter>
        </GlobalContext.Provider>
  );
}

export default App;

