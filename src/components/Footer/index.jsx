import email from './images/email.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import googlePlus from './images/google-plus.png'


const Footer = () => {
  return (
    <footer id='contact-us'>

      <div className='split-fr mb'>

        <div className='split-fr-content'>
          <h2 className='mb'>Dsgnr.</h2>
          <p className='mb'>Dsgnr. is an award winning creative and design agency based in New York, USA.</p>

          <a className='email-btn' href='mailto:info@dsgnr.com'>
            <img src={email} alt='Icon' />
            <p>info@dsgnr.com</p>
          </a>
        </div>

        <div className='split-fr-content split-section-refs'>
          <div>
            <p className='fw-b mb'>What We Do</p>
            <div className='refs-links'>
              <a href='#home'>Home</a>
              <a href='#intro'>Intro</a>
              <a href='#work'>Work</a>
              <a href='#contact-us'>Contact Us</a>
            </div>
          </div>

          <div>
            <p className='fw-b mb'>Who We Are</p>
            <div className='refs-links'>
              <a href='#intro'>About</a>
              <a href='#testimonials'>Testimonials</a>
            </div>
          </div>
        </div>
      </div>

      <div className='fr-links'>
        <div>
          <p className='pointer'>Privacy Policy</p>
          <p className='pointer'>Terms</p>
        </div>

        <div>
          <img className='pointer' src={twitter} alt='Icon' />
          <img className='pointer' src={facebook} alt='Icon' />
          <img className='pointer' src={googlePlus} alt='Icon' />
        </div>
      </div>

    </footer>
  )
}

export default Footer