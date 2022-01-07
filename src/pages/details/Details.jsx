import React, { useEffect, useLayoutEffect, useState } from "react";
import apiConfig from "../../redux/api/apiConfig";
import "./details.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getitemdcastMovie,
  getitemdcastTv,
  getitemdetailsMovie,
  getitemdetailsTv,
  getitemdsimilarMovie,
  getitemdsimilarTv,
  getitemdvideoMovie,
  getitemdvideoTv,
} from "../../redux/actions/movie.action";
import { useParams } from "react-router-dom";

function Details() {
  const navigate = useNavigate();

  const { cat, id } = useParams();
  const getcast = useSelector((state) => state.movieReducer.casts.cast);
  const popularMovie = useSelector((state) => state.movieReducer.popular);
  const [castsss, setcasts] = useState({});
  const [video, setvideo] = useState(null);
  const [similar, setsimilar] = useState([]);
  const [details, setdetails] = useState(null);

  const generMovie = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie   ",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  const genertv = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy ",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (cat == "movie") {
      dispatch(getitemdetailsMovie(id, setdetails));
      dispatch(getitemdcastMovie(id, setcasts));
      dispatch(getitemdvideoMovie(id, setvideo));
      dispatch(getitemdsimilarMovie(id, setsimilar));
    } else if (cat == "tv") {
      dispatch(getitemdetailsTv(id, setdetails));
      dispatch(getitemdcastTv(id, setcasts));
      dispatch(getitemdvideoTv(id, setvideo));
      dispatch(getitemdsimilarTv(id, setsimilar));
    }
  }, [cat, id]);
  // console.log(castsss);
  console.log(video);
  // console.log(similar);
  // console.log(details);
  return (
    <div className="details_">
      <div
        className="wraper"
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            details?.poster_path ? details?.poster_path : details?.backdrop_path
          )})`,
        }}
      ></div>
      <div className="content">
        <div className="img">
          <img
            src={apiConfig.w500Image(
              details?.poster_path
                ? details?.poster_path
                : details?.backdrop_path
            )}
            alt=""
          />
        </div>
        <div className="content_">
          <h2>{details?.title ? details?.title : details?.name}</h2>
          <div className="genre">
            {details?.genre_ids?.map((it) => (
              <span key={it}>{cat == "tv" ? genertv[it] : generMovie[it]}</span>
            ))}
          </div>
          <p className="des"> {details?.overview}</p>
          <div className="casts">
            <h4>Casts</h4>
            <div className="img">
              {castsss?.cast?.slice(0, 5).map((it) => {
                return (
                  <img
                    key={it.id}
                    src={apiConfig.w500Image(
                      it?.profile_path ? it?.profile_path : undefined
                    )}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {video?.results?.length > 0 ? (
        <div className="video">
          <h4>Videos</h4>
          {video.results.map((it) => {
            return (
              <div className="item" key={it.id}>
                <iframe
                  src={`https://www.youtube.com/embed/${it.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
      ) : (
        <h6> no video available</h6>
      )}

      <div className="similar">
        <h4>Similar {cat}</h4>
        <div className="imges">
          {similar.slice(0, 10).map((it) => {
            return (
              <img
                key={it.id}
                src={apiConfig.w500Image(
                  it?.poster_path ? it?.poster_path : it?.backdrop_path
                )}
                onClick={() =>
                  cat == "tv"
                    ? (navigate(`/tv/${it.id}`), window.scrollTo(0, 0))
                    : (navigate(`/movie/${it.id}`), window.scrollTo(0, 0))
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
