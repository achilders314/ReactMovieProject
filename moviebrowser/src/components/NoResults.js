import Hero from './Hero'

const NoResults = () => {
    return(
      <>
        <Hero text="Error" /><div className='container'>
          <div className='row'>
            <div className="lead error-not-found">
                <p>Hmm...there seem to be no movies with that name.</p>
                <a href="https://www.wikihow.com/Write-a-Screenplay" target="_blank" rel="noreferrer">Maybe consider writing your own?</a>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default NoResults;