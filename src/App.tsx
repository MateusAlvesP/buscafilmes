import {useEffect, useState} from 'react';

import MovieCard from './MovieCard';

import './App.css';

import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=294369d1';

type movieProps = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const App = () => {

  const [movies, setMovies] = useState<movieProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title: string) => {
    
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect( () => {
    searchMovies('Batman');
  }, []);

  const handleKeyDown = (e : React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm)
    }
  }

  return (
    <div className="app">
      <h1> Buscafilmes </h1>

      <div className='search'>
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          onKeyDown={handleKeyDown}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard Title={movie.Title} Year={movie.Year} imdbID={movie.imdbID} Type={movie.Type} Poster={movie.Poster}/>
            ))}            
          </div>
        ) : (
          <div className='empty'>
            <h2> No movies found </h2>
          </div>
        )

      }

      

    </div>
  );
}

export default App;