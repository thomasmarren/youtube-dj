export default function crossFade(slider, decks){
  return {
    type: `CROSS_FADE`,
    payload: {slider: slider}
  }
}
