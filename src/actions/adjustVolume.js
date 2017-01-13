export default function adjustVolume(slider, deck){
  return {
    type: `ADJUST_VOLUME_DECK_${deck.position}`,
    payload: {slider: slider}
  }
}
