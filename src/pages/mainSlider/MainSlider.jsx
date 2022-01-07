import React, { useEffect } from "react";
import "./slider.scss";
import apiConfig from "../../redux/api/apiConfig";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTrendMovie } from "../../redux/actions/movie.action";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Autoplay]);
function MainSlider() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const trendMovie = useSelector((state) => state.movieReducer.trending);
  useEffect(() => {
    dispatch(getTrendMovie());
  }, []);
  return (
    <div className="home_slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {trendMovie.map((it, i) => {
          return (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className="movie"
                  style={{
                    backgroundImage: `url(${apiConfig.originalImage(
                      it.poster_path ? it.poster_path : it.backdrop_path
                    )})`,
                  }}
                  onClick={() => (
                    navigate(`/movie/${it.id}`), window.scrollTo(0, 0)
                  )}
                >
                  <div className="wrap">
                    <div className="poster">
                      <img
                        src={apiConfig.w500Image(
                          it.poster_path ? it.poster_path : it.backdrop_path
                        )}
                        alt=""
                        className={isActive ? "active" : ""}
                      />
                    </div>
                    <div className="info">
                      <h2 className={isActive ? "active" : ""}>
                        {it.original_title}
                      </h2>
                      <p className={isActive ? "active" : ""}>{it.overview}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MainSlider;
