import React, { useContext, useEffect, useState } from 'react'
import './intro.scss'
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../../App';

export default function Intro({poss, DY}) {

  const { lastP, setLastP, lastS, setLastS} = useContext(GlobalContext)
  const path = window.location.pathname;


  //Si esta en back que se mueva a la poss anterior 

  useEffect(() => {
    // console.log(DY);
    {!poss && window.scrollTo( 0 , 0 ) }
  })

  //to nav to Work when scrolldown
  const [detcDY, setDetDY] = useState (0) 
  useEffect(() => {

    const handleScroll = (event) => {
      // Verifica si el usuario ha hecho scroll hacia abajo
      setDetDY(event.deltaY || startY - event.touches[0].clientY - 150);
    };
  
    let startY = 0;
  
    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };
  
    // Escucha el evento 'wheel' (rueda del ratón) para detectar el desplazamiento
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchmove', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);
  //
     
  
  {(path == '/' && detcDY > 0) && setLastP('intro')}

  return (
    <>
    <div id={!poss ? 'master' : 'none'}>
        <section className={!poss ? 'container intro' : 'container_back intro'}>
          <img height='100%' width='100%' className='cosa' src='src\media\vlcsnap-2023-06-13-18h07m28s498.png'></img>
        </section>
    </div>
    {/* moves navigations */}
    {(path == '/' && detcDY > 0) &&
        // Cambia '/ruta-de-destino' por la URL a la que quieres redirigir al usuario
        <Navigate to="/work" />
      }
    </>
  )
}
