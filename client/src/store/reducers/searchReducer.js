import { SEARCH_SUCCESS, SEARCH_ERR } from "../actions/actionsTypes";

const initState = {
    title: "",
    year: "",
    plot: "",
    poster: "",
    rated: "",
    released: "",
    genre: "",
    director: "",
    writer: "",
    actors: "",
    awards: "",
    // rating: "",
    boxOffice: ""
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
                poster: payload.poster,
                rated: payload.rated,
                released: payload.released,
                genre: payload.genre,
                director: payload.genre,
                writer: payload.writer,
                actors: payload.actors,
                awards: payload.awards,
                rating: payload.rating,
                boxOffice: payload.boxOffice
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
