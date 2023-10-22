import { put, takeEvery, all, call } from 'redux-saga/effects';
import { GET_DATA_REQUEST, GET_MOVIES_SUCCESS } from '../type/types';
import geatData from '../../service/service';

//saga que llama con el (call) a una peticion en el servicio, y  con el (put) enlazamos en el reducer el resultado con el type
export function* sagaGetMovies() {
  const result = yield call(geatData)
 yield put({ type: GET_MOVIES_SUCCESS, result })
  
}
//Saga que inicializa dependiente del type de la accion, que dispara otra saga
function* rootSagas() {
  yield takeEvery(GET_DATA_REQUEST, sagaGetMovies)
  //yield all([sagaGetMovies()])
}
export default rootSagas