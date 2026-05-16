import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackGround } from "./VideoBackGround.jsx";


const MainContainer = () => {

    const movies = useSelector(store => {
        return store.movie?.nowPlayingMovie;
    })

    if (!movies) return;


    const mainMovie = movies[0]

    const { original_title, overview, id } = mainMovie
    console.log("🚀 ~ MainContainer ~ movie:", mainMovie)
    return <div className="relative">

        <VideoBackGround movie_id={id} />
        <VideoTitle title={original_title} overview={overview} />

    </div>
}


export default MainContainer;