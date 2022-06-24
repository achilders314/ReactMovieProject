import Hero from './Hero'
// import Link from 'react';
//TMDB API Key b0a866768c2042164cb773a7192214df
//Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=b0a866768c2042164cb773a7192214df&language=en-US&query=star%20wars&page=1&include_adult=false
const MovieCard = ({movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`
  const movieDesc = movie.overview;
  const previewDesc = movieDesc.substring(0, 80);
  // const unavailableUrl = 

  return(
    <div className="card m-3">
      {movie.poster_path  && 
        <img className="card-img-top" src={posterUrl} alt={movie.title} />
      }
      {!movie.poster_path &&
        <img className="card-img-top" src="https://i.ibb.co/1XVPVR4/image-unavailable.png" alt="No Preview Available" />
      }
      {movie &&
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          {previewDesc &&
          <p className="card-text">{previewDesc}...</p>
          }
          {!previewDesc &&
          <p className="card-text">No description available.</p>
          }
          <a href={detailUrl} className="btn btn-primary">See more details  </a>
       </div>
      }
      {!movie &&
        <div className="lead error-not-found">
          <p>Hmm...there seem to be no movies with that name.</p>
          <a href="https://www.wikihow.com/Write-a-Screenplay" target="_blank" rel="noreferrer">Maybe consider writing your own?</a>
        </div>
      }

    </div>
  );
}


const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for "${keyword}"`
    
    const resultsHtml = searchResults.map((obj, i) => {
      return (
        <div key={i}>
        {obj &&
           <MovieCard movie={obj} />
        }
        </div>

      )
    })
    
    if(title!==null){
    return(
      <>
        <Hero text={title} />
        {resultsHtml &&
          <div className="d-flex flex-wrap justify-content-around my-4">
              {resultsHtml}
          </div>
        }
      </>
    )
  }
    if(keyword==="") {
      <>
        <Hero text="No result" />
        <div>There was no search result</div>
      </>
    }
  }

  export default SearchView;