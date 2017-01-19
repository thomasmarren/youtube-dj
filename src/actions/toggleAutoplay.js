export default function toggleAutoplay(queue){

  var autoplay = queue.autoplay ? false : true

  return {
    type: `TOGGLE_AUTOPLAY`,
    payload: autoplay
  }
}
