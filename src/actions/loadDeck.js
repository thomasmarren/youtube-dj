export default function loadDeck(youtubeId,title,deck){
  console.log("hit loadDeck for " + deck)
  return {
    type: `LOAD_DECK_${deck}`,
    payload: {youtubeId: youtubeId, title: title}
  }
}
