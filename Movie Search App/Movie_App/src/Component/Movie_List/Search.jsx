import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import { useFetch } from '../../Hooks/useFetch.js';
function Search({apiPath}) {
    // useSearch param is used to read and write a in the url of the current location 
    const [searchParams] = useSearchParams();
    let searchTerm = searchParams.get('q'); // over here q is the search term 
    let {data} = useFetch(apiPath , searchTerm);
  return (
    <>
    <section>
        {
            data.length === 0 
            ? <p className='h3 ms-5'>{`No Result Found For ${searchTerm}`}</p>
            : <p className='h3 ms-5'>{`Search Results for ${searchTerm}`}</p>
        }

    </section>
    <div className='d-flex flex-wrap mt-5'>
    
    {data.length > 0 ? data.map((movie)=>(
      <Card key={movie.id} movie={movie}/>
    )) : ''}

    </div>
    </>
  )
}

export default Search