export default function togglePlaying(playing, deck){
  return {
    type: `TOGGLE_PLAYING_DECK_${deck.position}`,
    payload: {playing: playing}
  }
}
