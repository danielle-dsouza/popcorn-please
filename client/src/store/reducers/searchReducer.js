import { SEARCH_SUCCESS, SEARCH_ERR } from "../actions/actionsTypes";

const initState = {
    title: "",
    year: "",
    plot: "",
    poster: ""
}

const searchReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {

        case SEARCH_SUCCESS:
            return {
                ...state,
                title: payload.title,
                year: payload.year,
                plot: payload.plot,
                poster: payload.poster
            };

        case SEARCH_ERR:
            return {
                ...state
            }

        default:
            return state

    }
}

export default searchReducer;
