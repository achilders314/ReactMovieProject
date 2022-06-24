import Hero from './Hero'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'


const MovieView = () => {
    const {id} = useParams()

    const [movieDetails, setMovieDetails] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('make an api request')
    
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b0a866768c2042164cb773a7192214df&language=en-US`)
            .then(response =>response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
        }, [id])

        function renderMovieDetails() {
            if(isLoading) {
                return <Hero text="Loading..." />
            }
            if(movieDetails) {
                //TODO: Deal with possible missing image
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
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">{movieDetails.overview}</p>
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