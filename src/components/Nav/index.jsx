import { useState } from 'react'

import hamburger from './images/hamburger.png'
import hamburgerClose from './images/hamburger-close.png'
import hamburgerYellow from './images/hamburger-yellow.png'

const whatWeDoLinks = [
  { name: 'Home', link: '#home' },
  { name: 'Intro', link: '#intro' },
  { name: 'Work', link: '#work' },
  { name: 'Contact Us', link: '#contact-us' },
]
const whoWeAreLinks = [
  { name: 'About', link: '#intro' },
  { name: 'Testimonials', link: '#testimonials' }
]

const Nav = () => {

  const [navToggler, setNavToggler] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const navHandler = () => {
    setNavToggler(prev => !prev)
  }

  const changeNavbarColor = () => {
    if (window.scrollY >= window.innerHeight) setColorchange(true);
    else setColorchange(false);
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
   <div>
     <div className={navToggler ? 'nav nav-active' : 'nav'}>
        <div className='split-fr-content split-section-refs nav-content'>
          <div>
            <p className='fw-b mb'>What We Do</p>
            <div className='refs-links'>
              {whatWeDoLinks.map((item, i) => <a key={i} href={item.link} onClick={navHandler}>{item.name}</a>)}
            </div>
          </div>

          <div>
            <p className='fw-b mb'>Who We Are</p>
            <div className='refs-links'>
              {whoWeAreLinks.map((item, i) => <a key={i} href={item.link} onClick={navHandler}>{item.name}</a>)}
            </div>
          </div>
        </div>

    </div>
    <div className={navToggler ? 'split-nav split-nav-active' : colorChange ? 'split-nav nav-color' : 'split-nav'}>
        <h3>Dsgnr.</h3>
        <img className='pointer' onClick={navHandler} src={navToggler ? hamburgerClose : colorChange ? hamburgerYellow : hamburger} alt='Icon' />
      </div>
   </div>
  )
}

export default Nav