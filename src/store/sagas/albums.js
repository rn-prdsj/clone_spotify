import api from 'services/api';
import { call, put } from 'redux-saga/effects';


import { Creators as AlbumsActions } from 'store/ducks/albums';


export function* getAlbums() {
    try {
        const response = yield call(api.get, '/5be58e372f000082000fc2e7');

        yield put(AlbumsActions.getAlbumsSuccess(response.data));
    } catch (err) {
        yield put(AlbumsActions.getAlbumsFailure('Erro ao buscar álbums da API'));
    }
}