import Hero from './Hero'

const Home = () => {
    return(
      <>
        <Hero text="Welcome to React 201" /><div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Home;