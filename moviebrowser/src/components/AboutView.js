import Hero from './Hero'


const AboutView = () => {
    return(
      <>
        <Hero text="About Us"/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
              We are committed to bringing you all of the latest in movies. Use the search bar above to get started!
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default AboutView;