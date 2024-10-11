import React from 'react'
import Card from '../Card/Card.jsx';
import { useFetch } from '../../Hooks/useFetch.js';
import styles from "./Movielist.module.css";

function Movielist({apiPath}) {
  
  let {data , loading} = useFetch(apiPath);
  
  return (
    <div className={`d-flex flex-wrap ${styles['main-content']}`}>
    
      { loading && <div id="loader" className="nfLoader"></div>}

      {data.length > 0 ? data.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      )) : ''}
  </div>
  )
}

export default Movielist