import avart1 from './images/avatar-1.png'
import quoteLeft from './images/quote-left.png'

const reviews = [
  { avatar: avart1, name: 'Milton Austin', profession: 'Product Manager, Slack', comment: 'I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them again and would recommend them to anyone else looking for a designer and developer. They know their stuff!' },
  { avatar: avart1, name: 'Milton Austin', profession: 'Product Manager, Slack', comment: 'I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them again and would recommend them to anyone else looking for a designer and developer. They know their stuff!' }
]

const Testimonials = () => {

  return (
    <section className='clients-view' id='testimonials'>
      <h2>What our clients say about us</h2>

      <div className='split-cv'>

        {
          reviews.map((review, i) => (
            <div key={i} className='split-cv-content'>
              <img src={quoteLeft} alt='Icon' />

              <div>
                <p>{review.comment}</p>

                <div className='split-avatar'>
                  <img src={review.avatar} alt='Icon' />
                  <div>
                    <p className='fw-b'>{review.name}</p>
                    <p className='fs-xs fs-xs-clr fw-sb'>{review.profession}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Testimonials