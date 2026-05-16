import { useEffect } from 'react';
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';



const useNowPlayingMovies = () => {


    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const dispatch = useDispatch()

    const nowPlayingMovie = async () => {
        fetch(url, API_OPTION)
            .then(res => res.json())
            .then(json => { console.log(json.results); dispatch(addNowPlayingMovie(json.results)) }

            )
            .catch(err => console.error(err));
    }


    useEffect(() => {
        nowPlayingMovie()
    }, [])
}


export default useNowPlayingMovies;