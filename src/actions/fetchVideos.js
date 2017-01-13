import axios from 'axios'
const API_KEY = 
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export function fetchVideos(searchTerm, token){
  let tokenUrl;
  token === undefined ? tokenUrl = " " : tokenUrl = `pageToken=${token}`

  return function(dispatch){
    axios.get(`${ROOT_URL}?${tokenUrl}&q=${searchTerm}&type=video&part=snippet&key=${API_KEY}`).then((response)=>{
      var videos = response.data.items.map(function(video){
        return {
          id: video.id.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.default.url,
        }
      })
      var nextPageToken = response.data.nextPageToken
      var prevPageToken = response.data.prevPageToken
      var tokens = {nextPageToken: nextPageToken, prevPageToken: prevPageToken}
      dispatch({
        type: "FETCH_VIDEOS",
        payload: {videos, tokens}
      })
    })
  }

}
