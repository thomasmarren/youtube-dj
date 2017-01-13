export function loadLeftTrack(id,title){
  return {
    type: 'LOAD_LEFT_TRACK',
    payload: {id: id, title: title}
  }
}
