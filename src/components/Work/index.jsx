import { useState } from 'react';
import img1 from './images/img-1.png';
import img2 from './images/img-2.png';
import img3 from './images/img-3.png';
import img4 from './images/img-4.png';
import img5 from './images/img-5.png';
import img6 from './images/img-6.png';
import img7 from './images/img-7.png';

const workImages = [img1, img2, img3, img4, img5, img6, img7, img1]

const listItems = ['All', 'Branding', 'Illustration', 'Product Design']

const Work = () => {

  const [selectedTab, setSelected] = useState(0)

  const tabHandler = (i) => {
    setSelected(i)
  }

  return (
    <section className='work-section' id='work'>

      <div className='heading-ws'>
        <h2>Our Work So Far</h2>

        <ul>
          {listItems.map((item, i) => <li key={i} className={selectedTab === i ? 'fs-xs fw-b pointer' : 'fs-xs fw-b fs-xs-clr pointer'} onClick={() => tabHandler(i)}>{item}</li>)}
        </ul>
      </div>

      <div className='split-ws'>
        {workImages.map((img, i) => <img key={i} src={img} alt='Designs' />)}
      </div>

    </section>
  )
}

export default Work