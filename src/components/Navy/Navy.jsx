import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../App';

export default function Navy() {

    //lorito ubicación y scroll
    const { lastP, setLastP, lastS, setLastS} = useContext(GlobalContext)

    const location = useLocation();

    const [locSimpl, setLocSimpl] = useState(0)

    useEffect(() => {

        setLocSimpl(0)
        setTimeout(() => {
            setLastS(0)
        }, 1500);
    
        // console.log(location.pathname)
        {location.pathname == '/' && setLocSimpl('intro')}
        {location.pathname.includes('work') && setLocSimpl('work')}
        {location.pathname.includes('about') && setLocSimpl('about')}
        {location.pathname.includes('cv') && setLocSimpl('cv')}
        {location.pathname.includes('contact') && setLocSimpl('contact')}

      }, [location])


      //

      //actualizar lastS en función del scroll

  const handleScroll = () => {
    // console.log(window.scrollY); // Almacena la posición del scroll en lastS
    // console.log(lastS); // Almacena la posición del scroll en lastS
  };

  // Agrega un evento de escucha para detectar el scroll
  window.addEventListener('wheel', handleScroll);

  return (
    <div  className='nav_intro'>
        <NavLink to='/' className={'h2 link'} onClick={() => {setLastP(locSimpl); setLastS(window.scrollY)}}>Home</NavLink>
        <NavLink to='/work' className={'h2 link'} onClick={() => {setLastP(locSimpl); setLastS(window.scrollY)}} >Work</NavLink>
        <NavLink to='/about' className={'h2 link'} onClick={() => {setLastP(locSimpl); setLastS(window.scrollY)}}  >About</NavLink>
        <NavLink to='/cv' className={'h2 link'} onClick={() => {setLastP(locSimpl); setLastS(window.scrollY)}}  >C.V.</NavLink>
        <NavLink to='/contact' className={'h2 link'} onClick={() => {setLastP(locSimpl); setLastS(window.scrollY)}} >Contact</NavLink>
        <button onClick={() => {console.log(lastS)}}>altura</button>
    </div>
  )
}
