import * as types from "../../type/type";
const initialValue ={
    array:[],
    editobj: null,
    loading: false
}

const reducer =(state = initialValue, action)=>{
   console.log(state);
   console.log(action);
   switch (action.type){
    case types.POST_REQUEST:
    case types.GET_REQUEST:
    case types.DELETE_REQUEST:
      case types.GETAPI_REQUEST:
        case types.PUT_REQUEST:
      return {...state,  loading: true }
        case types.POST_SUCCESS:
      return { ...state, array: [...state.array, action.payload], loading: false }
   
   case types.GET_SUCCESS:
      return {
        ...state,
        array: action.payload, loading: false
      }

      case types.DELETE_SUCCESS:
        return {
          ...state,
          array: state.array.filter((item) => item.id !== action.payload),
          loading: false
        };
        case types.GETAPI_SUCCESS:
          return {
            ...state,
            editobj: action.payload,
            loading: false
          };

          case types.PUT_SUCCESS:
            return {
              ...state,
              array: state.array.map((item) =>
                item.id === action.payload.id ? action.payload : item
              ),
              loading: false
            };
      default:
        return state;
    }
}
export default reducer;