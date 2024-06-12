import React, { useEffect, useState } from 'react'
import "./Contact.scss";
import axios, { Axios } from 'axios';

export default function Contact({poss, DY}) {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    useEffect(() => {
      console.log(formData);
    
      
    }, [formData])
    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          'https://x8ki-letl-twmt.n7.xano.io/api:uBDZEuOC/contact_info',
          formData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        console.log('Success:', response.data);
        
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    };

  return (
    <div id={!poss ? 'master' : 'none'} style={ poss == 'back' ? { position: 'absolute', top: `-${DY}px`, width: '100%'  } : {textDecoration: 'none'}}>
        <div  className={!poss ? 'container contact' : 'back contact'}>
          <section className='about_head'>
            <h1 className='contact_head_h h1'>If you want to talk about a project, collaboration or just drop by to say hello, you're welcome =)</h1>
          </section>
          <section className='contact_form'>
          <figure className='contact_form_fig'>
            <div className='contact_fondo'></div>
            <img  className='contact_form_img' src='https://res.cloudinary.com/drskdhhht/image/upload/v1717891791/web-folio/Sin_t%C3%ADtulo-2_a_ff6jhc.png'/>
          </figure>
          {/* <img style={{ height: '60vh' }} src='https://res.cloudinary.com/drskdhhht/image/upload/v1717888692/web-folio/Sin_t%C3%ADtulo-2_b_q2b2ji.png'/> */}
            <form  className='contact_form_form'  onSubmit={handleSubmit}>
              <label for="fname" style={{display:'none'}}>Full name:</label>
              <input id='fname'  className='input contact_form_name' type="text" name="name" placeholder='Full Name' onChange={handleChange} required />
              
              <label for="fphone" style={{display:'none'}}>Phone Number:</label>
              <input id='fphone'  className='input contact_form_phone' type="text" name="phone" placeholder='Phone Number' onChange={handleChange} />
              
              <label for="fmail" style={{display:'none'}}>Email:</label>
              <input id='fmail'  className='input contact_form_mail' type="text" name="email" placeholder='E-mail' onChange={handleChange} required />
              
              <label for="fmsg" style={{display:'none'}}>Message:</label>
              <textarea id='fmsg'  className='input contact_form_message' type="text" name="message" placeholder='Tell us about it...' onChange={handleChange} required style={{width:'100%', height:'60%'}}/>
              
              <input  className='btt h3' type="submit" value="Submit"></input>
            </form>
          </section>
        </div>
      </div>
  )
}
