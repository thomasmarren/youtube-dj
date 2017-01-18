import axios from 'axios'

export function fetchTracks(searchTerm, token = ''){
  return function(dispatch){
    axios.get("http://localhost:3000/search", {
      params: {
        search_term: searchTerm,
        token: token
      }
    })
    .then( res => {
      var tracks = res.data.tracks.map( track => {
        return {
          youtubeId: track.youtube_id,
          title: track.title,
          thumbnail: track.thumbnail,
        }
      })
      var nextPageToken = res.data.tokens.next_page_token
      var prevPageToken = res.data.tokens.prev_page_token
      var tokens = {nextPageToken: nextPageToken, prevPageToken: prevPageToken}
      dispatch({
        type: "FETCH_TRACKS",
        payload: {tracks, tokens}
      })
    })
  }

}
