import React, { useContext, useEffect, useState, useRef, useCallback } from 'react'
import './intro.scss'
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../../App';

export default function Intro({ poss, DY }) {

  const { lastP, setLastP, lastS, setLastS } = useContext(GlobalContext)
  const path = window.location.pathname;


  //Si esta en back que se mueva a la poss anterior 

  useEffect(() => {
    // console.log(DY);
    { !poss && window.scrollTo(0, 0) }
  })

  //to nav to Work when scrolldown
  const [detcDY, setDetDY] = useState(0)
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


  { (path == '/' && detcDY > 0) && setLastP('intro') }

  //animation background

  const colors = ['#EE4443', '#EE4443', '#EF8888', '#EF8888', '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292'];

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
      this.secondColor = getRandomColor() + '00';
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

    return <canvas ref={canvasRef} className='intro_canva' />;
  };

  return (
    <>
      <div id={!poss ? 'master' : 'none'}>
        <section className={!poss ? 'container intro' : 'back intro'}>
          {GradientAnimation()}
          <div className='intro_info'>
            <img className='intro_logo' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717415697/web-folio/logo_b_sjhx38.png' />
            <svg width="10%" height="5%" viewBox="0 0 115 35">
              <path class="cls-1" d="M0,15.06L3.03,.85h3.54l-.33,1.48h-1.74L2.12,13.58h1.74l-.33,1.48H0Z" />
              <path class="cls-1" d="M8.46,16.39c-.59,0-1.1-.05-1.55-.16s-.84-.23-1.19-.38v-1.78c.23,.12,.49,.23,.78,.34,.29,.11,.6,.19,.93,.25,.33,.06,.65,.09,.96,.09,.61,0,1.1-.15,1.48-.44,.38-.29,.64-.75,.78-1.35l.13-.52c.03-.21,.08-.43,.15-.68,.06-.25,.12-.45,.18-.63h-.06c-.21,.26-.43,.5-.68,.72-.24,.22-.52,.4-.82,.54-.3,.14-.65,.2-1.04,.2-.46,0-.86-.11-1.22-.33-.36-.22-.64-.56-.85-1.02-.21-.46-.31-1.05-.31-1.77,0-.55,.06-1.12,.18-1.7,.12-.58,.29-1.12,.52-1.64s.51-.98,.85-1.38,.73-.72,1.17-.95c.44-.23,.93-.35,1.46-.35,.38,0,.71,.06,.98,.18,.27,.12,.5,.29,.69,.5,.19,.21,.36,.46,.51,.74h.06l.49-1.25h1.61l-1.97,9.22c-.19,.86-.47,1.54-.86,2.06-.39,.51-.87,.89-1.44,1.12s-1.21,.34-1.91,.34Zm.9-5.43c.22,0,.43-.06,.64-.17,.21-.11,.4-.27,.6-.48,.19-.21,.36-.45,.52-.72,.16-.27,.3-.57,.42-.89s.21-.65,.28-.99c.06-.34,.1-.68,.1-1.02,0-.46-.1-.83-.29-1.11-.19-.28-.51-.42-.95-.42-.28,0-.55,.08-.79,.24-.24,.16-.47,.38-.67,.66-.2,.28-.37,.61-.51,.97-.14,.36-.25,.75-.33,1.16-.08,.41-.12,.82-.12,1.25,0,.51,.1,.89,.29,1.15,.2,.25,.47,.38,.83,.38Z" />
              <path class="cls-1" d="M14.01,15.82l.95-4.4h1.5l-.93,4.4h-1.52Z" />
              <path class="cls-1" d="M20.94,12.65c-.48,0-.88-.1-1.21-.29-.33-.2-.58-.47-.76-.83-.17-.36-.26-.79-.26-1.29,0-.22,.02-.47,.06-.74,.04-.28,.08-.56,.14-.84l1.06-5h2.04l-1.12,5.31c-.04,.19-.08,.38-.1,.55s-.03,.32-.03,.45c0,.34,.08,.59,.24,.77,.16,.17,.4,.26,.73,.26,.37,0,.72-.14,1.07-.43s.65-.7,.93-1.25c.28-.54,.49-1.19,.64-1.94l.8-3.72h2.02l-1.87,8.83h-1.58l.16-1.63h-.08c-.22,.32-.46,.61-.73,.89-.27,.28-.58,.5-.93,.66s-.74,.24-1.19,.24Z" />
              <path class="cls-1" d="M28.96,4.4l.93-4.4h1.52l-.95,4.4h-1.5Z" />
              <path class="cls-1" d="M30.68,12.48l1.87-8.83h2.05l-1.87,8.83h-2.05Zm3.31-10.07c-.31,0-.56-.07-.76-.22-.2-.15-.3-.37-.3-.68,0-.25,.05-.47,.15-.66,.1-.19,.24-.34,.43-.46,.19-.11,.42-.17,.69-.17,.31,0,.57,.07,.76,.22,.19,.15,.29,.37,.29,.68,0,.39-.12,.7-.35,.94s-.54,.35-.9,.35Z" />
              <path class="cls-1" d="M34.37,16.39c-.22,0-.43-.02-.64-.07-.21-.04-.38-.1-.52-.16v-1.6c.08,.03,.19,.06,.34,.1,.15,.03,.31,.05,.49,.05,.24,0,.45-.08,.62-.24,.17-.16,.29-.4,.36-.72l2.15-10.1h1.58l-.16,1.63h.06c.22-.33,.46-.62,.74-.9,.28-.27,.59-.49,.94-.65,.35-.16,.74-.24,1.17-.24,.49,0,.9,.1,1.24,.29,.34,.19,.59,.46,.77,.82,.17,.36,.26,.79,.26,1.29,0,.22-.02,.45-.06,.7-.04,.25-.08,.49-.12,.73l-1.09,5.17h-2.04l1.12-5.3c.04-.22,.08-.41,.1-.57,.02-.16,.03-.31,.03-.46,0-.34-.08-.59-.24-.76-.16-.17-.4-.25-.73-.25-.37,0-.73,.14-1.07,.43s-.65,.7-.92,1.25c-.27,.54-.49,1.19-.65,1.94l-1.04,4.95c-.13,.62-.32,1.13-.55,1.53-.24,.4-.54,.69-.89,.87-.35,.19-.77,.28-1.26,.28Z" />
              <path class="cls-1" d="M49,12.63c-.79,0-1.47-.15-2.04-.44s-1-.7-1.3-1.21c-.3-.52-.45-1.11-.45-1.77,0-.49,.06-.93,.17-1.34s.27-.77,.47-1.09c.19-.33,.42-.62,.68-.87,.25-.26,.52-.48,.79-.68h-1.79l.33-1.58h4.07l-.33,1.53c-.36,.17-.68,.39-.97,.64-.29,.25-.54,.54-.74,.86-.21,.33-.36,.68-.47,1.08s-.16,.82-.16,1.29c0,.61,.17,1.09,.5,1.43s.8,.52,1.39,.52c.35,0,.68-.07,.99-.2,.32-.14,.59-.34,.83-.61s.43-.62,.56-1.04c.14-.42,.2-.91,.2-1.47s-.09-1.03-.28-1.45c-.19-.42-.43-.77-.73-1.04l.32-1.53h3.85l-.32,1.58h-1.96c.2,.17,.38,.39,.55,.66,.17,.27,.32,.56,.44,.9,.12,.33,.18,.68,.18,1.05,0,.72-.11,1.37-.33,1.96-.22,.59-.54,1.09-.96,1.52-.42,.42-.92,.75-1.51,.98-.59,.23-1.25,.34-1.99,.34Z" />
              <path class="cls-1" d="M53.45,15.06l.31-1.48h1.74l2.38-11.25h-1.74l.32-1.48h3.54l-3.03,14.21h-3.52Z" />
            </svg>
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
