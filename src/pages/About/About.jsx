import React from 'react'
import "./About.scss";
import Footer from '../../components/Footer/Footer';

export default function About({poss, DY}) {
  return (
    <div id={!poss ? 'master' : 'none'} style={ poss == 'back' ? { position: 'absolute', top: `-${DY}px`, width: '100%'  } : {textDecoration: 'none'}}>
        <div  className={!poss ? 'container about' : 'back about'}>
          <section className='about_head'>
            <h1 className='hl'>ABOUT ME</h1>
            <p className='about_head_p f-faint h1 f-spicy f-it'>Hi, I'm Luis Pomar</p>
          </section>
          <section className='about_info'>
            <p className='about_info_ph h1 f-it'>
              I am a Galician Full Stack Web Developer and Graphic Designer specializing in UX/UI Design, Universal Design, inclusion, and disability.
            </p>
            <p className='about_info_p h4 f-faint f-it'> 
              "It's important to consider the majority and aesthetic trends, but we must not forget that design is for everyone, and we should facilitate access to as many people as possible."
            </p>
            <img className='about_info_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717437350/web-folio/Recurso_4_yhahuf.png' />
          </section>
          <section className='about_exp'>
            <h1 className='h1 about_exp_h'> Experience</h1>
            <p className='about_exp_p about_exp_p1 h3 f-it'> 
              I love constantly learning new things and challenging myself, and that's how it all began. Since I was young, I was fascinated by watching my mother work and create ads for the local press. At 16, I started creating ads myself, knowing clearly that I wanted to study Graphic Design.
            </p>
            <p className='about_exp_p h3 f-it'> 
              Once in college, I started distancing myself from the advertising world. Although it initially drew me to the field, I didn't feel comfortable as everything seemed too superficial. However, as I learned more about graphic design and matured, I realized that we, as designers, are shaping the future. Therefore, we must be conscious of ourselves and the impact of our actions because small changes and improvements can make everyday life easier and more accessible for many people.
            </p>
            <p className='about_exp_pr h3 f-it'> 
              This is why I am so interested in interface design and user experience. With the current advancement of technologies, designers and developers must be more aware of the implications of our work. Whereas using the internet or a smartphone used to be optional, it has now become a necessity. Therefore, just like in architecture, I believe it is essential to consider a broader range of realities, not just the average.
            </p>
            <p className='about_exp_h h1 f-it f-c'> 
            And we must NEVER forget that design is Universal.
            </p>
          </section>
          <Footer/>
        </div>
      </div>
  )
}
