import axios from 'axios';
const KEY = 'AIzaSyC8VcoQllNjkrnmUa8Jb7p-k4-Jc02oq1o';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});