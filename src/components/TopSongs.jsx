import React from "react";
import PlayPauseArtist from "./PlayPauseArtist";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const TopSongs = ({
  song,
  artistId,
  isPlaying,
  activeSong,
  i,
  topSongsArray: data,
}) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e]  py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={song.attributes.artwork.url}
          alt={song.attributes.name}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <p className="text-xl font-bold text-white">
            {song?.attributes?.name}
          </p>
        </div>
      </div>
      <PlayPauseArtist
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </div>
  );
};

export default TopSongs;
