import 'isomorphic-fetch';
import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';

import { STOP_EDITING, setSaved, updateUserMetadata_remote, SAVE_METADATA_TO_REMOTE } from './actions';
import { saveNewMetadata } from '../auth/actions';
import { showSnackbar } from '../app/actions';

const baseurl = process.env.BASE_URL;


export function* watchUpdateMetadata() {
  while (true) {
    yield take(SAVE_METADATA_TO_REMOTE);
    // Update localStorage
    yield call(updateMetadataSaga);
  }
}

export function* updateMetadataSaga() {
  console.log('In updateMetadataSaga');

  let profile = localStorage.getItem('profile');
  profile = JSON.parse(profile);
  const user_id = profile.user_id;
  const id_token = localStorage.getItem('id_token');

  const user_metadata = localStorage.getItem('user_metadata');
  if(!user_metadata) {
    console.log('Could not find user_metadata');
  }


  const updateMetadata = () =>
    new Promise((resolve) => {
      axios({
        method: 'patch',
        baseURL: baseurl,
        url: 'update-profile',
        headers: {
            'cache-control': 'no-cache',
            user_id,
            id_token,
            user_metadata
        }
      }).then((response) => {
        console.log(response);
        const new_user_metadata = response.data.user_metadata;
        const currentLSprofile = JSON.parse(localStorage.getItem('profile'));
        const newLSprofile = {
            ...currentLSprofile,
        user_metadata: new_user_metadata
        };
        localStorage.setItem('profile', JSON.stringify(newLSprofile));
        resolve({ new_user_metadata });
      }).catch((error) => {
        console.log(error);
      });
    });

  try {
      const { new_user_metadata } = yield call(updateMetadata);
      yield put(saveNewMetadata(new_user_metadata));
      yield call(setSaved);
      //yield put(showSnackbar('Update Successful!'));
  }
  catch (error) {
      console.log('Metadata Update Failed...');
      console.log(error);
      //yield put(showSnackbar('Update failed.'));
  }


}
