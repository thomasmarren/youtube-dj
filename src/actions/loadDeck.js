export function loadDeck(id,title,deck){
  return {
    type: `LOAD_DECK_${deck}`,
    payload: {id: id, title: title}
  }
}
