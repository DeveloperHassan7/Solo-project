import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchBuilding(action) {
    try{
        const response = yield axios.get('/api/building');
        yield put({type:'SET_BUILDING', payload: response.data})
    } catch (error) {
        console.log('Error in getting building', error);
    }
}

function* addBuilding(action) {
    try{
        const response = yield axios.post('/api/building', action.payload);
        yield put({type:'FETCH_BUILDING', payload: response.data})
    } catch (error) {
        console.log('Error in getting building', error);
    }
}


function* buildingSaga() {
    yield takeLatest('FETCH_BUILDING', fetchBuilding);
    yield takeLatest('ADD_BUILDING', addBuilding )
}

export default buildingSaga;