import React from 'react'
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
    <h1 className='footer_h h2 f-spicy'>Luis.pomar.petin@gmail.com</h1>
      <nav className='footer_nav'>
        <a className='link h2 active' href=''>LinkedIn</a>
        <a className='link h2 active' href=''>Instagram</a>
        <a className='link h2 active' href=''>Behance</a>
        <a className='link h2 active' href=''>GitHub</a>
      </nav>
    </div>
  )
}
