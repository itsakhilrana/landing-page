import searchImg from './images/search.png';
import briefCase from './images/briefcase.png';
import penTool from './images/pen-tool-2.png';
import scroll from './images/scroll.png'


const goodAt = [
  { name: 'EXCEPTIONAL DESIGN', img: penTool },
  { name: 'IN-DEPTH RESEARCH', img: searchImg },
  { name: 'PRODUCT MANAGEMENT', img: briefCase },
  { name: 'NO-CODE DEVELOPEMT', img: scroll },
]

const Description = () => {

  return (
    <section className='description-section' id='intro'>

      <div className='split-ds fs-s'>
        <div style={{ display: 'flex', justifyContent: 'flex-end', color: "#FDCA09" }}>
          <h1 style={{ fontSize: '3.5rem' }}>hello.</h1>
        </div>
        <div className='text-align-right'>
          <h2>Award winning agency specializing in creative design</h2>
        </div>
        <div className='align-items-start'>
          <p>We help businesses grow, launch products and build enduring relationships with our communities.</p>
          <a className='fw-b underline-text' href='#intro'>OUR INFO</a>
        </div>
      </div>

      <div className='split-ds fs-xs fw-b'>
        {
          goodAt.map((item, i) => (
            <div key={i}>
              <img src={item.img} alt='Icons' />
              <p>{item.name}</p>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Description