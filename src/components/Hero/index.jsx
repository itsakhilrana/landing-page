import hands from './images/hands.png'
import forwardArrow from './images/forward-arrow.png'


const Hero = () => {
  return (
    <section className='hero-section' id="home">
      <div className='container-hs'>
        <h1>Let’s create something great together.</h1>
        <a href="tel:+916239044521" className='call-btn'>
          <p >BOOK A FREE CALL</p>
          <img src={forwardArrow} alt='Icon' />
        </a>
      </div>

      <img src={hands} alt='Hands' />
    </section>
  )
}

export default Hero