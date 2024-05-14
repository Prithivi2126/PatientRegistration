import { all } from "redux-saga/effects";
import watchersaga from "./sagapage/saga";


export default function* rootsaga(){
    yield all([watchersaga()])
}
