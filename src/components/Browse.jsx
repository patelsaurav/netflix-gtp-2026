
import Headers from './Header'
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { SecondoryContainer } from './SecondoryContainer';

const Browse = () => {

    console.log("we are heredfs")
    useNowPlayingMovies();

    return (
        <div>
            <Headers />

            <MainContainer />
            <SecondoryContainer />
        </div>
    );
};
export default Browse;
