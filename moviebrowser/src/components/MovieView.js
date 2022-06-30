import Hero from './Hero'
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'


const MovieView = () => {
    let id = JSON.parse(localStorage.getItem('movieID'));
    
    const [movieDetails, setMovieDetails] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=b0a866768c2042164cb773a7192214df&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovieDetails(data);
                setIsLoading(false);
            })
        }, [id]);

        function renderMovieDetails() {
            if(isLoading) {
                return <Hero text="Loading..." />
            }
            if(movieDetails) {
                const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
                const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;


                return (
                   <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                {movieDetails.poster_path &&
                                <img src={posterPath} alt="Movie Poster" className="img-fluid shadow rounded"/>
                                }
                                {!movieDetails.poster_path &&
                                <img src="https://i.ibb.co/1XVPVR4/image-unavailable.png" alt="No Preview Found" className="img-fluid shadow rounded"/>
                                }
                            </div>
                            <div className="col-md-9">
                                <h2 className="movie-title">{movieDetails.original_title}</h2>
                                <p className='movie-details'>Movie Synopsis: {movieDetails.overview}</p>
                                <p className='movie-details'>Genres: {movieDetails.genres[0].name}</p>
                                <p className='movie-details'>Production Companies: {movieDetails.production_companies[0].name}</p>
                                <p className='movie-details'>Release Date: {movieDetails.release_date}</p>
                                <p className='movie-details'>Run Time: {movieDetails.runtime} minutes</p>
                                <p className='movie-details'>Budget: ${movieDetails.budget.toLocaleString("en-US")}</p>
                                <p className='movie-details'>Revenue: ${movieDetails.revenue.toLocaleString("en-US")}</p>
                            </div>

                        </div>
                    </div>
                   </>
                )
            }
        }
    
     return renderMovieDetails();
  };

  export default MovieView;