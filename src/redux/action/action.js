import * as types from './../type/type'
export const postDataRequest=(data)=>{
   return{
      type:types.POST_REQUEST,
      payload:data
   }
  }

  export const postDataSuccess=(data)=>{
   console.log(data)
   return{
       type:types.POST_SUCCESS,
       payload:data
    }
}