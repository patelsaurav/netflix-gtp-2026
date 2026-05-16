import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'


export const SecondoryContainer = () => {
    const movieList = useSelector((store) => store.movie)
    console.log("🚀 ~ SecondoryContainer ~ movieList:", movieList)

    return (
        <div className="overflow-x-hidden">

            <MovieList movies={movieList.nowPlayingMovie} />

            <MovieList movies={movieList.nowPlayingMovie} />

            <MovieList movies={movieList.nowPlayingMovie} />

            <MovieList movies={movieList.nowPlayingMovie} />
        </div>

    )
}
