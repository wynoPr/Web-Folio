import React from 'react'

export default function About({poss, DY}) {
  return (
    <div id={!poss ? 'master' : 'none'} style={ poss == 'back' ? { position: 'absolute', top: `-${DY}px`, width: '100%'  } : {textDecoration: 'none'}}>
        <div  className={!poss ? 'container work' : 'container_back work'}>
            <h1 className='h1'>About</h1>
        </div>
      </div>
  )
}
