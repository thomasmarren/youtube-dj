export default function restartTrack(deck){
  return {
    type: `SET_POSITION_DECK_${deck.position}`,
    payload: {position: 0}
  }
}
