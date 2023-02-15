import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Error, Loader } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
import TopSongs from "../components/TopSongs";
import ArtistDetailsHeader from "../components/ArtistDetailsHeader";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);
  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
  if (error) return <Error />;

  const data = artistData?.data?.[0];
  const topSongsArray = artistData?.data?.[0]?.views["top-songs"]?.data;
  return (
    <div className="flex flex-col">
      <ArtistDetailsHeader artistData={data} />
      <h2 className="font-bold text-3xl text-white my-4">Top Songs:</h2>
      {data?.views["top-songs"]?.data?.map((song, i) => {
        return (
          <TopSongs
            i={i}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            artistId={artistId}
            topSongsArray={topSongsArray}
          />
        );
      })}
    </div>
  );
};

export default ArtistDetails;
