import { SET_LYRICS } from '../../react/constants';

const setLyrics = (text) => {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

export default setLyrics;
