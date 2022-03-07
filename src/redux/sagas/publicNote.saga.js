import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPublicNote() {
    try{
        const response = yield axios.get(`/api/favorites`);
        yield put ({ type: 'SET_PUBLIC_NOTE', payload: response.data})
    } catch(error) {
        console.log('Error in getting pubic note', error);
    }
}

function* publicNoteSaga() {
    yield takeLatest('FETCH_PUBLIC_NOTE', fetchPublicNote);
}

export default publicNoteSaga;