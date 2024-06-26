import React from 'react'
import "./CV.scss";
import Footer from '../../components/Footer/Footer';

export default function CV({poss, DY}) {

  function scrollToElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 40;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } else {
        console.log(`Element with id "${elementId}" not found.`);
    }
  }
  const handleDownloadPDF = () => {
    // Ruta al PDF que quieres descargar
    const pdfURL = 'https://drive.google.com/file/d/1D8mbXf0ab_-wVQ6uqtdZf64yDW4L8waz/view?usp=drive_link';
    
    // Abre una nueva ventana para descargar el PDF
    window.open(pdfURL, '_blank');
  };

  
  return (
    <div id={!poss ? 'master' : 'none'} style={ poss == 'back' ? { position: 'absolute', top: `-${DY}px`, width: '100%'  } : {textDecoration: 'none'}}>
        <div  className={!poss ? 'container cv' : 'back cv'}>
           <section className='cv_head'>
              <h1 className='hl'>C.V.</h1>
            </section>
           <section className='cv_contt'>
              <nav className='cv_nav'>
                <button className='h3 link bg-n' onClick={()=> {scrollToElementById('PP')}}>Professional Profile</button>
                <button className='h3 link bg-n' onClick={()=> {scrollToElementById('WE')}}>Work Experience</button>
                <button className='h3 link bg-n' onClick={()=> {scrollToElementById('E')}}>Education</button>
                <button className='h3 link bg-n' onClick={()=> {scrollToElementById('L')}}>Languages</button>
                <button className='h3 link bg-n' onClick={()=> {scrollToElementById('s')}} style={{display: 'none'}}>Skills</button>
                <button className='h3 link bg-n' onClick={handleDownloadPDF}>Download PDF</button>
              </nav>
              <div className='cv_contt_div'>
                <div className='cv_contt_card' id='PP'>
                  <h2 className='h1 cv_contt_card_h'>Professional Profile</h2>
                  <p  className='p-b cv_contt_card_p'>
                    Galician Full Stack Web Developer and Graphic Designer specializing in UX/UI Design, Universal Design, inclusion, and disability.
                  <p/>
                  <p  className='p-b cv_contt_card_p'></p>
                    Whereas using the internet or a smartphone used to be optional, it has now become a necessity. Therefore, just like in architecture, I believe it is essential to consider a broader range of realities, not just the average
                  </p>
                </div>
                <div className='cv_contt_card' id='WE'>
                  <h2 className='h1 cv_contt_card_h'>Work Experience</h2>
                  <div className='cv_contt_card_e'>
                    <img className='cv_contt_card_e_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717672099/web-folio/icono_fondo_2x_f61qmq.png' alt='Somos Comarca Logo'/>
                    <div  className='cv_contt_card_e_info'>
                      <h2 className='h2 cv_contt_card_e_h1'>Somos Comarca</h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>May 17 - Mar. 24</h2>
                      <h2 className='h3 f-it cv_contt_card_e_h2 f-faint'>Graphic Designer</h2>
                      <p className='p-b cv_contt_card_e_p'>
                      Since 2016, I have been actively involved in local projects, highlighting collaborations since 2017 with somoscomarca.es and Ondacero Valdeorras as a photographer and graphic designer. Starting in June 2023, I began working full-time as a project manager, web designer, and advertiser.
                      </p>
                    </div>
                  </div>
                  <div className='cv_contt_card_e'>
                    <img className='cv_contt_card_e_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717674406/web-folio/partnerlogo-nttdata-small-stage_zlwi7k.png' alt='NTT DATA Logo'/>
                    <div  className='cv_contt_card_e_info'>
                      <h2 className='h2 cv_contt_card_e_h1'>NTT DATA Europe & LATAM</h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>Sept. 21 - Jul. 22</h2>
                      <h2 className='h3 f-it cv_contt_card_e_h2 f-faint'>UX Designer Internship</h2>
                      <p className='p-b cv_contt_card_e_p'>
                        I worked on improving and optimizing the interface of Inttrend and creating the Market Intelligent Platform due to increased usage and new users, as well as bug fixing. Additionally, my responsibilities included creating graphic pieces and translating for the CLOQQ initiative of the business group.
                      </p>
                    </div>
                  </div>
                  <div className='cv_contt_card_e'>
                    <img className='cv_contt_card_e_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717672249/web-folio/xbfbgfxbg_qfxscs.png' alt='Kamaleonika Global Logo'/>
                    <div  className='cv_contt_card_e_info'>
                      <h2 className='h2 cv_contt_card_e_h1'>Kamaleonika Global</h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>Apr. 21 - Jul. 21</h2>
                      <h2 className='h3 f-it cv_contt_card_e_h2 f-faint'>Graphic Designer Internship</h2>
                      <p className='p-b cv_contt_card_e_p'>
                        My main role was as the lead designer for branding and web design in the "E-Sports Inclusivos" project, as well as providing advice on inclusion and diversity. The work also included rebranding the company's own brand, and creation social media content for both the company and its clients.
                      </p>
                    </div>
                  </div>

                </div>
                <div className='cv_contt_card' id='E'>
                  <h2 className='h1 cv_contt_card_h'>Education</h2>
                  <div className='cv_contt_card_ed'>
                  <h2 className='h2 f-it cv_contt_card_e_h2'>University Degree</h2>
                    <div  className='cv_contt_card_e_info'>
                      <h2 className='h3 cv_contt_card_e_h1'>Bachelor's Degree in Multimedia and Graphic Design.<span  className='h4 f-faint'> ESNE.</span></h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>May 17 - Mar. 24</h2>
                    </div>
                    <h2 className='h2 f-it cv_contt_card_e_h2'>Further Studies</h2>
                    <div  className='cv_contt_card_e_info'>
                      <h2 className='h3 cv_contt_card_e_h1'>Bootcamp Full Stack Development.<span  className='h4 f-faint'> Upgrade hub.</span></h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>Mar. 24 - May 24</h2>
                      <h2 className='h3 cv_contt_card_e_h1'>Master Digital Product Design: UX Research & UI Design.<span  className='h4 f-faint'> Udemi.</span></h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>May 23</h2>
                      <h2 className='h3 cv_contt_card_e_h1'>UX Writing Course<span  className='h4 f-faint'> Udemi.</span></h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>Mar. 23</h2>
                      <h2 className='h3 cv_contt_card_e_h1'>Personal skills and employability<span  className='h4 f-faint'> U.O.I.</span></h2>
                      <h2 className='h4 cv_contt_card_e_h3 f-faint'>Sept. 19 - Jan. 20</h2>
                    </div>
                  </div>
                </div>
                <div className='cv_contt_card' id='L'>
                  <h2 className='h1 cv_contt_card_h'>Languages</h2>
                  <div  className='cv_contt_card_l'>    
                    <figure   className='cv_contt_card_l_fig'>
                      <img className='h3 cv_contt_card_l_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717689120/web-folio/Bandera_de_Espa%C3%B1a__sin_escudo_.svg_hfx6oz.png'/>
                    </figure>
                    <h3 className='h3 cv_contt_card_l_h3'>Spanish:<br/>Native</h3>
                  </div>
                  <div  className='cv_contt_card_l'>
                    <figure   className='cv_contt_card_l_fig'>
                      <img className='h3 cv_contt_card_l_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717689120/web-folio/bgalega_jkvbie.png'/>
                    </figure>
                    <h3 className='h3 cv_contt_card_l_h3'>Galician:<br/>Native</h3>
                  </div>
                  <div  className='cv_contt_card_l'>
                    <figure   className='cv_contt_card_l_fig'>
                      <img className='h3 cv_contt_card_l_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717689120/web-folio/Flag_of_the_United_Kingdom__3-5_.svg_av3lpk.png'/>
                    </figure>
                    <h3 className='h3 cv_contt_card_l_h3'>English:<br/>Mid-high</h3>
                  </div>
                  <div  className='cv_contt_card_l'>
                    <figure   className='cv_contt_card_l_fig'>
                      <img className='h3 cv_contt_card_l_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717689120/web-folio/197386_brguxo.png'/>
                    </figure>
                    <h3 className='h3 cv_contt_card_l_h3'>Portuguese:<br/>Basic</h3>
                  </div>
                </div>
                <div className='cv_contt_card' id='S' style={{display: 'none'}}>
                  <h2 className='h1 cv_contt_card_h'>Skills</h2>
                </div>
                <button className='h3 btt' onClick={handleDownloadPDF}>Descargar PDF</button>
              </div>
            </section>
            <Footer></Footer>
        </div>
      </div>
  )
}
