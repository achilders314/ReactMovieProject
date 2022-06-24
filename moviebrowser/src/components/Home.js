import Hero from './Hero'

const Home = () => {
    return(
      <>
        <Hero text="Welcome to Movie Database" /><div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5 text-center'>
              <p className='lead'>
              Your first and only stop for all of the latest movie details. 
              </p>
              <img src="https://i.ibb.co/L90NsGD/sticker.png" alt="Movie watcher with popcorn" className="bitmojiImages"/>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Home;