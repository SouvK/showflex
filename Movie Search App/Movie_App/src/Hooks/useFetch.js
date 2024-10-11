import React, {useState , useEffect} from 'react'

export const useFetch = (apiPath , searchQuery="") => {
    const [data , setData ]= useState([]);
    const [loading ,setLoading] = useState(true);
    let url = `https://api.themoviedb.org/3/${apiPath}?api_key=2647f2432d1e501d466739a0116d7cab&query=${searchQuery}&language=en-US`;
    useEffect(()=>{
        try{
        async function fetchMovie() {
          const response = await fetch(url);
          let json = await response.json();
         
          setData(json.results);
          setLoading(false);
        }
        fetchMovie();
      }
      catch(error){
        setLoading(false);
      }
    },[url]);
  return {data , loading};
}
