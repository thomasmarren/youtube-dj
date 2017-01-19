export default function deckLoaded(deck){
  return {
    type: `DECK_${deck.position}_LOADED`,
    payload: false
  }
}
