import { combineReducers } from "redux"
import movieReducer from "./reducer/product"
import tvReducer from "./reducer/tv"

const rootReducer = combineReducers({
    movieReducer: movieReducer,
    tvReducer: tvReducer
})

export default rootReducer