import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView'
import { Routes, Route } from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');


  


  return (
    <div>
      <Navbar searchText={searchText}
              setSearchText={setSearchText} />
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<AboutView />} />
          <Route path="/search" 
                 element={<SearchView 
                 keyword={searchText} 
                 searchResults={searchResults} />} />
      </Routes>
    
    </div>
  );
}

export default App;
