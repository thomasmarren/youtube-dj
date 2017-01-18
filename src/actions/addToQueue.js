export default function addToQueue(youtubeId, title){
  return {
    type: `ADD_TO_QUEUE`,
    payload: {track: {youtubeId: youtubeId, title: title}}
  }
}
