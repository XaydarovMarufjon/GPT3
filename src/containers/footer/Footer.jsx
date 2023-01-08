import React from 'react'
import "./footer.css"
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer'>
      <div className='gpt3__footer-heading'>
       <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Reaquest early Access</p>
      </div>

      <div className='gpt3__footer-links '>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt="" />
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Telegram</p>
          <p>Instagram</p>
          <p>Channel IT</p>
          <p>Marvell IT group</p>
        </div> 
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Marvell IT Academy</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Tashkent , Uzbekistan</p>
          <p>88 242 99 99</p>
          <p>marvell.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© {new Date().getFullYear()} GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer