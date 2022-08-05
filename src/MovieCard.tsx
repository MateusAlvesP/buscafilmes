import React from 'react';

type movieProps = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const MovieCard = (props: movieProps) => {
  return (
    <div className="movie">
      <div>
        <p>{props.Year}</p>
      </div>

      <div>
        <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/400'} alt={props.Title}/>
      </div>

      <div>
        <span>
          {props.Type}
        </span>
        <h3>{props.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;