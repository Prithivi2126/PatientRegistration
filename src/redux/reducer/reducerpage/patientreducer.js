import * as types from "../../type/type";
const initialValue ={
    array:[]
}

const reducer =(state = initialValue, action)=>{
   console.log(state);
   console.log(action);
   switch (action.type){
    case types.POST_REQUEST:
        return{
            ...state,

        }
   }
}
export default reducer;