import { SET_LYRICS } from '../../react/constants';
import axios from 'axios';

const setLyrics = (text) => {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

export const fetchLyrics = function (artist, song) {
  return function (dispatch) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};

export default setLyrics;
