import React from 'react'
import { Routes , Route } from 'react-router-dom';
import MovieDetail from '../Movie_List/MovieDetail';
import Movielist from "../Movie_List/Movielist";
import Search from '../Movie_List/Search';
import PageNotFound from '../Movie_List/PageNotFound';

function Routingrule() {
  return (
    <>
   <Routes>
        <Route path='/' element={<Movielist apiPath = "movie/now_playing"/>}></Route>
        <Route path='movie/:id' element={<MovieDetail/>}></Route>
        <Route path='/popular' element={<Movielist apiPath = "movie/popular"/>}></Route>
        <Route path='/top-rated' element={<Movielist apiPath = "movie/top_rated"/>}></Route>
        <Route path='/upcoming' element={<Movielist apiPath = "movie/upcoming"/>}></Route>
        <Route path='/search' element={<Search apiPath="search/movie"/>}></Route>
        <Route path='/search/movie/:id' element={<MovieDetail />}></Route>
        <Route path='/popular/movie/:id' element={<MovieDetail />}></Route>
        <Route path='/top-rated/movie/:id' element={<MovieDetail />}></Route>
        <Route path='/upcoming/movie/:id' element={<MovieDetail />}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
   </Routes>
   </>
  )
}

export default Routingrule