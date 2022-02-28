import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* fetchFavorite() {
    try{
        const response = yield axios.get('api/favorites');
        yield put ({ type: 'SET_FAVORITE', payload: response.data})
    } catch(error) {
        console.log('Error in getting favorites', error);
    }
}

function* addFavorite(action) {
    console.log(action.payload);
    try{
        const response = yield axios.post('/api/favorites', action.payload);
        yield put({type:'FETCH_FAVORITES'})
    } catch (error) {
        console.log('Error in adding favorites', error);
    }
}

function* deleteFavorite(action) {
    // action is: { type: 'DELETE_FAVORITE', payload: 1}
    try{
        const response = yield axios.delete(`/api/favorites/${action.payload}`, );
        yield put({type:'FETCH_FAVORITES'})
    } catch (error) {
        console.log('Error in delete favorites', error);
    }
}

function* updatePrivateNote(action) {
    // action is: { type: 'UPDATE_PRIVATE_NOTE', payload: {id: 1, private_note: 'note'}}
    try{
        const response = yield axios.put(`/api/favorites/${action.payload.id}`, action.payload);
        yield put({type:'FETCH_FAVORITES'})
    } catch (error) {
        console.log('Error in updating private notes', error);
    }
}

function* updatePublicNote(action) {
    // action is: { type: 'UPDATE_PUBLIC_NOTE', payload: {id: 1, public_note: 'note'}}
    //My action which is an object will have a type and a payload. Since were passing in the id and the public the payload 
    //will be an object that will contain 2 keys. the id and the public note(which is a string)

    try{
        const response = yield axios.put(`/api/favorites/${action.payload.id}`, action.payload);
        yield put({type:'FETCH_FAVORITES'})
    } catch (error) {
        console.log('Error in updating public notes', error);
    }
}

function* updateRecommend (action) {
    // action is {type: 'UPDATE_RECOMMEND', payload: {id: 1, recommend: boolean}}
    try{
        const response = yield axios.put(`/api/favorites/${action.payload.id}`, action.payload);
        yield put({type:'FETCH_FAVORITES'})
    } catch (error) {
        console.log('Error in updating the recommend', error);
    }
}



function* favoriteSaga() {
    yield takeLatest('FETCH_FAVORITES', fetchFavorite);
    yield takeLatest('ADD_FAVORITE', addFavorite);
    yield takeLatest('DELETE_FAVORITE', deleteFavorite);
    yield takeLatest('UPDATE_PRIVATE_NOTE', updatePrivateNote);
    yield takeLatest('UPDATE_PUBLIC_NOTE', updatePublicNote);
    yield takeLatest('UPDATE_RECOMMEND', updateRecommend);
    

}

export default favoriteSaga;