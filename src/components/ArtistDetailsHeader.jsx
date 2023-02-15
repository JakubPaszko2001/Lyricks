import { Link } from "react-router-dom";
const ArtistDetailsHeader = ({ artistId, artistData }) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 my-8" />
      <div className="absolute inset-0 flex items-center">
        <img
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          src={artistData?.attributes?.artwork?.url.replace("{w}", "500")}
          alt="arttist portrait"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistData?.attributes?.name}
          </p>
          <p className="text-base text-gray-400 mt-2">
            {artistData?.attributes?.origin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetailsHeader;
