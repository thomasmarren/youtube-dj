export function loadLeftDeck(id,title){
  return {
    type: 'LOAD_LEFT_DECK',
    payload: {id: id, title: title}
  }
}
