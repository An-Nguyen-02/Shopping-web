import { takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsStartAsync() {
  yield console.log("hello");
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH__COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}
