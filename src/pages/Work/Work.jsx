import React, { useEffect }  from 'react'
import "./Work.scss";
import { useLocation } from 'react-router-dom';
import CardWork from '../../components/CardWork/CardWork';
import Footer from '../../components/Footer/Footer';
import WorkViewer from '../../components/WorkViewer/WorkViewer';



export default function Work({poss, DY, work}) {

  const location = useLocation();
  
  const viewportWidth = window.innerWidth;

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
    <>
      <div id={!poss ? 'master' : 'none'} style={ poss == 'back' ? { position: 'absolute', top: `-${DY}px`, width: '100%' } : {textDecoration: 'none',}}>
        <div  className={!poss ? 'container work' : 'back work'}>
        <section className='work_head'>
          <h1 className='hl'>RECENT</h1>
          <h1 className='hl'>WORK</h1>
          <p className='work_head_p f-faint f-tags f-it'>A GATHERING OF WORKS, FROM YESTERDAY AND TODAY. SOME CRAFTED FOR THE PRESENT, OTHERS FOR THE FUTURE. RANGING FROM WEB DESIGN AND FRONT-END DEVELOPMENT TO PHOTOGRAPHY AND BRANDING PROJECTS.</p>

        </section>
          <section className='cardWork_gallery'>
            {work.length > 0 && work.map((work, i) => 
              <CardWork key={i} size={( i == 0 ) && '2'} i={i} info={work} />
            )}
            {viewportWidth > 480 && <WorkViewer pos='End'/>}
          </section>
          <Footer/>
        </div>
      </div>
    {viewportWidth < 480 && <WorkViewer pos='End'/>}
    </>
  )
}
