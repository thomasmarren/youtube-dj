export function loadRightTrack(id,title){
  return {
    type: 'LOAD_RIGHT_TRACK',
    payload: {id: id, title: title}
  }
}
