import { GET_DATA_REQUEST, GET_MOVIES_SUCCESS } from "../type/types";

//Stado por defecto al iniciar todo
const initialState = {
  isLoading: false,
  data: [],
};

export function reducerData(state = initialState, action) {
  switch (action.type) {
    //se de volvera "return" , lo que este en el state = stado por defecto cuando el type GET_DATA_REQUEST este activo
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true };
// Cuando este type este activo GET_MOVIES_SUCCESS , se guardara en la data (en este caso inicializado en el stado ) el ressultado que se enlazo en la saga 
//con el mismo type  
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result.results,
      };

    default:
      return state;
  }
}
