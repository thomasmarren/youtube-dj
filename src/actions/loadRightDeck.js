export function loadRightDeck(id,title){
  return {
    type: 'LOAD_RIGHT_DECK',
    payload: {id: id, title: title}
  }
}
