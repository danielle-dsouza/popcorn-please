import { ADD_NOM, DEL_NOM, NOM_ERR } from "../actions/actionsTypes";

const initState = [];

const nomReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOM:
      return [...state, payload];

    case DEL_NOM:
      return [...state.filter((nom) => nom.title !== payload.title)];

    case NOM_ERR:
      console.log("Error");
      return state;

    default:
      return state;
  }
};

export default nomReducer;
