import sideImg from './images/side-image.png';


const Overview = () => {
  return (
    <section className='overview-section'>

      <div className='split-os'>

        <img src={sideImg} alt='Design' />

        <div>
          <h2>A simple, yet effective three step process.</h2>

          <div className='steps'>
            <p className='fw-b'>Idea Initiation</p>
            <p className='fs-xs fs-xs-clr fw-sb'>For a start, we’ll uncover what makes you stand apart and creatively position your brand and business.</p>
          </div>

          <div className='steps'>
            <p className='fw-b'>Idea Initiation</p>
            <p className='fs-xs fs-xs-clr fw-sb'>For a start, we’ll uncover what makes you stand apart and creatively position your brand and business.</p>
          </div>

          <div className='steps'>
            <p className='fw-b'>Idea Initiation</p>
            <p className='fs-xs fs-xs-clr fw-sb'>For a start, we’ll uncover what makes you stand apart and creatively position your brand and business.</p>
          </div>
        </div>

      </div>

      <div className='text-center'>
        <p>Wherever you are in your  journey, we’d love to hear from you. <a className='fw-b underline-text' href="tel:+9041244532">Book a free call</a></p>
      </div>
    </section>
  )
}

export default Overview