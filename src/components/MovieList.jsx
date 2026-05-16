import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({ movies }) => {
    console.log("🚀 ~ MovieList ~ movies:", movies)
    return (
        <>
            <div>Now playing movie</div>
            <div className='flex overflow-x-scroll'>

                {movies && movies.map((movie) => {

                    return <MovieCard movie={movie} />

                })}
            </div>

        </>

    )
}
