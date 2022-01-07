import constant from "../constant"
import tmdbApi from "../api/movieApi"


export const getTrendMovie = () => (dispatch) => {
    tmdbApi.getMoviesList("top_rated", {}).then((res) => {

        dispatch({ type: constant.GETTREND_MOVIE, payload: res.results })

    }).catch((e) => {
        console.log(e);
    })


}
export const getPopularMovie = (setallItem, allItem, page) => (dispatch) => {

    tmdbApi.getMoviesList("popular", {}, page).then((res) => {
        if (page > 1) {

            setallItem && setallItem((prev => [...prev, ...res.results]))
        } else {
            setallItem && setallItem(res.results)

        }

        dispatch({ type: constant.GETPOPULAR_MOVIE, payload: res.results })

    }).catch((e) => {
        console.log(e);
    })


}
export const commingMovie = () => (dispatch) => {
    tmdbApi.getMoviesList("upcoming", {}).then((res) => {
        dispatch({ type: constant.COmming_MOVIE, payload: res.results })

    }).catch((e) => {
        console.log(e);
    })


}
export const getPopularTv = (setallItem, allItem, page, setallItemM, setpageM) => (dispatch) => {
    tmdbApi.getTvList("popular", {}, page).then((res) => {

        if (page > 1) {

            setallItem && setallItem([...allItem, ...res.results])
            // setallItemM([])
            // setpageM(1)
        } else {
            setallItem && setallItem([...res.results])
            // setallItemM([])
            // setpageM(1)
        }
        dispatch({ type: constant.GETPOPULAR_TV, payload: res.results })

    }).catch((e) => {
        console.log(e);
    })


}
export const commingTv = () => (dispatch) => {
    tmdbApi.getTvList("on_the_air", {}).then((res) => {
        dispatch({ type: constant.COMMING_TV, payload: res.results })

    }).catch((e) => {
        console.log(e);
    })


}


// ...........................................

export const getitemdetailsMovie = (id, setdetails) => (dispatch) => {

    tmdbApi.detail("movie", id, {}).then((res) => {
        dispatch({ type: constant.getitemdetails, payload: res })
        setdetails(res)
    }).catch((e) => {
        console.log(e);
    })


}
export const getitemdcastMovie = (id, setcasts) => (dispatch) => {
    tmdbApi.credits("movie", id, {}).then((res) => {
        dispatch({ type: constant.getitemdcast, payload: res })
        setcasts(res)

    }).catch((e) => {
        console.log(e);
    })


}
export const getitemdvideoMovie = (id, setvideo) => (dispatch) => {
    tmdbApi.getVideos("movie", id, {}).then((res) => {
        dispatch({ type: constant.getitemdvideo, payload: res })
        setvideo(res)
    }).catch((e) => {
        console.log(e);
    })


}
export const getitemdsimilarMovie = (id, setsimilar) => (dispatch) => {
    tmdbApi.similar("movie", id).then((res) => {
        dispatch({ type: constant.getitemdsimilar, payload: res.results })
        setsimilar(res.results)
    }).catch((e) => {
        console.log(e);
    })


}

// /////////////////////////

export const getitemdetailsTv = (id, setdetails) => (dispatch) => {

    tmdbApi.detail("tv", id, {}).then((res) => {
        dispatch({ type: constant.getitemdetails, payload: res })
        setdetails(res)
    }).catch((e) => {
        console.log(e);
    })


}
export const getitemdcastTv = (id, setcasts) => (dispatch) => {
    tmdbApi.credits("tv", id, {}).then((res) => {
        dispatch({ type: constant.getitemdcast, payload: res })
        setcasts(res)

    }).catch((e) => {
        console.log(e);
    })


}
export const getitemdvideoTv = (id, setvideo) => (dispatch) => {
    tmdbApi.getVideos("tv", id, {}).then((res) => {
        dispatch({ type: constant.getitemdvideo, payload: res })
        setvideo(res)
    }).catch((e) => {
        console.log(e);
    })


}
export const getitemdsimilarTv = (id, setsimilar) => (dispatch) => {
    tmdbApi.similar("tv", id).then((res) => {
        dispatch({ type: constant.getitemdsimilar, payload: res.results })
        setsimilar(res.results)
    }).catch((e) => {
        console.log(e);
    })


}



export const serachMovie = (search, setallItemM) => (dipatch) => {
    tmdbApi.search("movie", {}, search).then((res1) => {
        tmdbApi.search("movie", {}, 2).then((res2) => {
            setallItemM && setallItemM([...res1.results, ...res2.results])
        })
    }).catch((e) => {
        console.log(e);

    })
}
export const serachTv = (search, setallItemTv) => (dipatch) => {
    tmdbApi.search("tv", {}, search).then((res1) => {
        tmdbApi.search("tv", {}, 2).then((res2) => {
            setallItemTv && setallItemTv([...res1.results, ...res2.results])
        })
    }).catch((e) => {
        console.log(e);

    })
}


