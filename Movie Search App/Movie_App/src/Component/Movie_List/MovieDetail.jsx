import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import backup from "../../assets/Images/backup.jpg";
const MovieDetail = () => {
  let MovieID = useParams();
  let [movie , setMovie] = useState([{}]);
  let url = `https://api.themoviedb.org/3/movie/${MovieID.id}?api_key=2647f2432d1e501d466739a0116d7cab`;
  let image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backup;
  useEffect(()=>{
   
    async function MovieDetails(){
      let rawData = await fetch(url);
      let jsondata = await rawData.json();
      setMovie(jsondata);
    }
    MovieDetails();
  },[]);
  return (
    <div className='row ms-5'>
            <div className='col-md-4 my-5'>
              <img src={image} alt={movie.title}/>
            </div>
          <div className='col-md-6 my-5'>
            <p className='h1'>{movie.title}</p>
            <p className='h6'>{movie.overview}</p>
            <div className='d-flex flex-wrap gap-3'>
              {movie.genres ? movie.genres.map((genres)=>(
                  <span key={genres.id} className='border rounded my-4 p-2'>{genres.name}</span>
              )) : ''}
          </div>
              <div className='d-flex'>
                    <span> ⭐ {movie.vote_count} reviews</span>
              </div>
              { loading && <div id="loader" className="nfLoader"></div>}
              <p className='my-3'>
                <span>Review : </span>
                <span>{movie.runtime}</span>
              </p>
              <p className='my-3'>
                <span>Budget : </span>
                <span>{movie.budget}</span>
              </p>
              <p className='my-3'>
                <span>Runtime : </span>
                <span>{movie.runtime}</span>
              </p>
              <p className='my-3'>
                <span>Release Date : </span>
                <span>{movie.release_date}</span>
              </p>
              <p className='my-3'>
                <span>Revenue : </span>
                <span>{movie.revenue}</span>
              </p>
              <p className='my-3'>
                <span>IMDB : </span>
                <a href='#' target="_blank">{movie.imdb_id}</a>
              </p>
          </div>
    </div>

  )
}

export default MovieDetail