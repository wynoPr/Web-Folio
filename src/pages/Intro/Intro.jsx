import React, { useContext, useEffect, useState, useRef, useCallback } from 'react'
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

  //animation background

const colors = ['#EE4443','#EE4443', '#EF8888', '#EF8888', '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

class Circle {
  constructor(w, h, minR, maxR) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * (maxR - minR) + minR;
    this.firstColor = getRandomColor();
    this.secondColor = getRandomColor() + '00' ;
  }
  draw(ctx, speed) {
    this.angle += speed;
    const x = this.x + Math.cos(this.angle) * 200;
    const y = this.y + Math.sin(this.angle) * 200;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
    gradient.addColorStop(0, this.firstColor);
    gradient.addColorStop(1, this.secondColor);

    ctx.globalCompositeOperation = `overlay`;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const GradientAnimation = () => {
  const canvasRef = useRef(null);
  const circlesRef = useRef([]);
  const circlesNum = 10;
  const minRadius = 400;
  const maxRadius = 400;
  const speed = 0.002;

  const setCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = window.innerWidth * window.devicePixelRatio;
    const h = canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    circlesRef.current = [];
    for (let i = 0; i < circlesNum; ++i) {
      circlesRef.current.push(new Circle(w, h, minRadius, maxRadius));
    }
  }, []);

  const drawAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circlesRef.current.forEach(circle => circle.draw(ctx, speed));
    window.requestAnimationFrame(drawAnimation);
  }, []);

  useEffect(() => {
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.requestAnimationFrame(drawAnimation);
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [setCanvasSize, drawAnimation]);

  return <canvas ref={canvasRef} className='intro_canva'/>;
};
  
  return (
    <>
    <div id={!poss ? 'master' : 'none'}>
        <section className={!poss ? 'container intro' : 'back intro'}>
          {GradientAnimation()}
          <div className='intro_info'>
          <img className='intro_logo' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717415697/web-folio/logo_b_sjhx38.png'/>
          <h1 className='h1 f-alt f-it'>[ɡˌuˈiɲʊ]</h1>
          <p className='work_head_p f-faint f-tags f-it'>A GATHERING OF WORKS, FROM YESTERDAY AND TODAY. SOME CRAFTED FOR THE PRESENT, OTHERS FOR THE FUTURE. RANGING FROM WEB DESIGN AND FRONT-END DEVELOPMENT TO PHOTOGRAPHY AND BRANDING PROJECTS.</p>
          </div>
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
