import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
// import NotFound404 from './components/NotFound404';
import { Routes, Route, Navigate} from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b0a866768c2042164cb773a7192214df&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
      })
    }
  }, [searchText]);
  


  return (
    <div>
      <Navbar searchText={searchText}
              setSearchText={setSearchText} />
      <Routes>
          <Route exact path="/react_movie_app/" element={<Home />} />
          <Route path="/react_movie_app/about" element={<AboutView />} />
          <Route path="/react_movie_app/search" 
                 element={<SearchView 
                 keyword={searchText} 
                 searchResults={searchResults} />} />
          {setSearchResults &&
          <Route path="/react_movie_app/movies/:id" element={<MovieView />} />
          }
          {/* <Route path="/react_movie_app/404" element={<NotFound404 />} />
          <Route path="/react_movie_app/*" element={ <Navigate to="/404" />} /> */}
      </Routes>
    
    </div>
  );
}

export default App;
