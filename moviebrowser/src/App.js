import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound404 from './components/NotFound404';
import { Routes, Route } from 'react-router-dom';


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
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/search" 
                 element={<SearchView 
                 keyword={searchText} 
                 searchResults={searchResults} />} />
          {setSearchResults &&
          <Route path="/movies/:id" element={<MovieView />} />
          }
          <Route path="/*" component={<NotFound404 />} />
      </Routes>
    
    </div>
  );
}

export default App;
