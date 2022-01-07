import PopularSilder from "../../pages/popularSilder/PopularSilder"
import constant from "../constant"

const init = {
    tv: [],
    similiar: [],
    actor: [],
    trending: [],
    Popular: [],
    comming: []


}

const tvReducer = (state = init, action) => {
    switch (action.type) {
        case constant.GETPOPULAR_TV: {
            return { ...state, Popular: action.payload }
        }
        case constant.COMMING_TV: {
            return { ...state, comming: action.payload }
        }


        default:
            return state
    }
}
export default tvReducer