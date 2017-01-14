export default function setDuration(duration, deck){
  return {
    type: `SET_DURATION_DECK_${deck.position}`,
    payload: {duration: duration}
  }
}
