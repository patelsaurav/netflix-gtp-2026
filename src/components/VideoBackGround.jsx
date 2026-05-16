import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

export const VideoBackGround = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movie?.tailer);

  useMovieTrailor(movie_id);

  const videoKey = trailerVideo?.[0]?.key;

  return (
    <div className="relative h-[500px] z-0">
      {videoKey && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}&controls=0&showinfo=0&rel=0`}
          title="YouTube video player"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};