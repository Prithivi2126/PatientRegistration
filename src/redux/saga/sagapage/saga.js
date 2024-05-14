import { takeLatest } from "redux-saga/effects";
import * as types from "../../type/type";



function* watchersaga(){
    console.log("watch");
    yield takeLatest(types.POST_REQUEST)
    
}


export default watchersaga;