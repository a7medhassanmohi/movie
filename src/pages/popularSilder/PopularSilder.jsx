import React, { useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  commingMovie,
  commingTv,
  getPopularMovie,
  getPopularTv,
} from "../../redux/actions/movie.action";
import "./popular.scss";
import apiConfig from "../../redux/api/apiConfig";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
SwiperCore.use([Autoplay]);
function PopularSilder({ cat, api }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popularMovie = useSelector((state) => state.movieReducer.popular);
  const comminggMovie = useSelector((state) => state.movieReducer.comming);
  const popularTv = useSelector((state) => state.tvReducer.Popular);
  const commmingTv = useSelector((state) => state.tvReducer.comming);
  useEffect(() => {
    if (cat == "Popular Movies") {
      dispatch(getPopularMovie());
    }
    if (cat == "TV Movies") {
      dispatch(getPopularTv());
    }
    if (cat == "Coming Movies") {
      dispatch(commingMovie());
    }
    if (cat == "Coming Tv") {
      dispatch(commingTv());
    }
  }, []);
  return (
    <div className="popular_silder">
      <div className="tiltle_">
        <h5>{cat}</h5>

        <button
          onClick={() =>
            cat == "Coming Tv" || cat == "TV Movies"
              ? navigate("/tv")
              : navigate("/movie")
          }
        >
          {" "}
          show All{" "}
        </button>
      </div>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {api == "popularMovie"
          ? popularMovie.map((it, i) => {
              return (
                <SwiperSlide key={it.id}>
                  {({ isActive }) => (
                    <div
                      className="wrap"
                      onClick={() => navigate(`/movie/${it.id}`)}
                    >
                      <div className="img">
                        <img
                          src={apiConfig.w500Image(
                            it.poster_path ? it.poster_path : it.backdrop_path
                          )}
                          alt=""
                        />
                        <div className="overlay">
                          <AiFillYoutube />
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })
          : api == "popularTv"
          ? popularTv.map((it, i) => {
              return (
                <SwiperSlide key={it.id}>
                  {({ isActive }) => (
                    <div
                      className="wrap"
                      onClick={() => navigate(`/tv/${it.id}`)}
                    >
                      <div className="img">
                        <img
                          src={apiConfig.w500Image(
                            it.poster_path ? it.poster_path : it.backdrop_path
                          )}
                          alt=""
                        />
                        <div className="overlay">
                          <AiFillYoutube />
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })
          : api == "commingMovie"
          ? comminggMovie.map((it, i) => {
              return (
                <SwiperSlide key={it.id}>
                  {({ isActive }) => (
                    <div
                      className="wrap"
                      onClick={() => navigate(`/movie/${it.id}`)}
                    >
                      <div className="img">
                        <img
                          src={apiConfig.w500Image(
                            it.poster_path ? it.poster_path : it.backdrop_path
                          )}
                          alt=""
                        />
                        <div className="overlay">
                          <AiFillYoutube />
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })
          : api == "commingtv"
          ? commmingTv.map((it, i) => {
              return (
                <SwiperSlide key={it.id}>
                  {({ isActive }) => (
                    <div
                      className="wrap"
                      onClick={() => navigate(`/tv/${it.id}`)}
                    >
                      <div className="img">
                        <img
                          src={apiConfig.w500Image(
                            it.poster_path ? it.poster_path : it.backdrop_path
                          )}
                          alt=""
                        />
                        <div className="overlay">
                          <AiFillYoutube />
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })
          : undefined}
      </Swiper>
    </div>
  );
}

export default PopularSilder;
