import Btn from '@/components/ui/Btn';
import { useState } from 'react';
import lorem from '@/components/data/lorem';


const GetInTouch = () => {
    const [form, setForm] = useState('preForm'),
          initTrans = () =>{
            const el = document.querySelector('#get-in-touch');
            el.style.cssText = "transition: 500ms ease all; opacity: 0; transform: translateY(-10px)";
            setTimeout(() =>{
                el.style.cssText = "transition: 500ms ease all; opacity: 1; transform: translateY(0px)";
            }, 1000);
            setTimeout(openForm, 750);
          },
          openForm = () => { setForm('openForm')};

return(
<section id="get-in-touch" className='py-6 px-4 h-[75vh] flex flex-col justify-center items-center transition-all'>
{form === 'preForm' && (
    <div className='max-w-3xl flex flex-col justify-center items-center'>
        <h3>
            <span className="highlight">Get in touch</span><br/> with Lorem
        </h3>
        <p className='pb-4 md:pb-8'>
        I’m free to chat if you need help with a projedt, or just need professional consultation.
        </p>
        <Btn variant='primary' onClick={() => {initTrans()}} tooltip={{shown: true, img: '', txt: 'come say hello ☕', offset: -60}}>Contact me now</Btn>
    </div>
)}
{form === 'openForm' && (
    <div className='max-w-3xl flex flex-col justify-center items-center'>
    <div>

    </div>
        <div>
        <h3>
            Sounds Good<br/> <span className="highlight"> Let's talk!</span>
        </h3>    
        <p>I'm more than ready to help you out, so reach out! <br/>
        Send a mail or text, and I'll get back to you as fast as possible! <br />
        
        <a className="mt-2 inline-block" href={`sms:${lorem.contact.phone.countryCode + lorem.contact.phone.number}`} title='Call Lorem Ipsum'>
        <svg className="w-4 inline-flex fill-primary-dark m-2 pb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M68.4 14.8l-39 10.6C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l10.6-39C273.2 416.4 95.6 238.8 68.4 14.8zM505.7 412.3l4.9-17.8c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6l-25.1 30.7c55.4 33.4 118.4 55.4 185.8 62.9zM162.6 192.1L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2L99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8z"/></svg>
            {`${ navigator.language === "da-DK" ? '' : lorem.contact.phone.countryCode} ${lorem.contact.phone.number} `}</a>
        <a className="mt-2 ml-3 inline-block" href={`mailto:${lorem.contact.mail}`} title="Send an e-mail to Lorem Ipsum">
        <svg className="w-4 inline-flex fill-primary-dark m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            {`${lorem.contact.mail}`}</a>
        </p>        
        </div>
    </div>
)}
</section>
)
}

export default GetInTouch;