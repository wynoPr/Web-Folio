import React, { useContext, useEffect, useState }  from 'react'
import "./Work.scss";
import { useLocation } from 'react-router-dom';
import CardWork from '../../components/CardWork/CardWork';



export default function Work({poss, DY}) {

  const location = useLocation();

  //Si esta en back que se mueva a la poss anterior 

  useEffect(() => {
    setTimeout(() => {
      {window.scrollTo( 0 , 0 )};
    }, 100);
      document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 1500);
  },[location])

  return (
    
      <div id={!poss ? 'master' : 'none'} style={ poss == 'back' ? { position: 'absolute', top: `-${DY}px`, width: '100%' } : {textDecoration: 'none'}}>
        <div  className={!poss ? 'container work' : 'container_back work'}>
          <h1 className='h1'>Work</h1>
          <section className='cardWork_gallery'>
            {(() => {
              const cards = [];
              for (let i = 0; i < 29; i++) {
                cards.push(<CardWork key={i} size={( i == 0 ) && '2'} i='i' />);
              }
              return cards;
            })()}

          </section>
        </div>
      </div>
    
  )
}
