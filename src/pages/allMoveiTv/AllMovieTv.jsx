import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import "./all.scss";
import {
  getPopularMovie,
  getPopularTv,
  getTrendMovie,
  serachMovie,
  serachTv,
} from "../../redux/actions/movie.action";
import apiConfig from "../../redux/api/apiConfig";

function AllMovieTv() {
  const { pathname } = useLocation();
  const { cat } = useParams();
  const navigate = useNavigate();
  const [allItemM, setallItemM] = useState([]);
  const [allItemTv, setallItemTv] = useState([]);
  const [pageM, setpageM] = useState(1);
  const [pageT, setpageT] = useState(1);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname == "/tv" || pathname == "/movie") {
      setsearch("");
      setpageM(1);
      setpageT(1);
    }
  }, [pathname]);

  useEffect(() => {
    if (cat == "tv") {
      if (search.length > 0) {
        dispatch(serachTv(search, setallItemTv));
      } else {
        dispatch(
          getPopularTv(setallItemTv, allItemTv, pageT, setallItemM, setpageM)
        );
      }
    } else if (cat == "movie") {
      if (search.length > 0) {
        dispatch(serachMovie(search, setallItemM));
      } else {
        dispatch(getPopularMovie(setallItemM, allItemM, pageM, setallItemTv));
      }
    }
  }, [cat, pageT, pageM, search]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cat]);

  const increasepage = () => {
    if (cat == "tv") {
      setpageT((prev) => prev + 1);
      setpageM(1);
    } else if (cat == "movie") {
      setpageM((prev) => prev + 1);
      setpageT(1);
    }
  };

  return (
    <div className="allitem">
      <div className="search">
        <input
          placeholder="Search"
          onChange={(e) => setsearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="content">
        <h4 className="title">All {cat}</h4>
        <div className="item_content">
          {cat == "tv"
            ? allItemTv?.map((it) => {
                return (
                  <div
                    className="item"
                    key={it.id + Math.random() * 10000}
                    onClick={() =>
                      cat == "tv"
                        ? navigate(`/tv/${it.id}`)
                        : navigate(`/movie/${it.id}`)
                    }
                  >
                    <img
                      src={apiConfig.w500Image(
                        it?.poster_path ? it?.poster_path : it?.backdrop_path
                      )}
                      alt=""
                    />
                    <h6>{it?.title || it?.name}</h6>
                  </div>
                );
              })
            : allItemM?.map((it) => {
                return (
                  <div
                    className="item"
                    key={it.id + Math.random() * 10000}
                    onClick={() =>
                      cat == "tv"
                        ? navigate(`/tv/${it.id}`)
                        : navigate(`/movie/${it.id}`)
                    }
                  >
                    <img
                      src={apiConfig.w500Image(
                        it?.poster_path ? it?.poster_path : it?.backdrop_path
                      )}
                      alt=""
                    />
                    <h6>{it?.title || it?.name}</h6>
                  </div>
                );
              })}
        </div>
      </div>

      {search.length > 0 ? undefined : (
        <span onClick={() => increasepage()}>Show More</span>
      )}
    </div>
  );
}

export default AllMovieTv;
