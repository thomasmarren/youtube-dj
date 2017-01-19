export default function fadeToNextTrack(deck){
  if(deck.position === "1"){
    var slider = 0
    setInterval( deck => {
      if (slider === 100) { clearInterval() }
      return {
        type: `AUTOPLAY_FADE_FROM_DECK_1`,
        payload: {slider += 2, ratio: slider += 2}
      }
    }, 1000)
  } else {
    var slider = 100
    setInterval( deck => {
      if (slider === 0) { clearInterval() }
      return {
        type: `AUTOPLAY_FADE_FROM_DECK_2`,
        payload: slider -= 2
      }
    }, 500)

  }
}
