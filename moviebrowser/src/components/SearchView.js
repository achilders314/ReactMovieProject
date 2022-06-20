import Hero from './Hero'
//TMDB API Key b0a866768c2042164cb773a7192214df
//Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=b0a866768c2042164cb773a7192214df&language=en-US&query=star%20wars&page=1&include_adult=false

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    console.log(searchResults, "are the search results");
    return(
      <>
        <Hero text={title} />
      </>
    )
  }

  export default SearchView;