
import Card from '../Card/Card.jsx';
import { useFetch } from '../../Hooks/useFetch.js';

function Home() {
  

  return (
    <div className='d-flex flex-wrap mt-5'>
    
      {data.length > 0 ? data.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      )) : ''}
    
    

  </div>
  )
}

export default Home