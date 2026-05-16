import React from 'react'

export const MovieCard = ({ movie }) => {
    console.log("🚀 ~ MovieCard ~ movie:", movie)
    let constant = `https://image.tmdb.org/t/p/w500`
    return (
        <div className="flex-shrink-0 w-[160px] h-[230px] m-2 overflow-hidden rounded-md shadow-sm"><img className="w-full h-full object-cover" src={constant + movie.poster_path} alt={movie.title || "Movie Poster"} /></div>
    )
}
