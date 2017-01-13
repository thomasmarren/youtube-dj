export default function setPosition(position, deck){
  return {
    type: `SET_POSITION_DECK_${deck.position}`,
    payload: {position: position}
  }
}
