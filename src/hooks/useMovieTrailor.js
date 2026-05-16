import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constant';
import { addTailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';


const useMovieTrailor = async (movie_id) => {
    const dispatch = useDispatch();
    const fetchTrailerVideo = async () => {

        const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
        let data = await fetch(url, API_OPTION)

        const json = await data.json();
        console.log("json", json)

        let tailer = json.results.filter((video) => {

            if (video.type == "Trailer") {
                return video;
            }
        })
        dispatch(addTailerVideo(tailer))
    }


    useEffect(() => {
        fetchTrailerVideo();
    }, [])
}

export default useMovieTrailor;