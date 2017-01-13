export function loadLeftVideo(id,title){
  return {
    type: 'LOAD_LEFT_VIDEO',
    payload: {id: id, title: title}
  }
}
