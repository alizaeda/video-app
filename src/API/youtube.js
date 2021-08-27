import axios from 'axios';

const KEY = 'AIzaSyDejJWS3IyK2sE9iVAhoRdi5TQy0-4V_FA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
