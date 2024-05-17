import React, { useEffect } from 'react'
import './CardWork.scss'

export default function CardWork({size, i}) {

    //altura card
    window.addEventListener('scroll', function() {
        const objeto = document.getElementsByClassName('cardWork');
        const objetoRect = objeto.getBoundingClientRect();
        
        // Calcula la distancia vertical al centro del viewport
        const viewportCenterY = window.innerHeight / 2;
        const objetoCenterY = objetoRect.top + objetoRect.height / 2;
        const distanciaAlCentro = Math.abs(viewportCenterY - objetoCenterY);
        
        // // Calcula la distancia horizontal al margen izquierdo del viewport
        // const distanciaAlMargenIzquierdo = objetoRect.left;
      
        // // Establece la altura y el ancho del objeto
        // objeto.style.height = (window.innerHeight - distanciaAlCentro * 2) + 'px';
        // objeto.style.width = (window.innerWidth - distanciaAlMargenIzquierdo) + 'px';

        {i == 5 && console.log(i + ' ' + distanciaAlCentro);}

      });
      

  return (
    <div className={ size == 2 ? 'x2' : 'none'}>
        { size == 2 && <h3 className='h3 f-reverse'>: Latest post</h3>}
        <div className={ size == 2 ? 'cardWork cardWork_x2' : 'cardWork'}></div>
    </div>
  )
}
