import React, { useEffect, useState } from 'react'

export default function Slider({imgInfo}) {

    const [step, setStep] = useState(0);

    // console.log(imgInfo.length);
    useEffect(() => {
      setStep(0)
    }, [imgInfo])

    useEffect(() => {
    //   console.log(step);
      renderStep()
      pauseVideo()
      if(step >= imgInfo.length ){
        setStep(0)
      }
      if(step < 0 ){
        setStep(imgInfo.length - 1)
      }
    }, [step])

    let slider = document.querySelectorAll('.slider');

    const prevStep = () => setStep(step - 1);
    const nextStep = () => setStep(step + 1);

    const renderStep = () => {
        switch (step) {
            case 0:
                slider.forEach(elemento => {
                    elemento.style.left = '0%';
                });
                break;
            case 1:
                slider.forEach(elemento => {
                    elemento.style.left = '-100%';
                });
                break;
            case 2:
                slider.forEach(elemento => {
                    elemento.style.left = '-200%';
                });
                break;
            case 3:
                slider.forEach(elemento => {
                    elemento.style.left = '-300%';
                });
                break;
            case 4:
                slider.forEach(elemento => {
                    elemento.style.left = '-400%';
                });
                break;
            case 5:
                setStep(0)
                break;
    };
    }

    function pauseVideo() {
        if (window.player) {
          window.player.pauseVideo();
        }
      }


  return (
    <>
        { imgInfo.length > 1 && <button  className='slider_btt slider_btt_back' onClick={prevStep} ><span className="material-symbols-rounded slider_btt_icon">arrow_back_ios</span></button>}
        <section className='slider'>
        
        {imgInfo.map((img, i) => (
            img.url.includes('cloudinary') ? (
                <figure className='slide' key={i}>
                <img className='slide_img' src={img.url} alt={img.alt} />
                </figure>
            ) : (
                <div 
                className='slide'><iframe
                style={{ width: '80%', height: '85%'}}
                key={i}
                src={img.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                />
                </div>
            )
        ))}
        
        </section>
        { imgInfo.length > 1 && <button  className='slider_btt slider_btt_next' onClick={nextStep} ><span className="material-symbols-rounded slider_btt_icon">arrow_forward_ios</span></button>}
    </>
  )
}
