export default function togglePlaying(playing, deck){
  console.log("toggle playing")
  return {
    type: `TOGGLE_PLAYING_DECK_${deck.position}`,
    payload: {playing: playing}
  }
}
