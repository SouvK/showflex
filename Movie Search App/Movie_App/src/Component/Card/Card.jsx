import React from 'react'
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
import backup from '../../assets/Images/backup.jpg';
function Card({movie}) {
    const {original_title,overview,poster_path ,id}= movie;
    let MovieImage = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backup;

  return (
    <>
        <div className="col-md-3 mb-5">
            <div className={`card h-100 mx-auto ${styles['img']}`} style={{width : 400}}>
                <Link to={`movie/${id}`}>
                    <img className={`card-img-top w-100 `} src={MovieImage} alt="Card image" style={{width:100}}/>
                </Link>
                <div className="card-body">
                    <Link to={`movie/${movie.id}`}>
                        <h4 className={`card-title ${styles['removeLinKline']}`}>{original_title}</h4>
                    </Link>
                    <p className="card-text">{overview}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;