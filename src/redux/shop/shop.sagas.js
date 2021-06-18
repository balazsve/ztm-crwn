import { takeLatest, call, put, all } from "redux-saga/effects"; // creates a non-blocking code, doesn't stops the application

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired!");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get(); // comes back in a promise form
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot); //yield function if it's takes longer than expected
    yield put(fetchCollectionsSuccess(collectionMap)); // instead of a dispatch
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  // pauses whenever a specific action comes in
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  ); // another generator function will run in response
}

export function* shopSagas() {
  yield all([call(fetchCollectionsAsync)]);
}
