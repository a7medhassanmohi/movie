import constant from "../constant"

const init = {
    trending: [],
    popular: [],
    comming: [],
    item: [],
    casts: [],
    similar: [],
    video: [],


}

const movieReducer = (state = init, action) => {
    switch (action.type) {
        case constant.GETTREND_MOVIE: {
            return { ...state, trending: action.payload }
        }
        case constant.GETPOPULAR_MOVIE: {
            return { ...state, popular: action.payload }
        }
        case constant.COmming_MOVIE: {
            return { ...state, comming: action.payload }
        }
        case constant.getitemdetails: {
            return { ...state, item: action.payload }
        }
        case constant.getitemdcast: {
            return { ...state, casts: action.payload }
        }
        case constant.getitemdsimilar: {
            return { ...state, similar: action.payload }
        }
        case constant.getitemdvideo: {
            return { ...state, video: action.payload }
        }

        default:
            return state
    }
}
export default movieReducer