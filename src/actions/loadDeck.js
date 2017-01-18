export default function loadDeck(youtubeId,title,deck){
  return {
    type: `LOAD_DECK_${deck}`,
    payload: {youtubeId: youtubeId, title: title}
  }
}
